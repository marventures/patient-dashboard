import { ClipboardList, Bed, Activity, Calendar, LogOut } from 'lucide-react';

export const patientStatuses = [
  {
    value: 'registered',
    label: 'Registered',
    icon: ClipboardList,
  },
  {
    value: 'admitted',
    label: 'Admitted to Ward',
    icon: Bed,
  },
  {
    value: 'under-treatment',
    label: 'Under Treatment',
    icon: Activity,
  },
  {
    value: 'scheduled',
    label: 'Scheduled for Procedure',
    icon: Calendar,
  },
  {
    value: 'discharged',
    label: 'Discharged',
    icon: LogOut,
  },
];
