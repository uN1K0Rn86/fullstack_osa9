import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { NewPatient, Patient, SafePatient } from '../../types';
import { toNewPatientEntry } from '../utils';

const data = patientData;

const patients: Patient[] = data.map(obj => {
  const object = toNewPatientEntry(obj) as Patient;
  object.id = obj.id;
  return object;
});

const getPatients = (): Patient[] => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const getSafePatients = (): SafePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const id: string = uuid();
  const newPatient: Patient = {
    id: id,
    ...entry,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getSafePatients, addPatient, findById };
