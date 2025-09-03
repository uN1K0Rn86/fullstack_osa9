import diagnosisData from '../../data/diagnoses';
import { DiagnosisEntry } from '../../types';

const getDiagnoses = (): DiagnosisEntry[] => {
  return diagnosisData;
};

export default { getDiagnoses };
