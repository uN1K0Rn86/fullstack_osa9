/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { Response } from 'express';
import patientService from '../services/patientService';
import { NewPatientEntry, SafePatientEntry } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<SafePatientEntry[]>) => {
  const data = patientService.getSafePatients();
  res.send(data);
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedEntry: NewPatientEntry = patientService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });
  res.json(addedEntry);
});

export default router;
