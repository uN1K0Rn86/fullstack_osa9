import { Diagnosis, HealthCheckEntry } from "../../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

interface Props {
  entry: HealthCheckEntry;
  diagnoses: Diagnosis[];
}

const HealthCheckEntryComponent = ({ entry, diagnoses }: Props) => {
  return (
    <div style={{ border: "1px solid black", padding: "5px", width: "100%" }}>
      <Typography variant="body1">Date: {entry.date}</Typography>
      <Typography variant="body1">Description: {entry.description}</Typography>
      <Typography variant="body1">Specialist: {entry.specialist}</Typography>
      {entry.healthCheckRating === 0 && <FavoriteIcon sx={{ color: "red" }} />}
      {entry.healthCheckRating === 1 && (
        <FavoriteIcon sx={{ color: "orange" }} />
      )}
      {entry.healthCheckRating === 2 && (
        <FavoriteIcon sx={{ color: "yellow" }} />
      )}
      {entry.healthCheckRating === 3 && (
        <FavoriteIcon sx={{ color: "green" }} />
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

export default HealthCheckEntryComponent;
