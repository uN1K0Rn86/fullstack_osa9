import express from 'express';
import { Response } from 'express';
import patientService from '../services/patientService';
import { SafePatientEntry } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<SafePatientEntry[]>) => {
  const data = patientService.getSafePatients();
  res.send(data);
});

export default router;
