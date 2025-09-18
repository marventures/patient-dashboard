import { create } from 'zustand';
import { Patient } from '@/types/patient';

interface PatientState {
  patients: Patient[];
  setPatients: (patients: Patient[]) => void;
  addPatient: (patient: Patient) => void;
}

export const usePatientStore = create<PatientState>(set => ({
  patients: [],
  setPatients: patients => set({ patients }),
  addPatient: patient =>
    set(state => ({ patients: [...state.patients, patient] })),
}));
