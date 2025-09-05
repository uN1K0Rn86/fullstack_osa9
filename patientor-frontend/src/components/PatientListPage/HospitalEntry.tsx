import { Typography } from "@mui/material";
import { HospitalEntry } from "../../types";

interface Props {
  entry: HospitalEntry;
}

const HospitalEntryComponent = ({ entry }: Props) => {
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
    </div>
  );
};

export default HospitalEntryComponent;
