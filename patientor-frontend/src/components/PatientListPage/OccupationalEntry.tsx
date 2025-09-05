import { OccupationalHealthcareEntry } from "../../types";
import { Typography } from "@mui/material";

interface Props {
  entry: OccupationalHealthcareEntry;
}

const OccupationalHealthcareEntryComponent = ({ entry }: Props) => {
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
    </div>
  );
};

export default OccupationalHealthcareEntryComponent;
