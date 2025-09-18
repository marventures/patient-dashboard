// This type defines the shape of a Patient record.
export type Patient = {
  patientID: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  diagnosis: string;
  status:
    | 'registered'
    | 'admitted'
    | 'under-treatment'
    | 'scheduled'
    | 'discharged';
  doctor: 'Dr. Smith' | 'Dr. Johnson' | 'Dr. Lee';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Pediatrics';
  admissionDate: string;
  dischargeDate?: string | null;
};
