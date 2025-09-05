import { Diagnosis, OccupationalHealthcareEntry } from "../../types";
import { Typography } from "@mui/material";

interface Props {
  entry: OccupationalHealthcareEntry;
  diagnoses: Diagnosis[];
}

const OccupationalHealthcareEntryComponent = ({ entry, diagnoses }: Props) => {
  if (!diagnoses) return <div>Loading...</div>;
  return (
    <div style={{ border: "1px solid black", padding: "5px", width: "100%" }}>
      <Typography variant="body1">Date: {entry.date}</Typography>
      <Typography variant="body1">Description: {entry.description}</Typography>
      <Typography variant="body1">Specialist: {entry.specialist}</Typography>
      <Typography variant="body1">Employer: {entry.employerName}</Typography>
      {entry.sickLeave && (
        <Typography variant="body1">
          Sick leave: {entry.sickLeave.startDate} - {entry.sickLeave.endDate}
        </Typography>
      )}
      {entry.diagnosisCodes && (
        <div>
          <Typography variant="body1">Diagnoses: </Typography>
          <ul>
            {entry.diagnosisCodes.map((code) => {
              const diagnosis = diagnoses.find((d) => d.code === code);
              return (
                <li key={code}>
                  <Typography variant="body1">
                    {code}: {diagnosis ? diagnosis.name : "Unknown diagnosis"}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OccupationalHealthcareEntryComponent;
