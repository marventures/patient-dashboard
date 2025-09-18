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
    patientID: 1,
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
    patientID: 2,
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
    patientID: 3,
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
    patientID: 4,
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
    patientID: 5,
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
    patientID: 6,
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
    patientID: 7,
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
    patientID: 8,
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
    patientID: 9,
    name: 'Benjamin Thomas',
    age: 50,
    gender: 'Male',
    diagnosis: 'Heart Attack',
    status: 'admitted',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    admissionDate: '2025-09-14',
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
