import express from 'express';
import { Response } from 'express';
import patientService from '../services/patientService';
import { NewPatientEntry, SafePatientEntry } from '../../types';
import { toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res: Response<SafePatientEntry[]>) => {
  const data = patientService.getSafePatients();
  res.send(data);
});

router.post('/', (req, res) => {
  try {
    const newEntry = toNewPatientEntry(req.body);

    const addedEntry: NewPatientEntry = patientService.addPatient(newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
