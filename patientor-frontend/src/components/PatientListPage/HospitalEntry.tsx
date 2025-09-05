import { Typography } from "@mui/material";
import { Diagnosis, HospitalEntry } from "../../types";

interface Props {
  entry: HospitalEntry;
  diagnoses: Diagnosis[];
}

const HospitalEntryComponent = ({ entry, diagnoses }: Props) => {
  return (
    <div style={{ border: "1px solid black", padding: "5px", width: "100%" }}>
      <Typography variant="body1">Date: {entry.date}</Typography>
      <Typography variant="body1">Description: {entry.description}</Typography>
      <Typography variant="body1">Specialist: {entry.specialist}</Typography>
      <Typography variant="body1">
        Discharged on: {entry.discharge.date}
      </Typography>
      <Typography variant="body1">
        Criteria: {entry.discharge.criteria}
      </Typography>
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

export default HospitalEntryComponent;
