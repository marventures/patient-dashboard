import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Patient {
    patientID: String!
    name: String!
    age: Int!
    gender: String!
    diagnosis: String!
    status: String!
    doctor: String!
    department: String!
    admissionDate: String!
    dischargeDate: String
  }

  type Query {
    patients: [Patient!]!
  }
`;

const patients = [
  {
    patientID: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    diagnosis: 'Hypertension',
    status: 'admitted',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    admissionDate: '2025-09-01',
    dischargeDate: null,
  },
  {
    patientID: 'P002',
    name: 'Jane Smith',
    age: 37,
    gender: 'Female',
    diagnosis: 'Migraine',
    status: 'under-treatment',
    doctor: 'Dr. Johnson',
    department: 'Neurology',
    admissionDate: '2025-08-28',
  },
  {
    patientID: 'P003',
    name: 'Michael Brown',
    age: 29,
    gender: 'Male',
    diagnosis: 'Asthma',
    status: 'registered',
    doctor: 'Dr. Lee',
    department: 'Oncology',
    admissionDate: '2025-09-15',
  },
  {
    patientID: 'P004',
    name: 'Emily Davis',
    age: 54,
    gender: 'Female',
    diagnosis: 'Breast Cancer',
    status: 'scheduled',
    doctor: 'Dr. Patel',
    department: 'Oncology',
    admissionDate: '2025-09-20',
  },
  {
    patientID: 'P005',
    name: 'William Wilson',
    age: 63,
    gender: 'Male',
    diagnosis: 'Stroke',
    status: 'discharged',
    doctor: 'Dr. Johnson',
    department: 'Neurology',
    admissionDate: '2025-08-10',
    dischargeDate: '2025-08-20',
  },
  {
    patientID: 'P006',
    name: 'Sophia Martinez',
    age: 22,
    gender: 'Female',
    diagnosis: 'Arrhythmia',
    status: 'admitted',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    admissionDate: '2025-09-12',
  },
  {
    patientID: 'P007',
    name: 'James Anderson',
    age: 41,
    gender: 'Male',
    diagnosis: 'Diabetes',
    status: 'under-treatment',
    doctor: 'Dr. Lee',
    department: 'Oncology',
    admissionDate: '2025-08-30',
  },
  {
    patientID: 'P008',
    name: 'Olivia Garcia',
    age: 36,
    gender: 'Female',
    diagnosis: 'Seizures',
    status: 'scheduled',
    doctor: 'Dr. Johnson',
    department: 'Neurology',
    admissionDate: '2025-09-25',
  },
  {
    patientID: 'P009',
    name: 'Benjamin Thomas',
    age: 50,
    gender: 'Male',
    diagnosis: 'Heart Attack',
    status: 'admitted',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    admissionDate: '2025-09-14',
  },
  {
    patientID: 'P010',
    name: 'Mia Rodriguez',
    age: 31,
    gender: 'Female',
    diagnosis: 'Leukemia',
    status: 'registered',
    doctor: 'Dr. Patel',
    department: 'Oncology',
    admissionDate: '2025-09-10',
  },
  {
    patientID: 'P011',
    name: 'Ethan White',
    age: 47,
    gender: 'Male',
    diagnosis: 'Epilepsy',
    status: 'discharged',
    doctor: 'Dr. Johnson',
    department: 'Neurology',
    admissionDate: '2025-07-20',
    dischargeDate: '2025-08-05',
  },
  {
    patientID: 'P012',
    name: 'Charlotte Harris',
    age: 28,
    gender: 'Female',
    diagnosis: 'Brain Tumor',
    status: 'under-treatment',
    doctor: 'Dr. Lee',
    department: 'Oncology',
    admissionDate: '2025-08-22',
  },
  {
    patientID: 'P013',
    name: 'Daniel Clark',
    age: 39,
    gender: 'Male',
    diagnosis: 'Coronary Artery Disease',
    status: 'scheduled',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    admissionDate: '2025-09-30',
  },
  {
    patientID: 'P014',
    name: 'Amelia Lewis',
    age: 55,
    gender: 'Female',
    diagnosis: 'Alzheimer’s',
    status: 'admitted',
    doctor: 'Dr. Johnson',
    department: 'Neurology',
    admissionDate: '2025-09-16',
  },
  {
    patientID: 'P015',
    name: 'Lucas Walker',
    age: 44,
    gender: 'Male',
    diagnosis: 'Lung Cancer',
    status: 'under-treatment',
    doctor: 'Dr. Patel',
    department: 'Oncology',
    admissionDate: '2025-09-05',
  },
];

const resolvers = {
  Query: {
    patients: () => patients,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
});
