import { gql } from '@apollo/client';

export const GET_PATIENTS = gql`
  query GetPatients {
    patients {
      patientID
      name
      age
      gender
      diagnosis
      status
      doctor
      department
      admissionDate
      dischargeDate
    }
  }
`;
