import patientData from '../../data/patients';

import { PatientEntry, SafePatientEntry } from '../../types';

const getPatients = (): PatientEntry[] => {
  return patientData;
};

const getSafePatients = (): SafePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default { getPatients, getSafePatients };
