import { NewPatientEntry } from '../types';

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  console.log(object);
  const newEntry: NewPatientEntry = {
    name: 'Fake',
    dateOfBirth: 'Fake',
    ssn: 'fake',
    gender: 'male',
    occupation: 'fake',
  };

  return newEntry;
};
