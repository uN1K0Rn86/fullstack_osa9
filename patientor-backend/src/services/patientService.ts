import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { NewPatientEntry, PatientEntry, SafePatientEntry } from '../../types';

const patients = patientData;

const getPatients = (): PatientEntry[] => {
  return patients;
};

const getSafePatients = (): SafePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry) => {
  const id: string = uuid();
  const newPatient: PatientEntry = {
    id: id,
    ...entry,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getSafePatients, addPatient };
