import express from 'express';
import diagnosisService from '../services/diagnosisService';
import { Response } from 'express';
import { Diagnosis } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<Diagnosis[]>) => {
  const data = diagnosisService.getDiagnoses();
  res.send(data);
});

export default router;
