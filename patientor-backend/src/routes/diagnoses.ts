import express from 'express';
import diagnosisService from '../services/diagnosisService';
import { Response } from 'express';
import { DiagnosisEntry } from '../../types';

const router = express.Router();

router.get('/', (_req, res: Response<DiagnosisEntry[]>) => {
  const data = diagnosisService.getDiagnoses();
  res.send(data);
});

export default router;
