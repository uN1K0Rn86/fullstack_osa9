import { Diagnosis, Entry } from "../../types";
import { assertNever } from "../../utils";
import HealthCheckEntryComponent from "./HealthCheckEntry";
import HospitalEntryComponent from "./HospitalEntry";
import OccupationalHealthcareEntryComponent from "./OccupationalEntry";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const PatientEntry = ({ entry, diagnoses }: Props) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryComponent entry={entry} diagnoses={diagnoses} />;
    case "HealthCheck":
      return <HealthCheckEntryComponent entry={entry} diagnoses={diagnoses} />;
    case "OccupationalHealthcare":
      return (
        <OccupationalHealthcareEntryComponent
          entry={entry}
          diagnoses={diagnoses}
        />
      );
    default:
      return assertNever(entry);
  }
};

export default PatientEntry;
