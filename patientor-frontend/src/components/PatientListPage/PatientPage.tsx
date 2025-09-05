import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Gender, Patient } from "../../types";
import patientService from "../../services/patients";
import { useEffect, useState } from "react";
import PatientEntry from "./PatientEntry";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        const result = await patientService.getPatient(id);
        setPatient(result);
      }
    };
    fetchPatient();
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  const genderIcons: Record<Gender, JSX.Element> = {
    male: <MaleIcon />,
    female: <FemaleIcon />,
    other: <TransgenderIcon />,
  };

  return (
    <div>
      <Typography variant="h4">
        {patient.name} {genderIcons[patient.gender]}
      </Typography>
      <Typography variant="body1">SSN: {patient.ssn}</Typography>
      <Typography variant="body1">Occupation: {patient.occupation}</Typography>
      <br />
      <Typography variant="h6">Entries: </Typography>
      {patient.entries.map((e) => (
        <div>
          <PatientEntry key={e.id} entry={e} />
        </div>
      ))}
    </div>
  );
};

export default PatientPage;
