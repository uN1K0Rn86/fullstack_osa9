import { Gender, NewPatient } from '../types';
import { z } from 'zod';

export const EntrySchema = z.object({
  description: z.string(),
});

export const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string(),
  entries: z.array(EntrySchema).default([]),
});

export const toNewPatientEntry = (object: unknown): NewPatient => {
  return NewPatientSchema.parse(object);
};
