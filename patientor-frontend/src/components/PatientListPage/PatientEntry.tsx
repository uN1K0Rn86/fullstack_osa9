import { Entry } from "../../types";
import { assertNever } from "../../utils";
import HealthCheckEntryComponent from "./HealthCheckEntry";
import HospitalEntryComponent from "./HospitalEntry";
import OccupationalHealthcareEntryComponent from "./OccupationalEntry";

interface Props {
  entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryComponent entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryComponent entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntryComponent entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default PatientEntry;
