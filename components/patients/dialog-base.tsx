// components/patients/dialog-base.tsx

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const patientSchema = z.object({
  patientID: z.string().min(1, 'Patient ID is required'),
  name: z.string().min(1, 'Name is required').max(50),
  age: z.coerce.number().min(0, 'Age must be positive'),
  gender: z.enum(['Male', 'Female', 'Other']),
  diagnosis: z.string().min(1, 'Diagnosis is required'),
  status: z.enum([
    'registered',
    'admitted',
    'under-treatment',
    'scheduled',
    'discharged',
  ]),
  doctor: z.enum(['Dr. Smith', 'Dr. Johnson', 'Dr. Lee']),
  department: z.enum(['Cardiology', 'Neurology', 'Oncology', 'Pediatrics']),
  admissionDate: z.string().min(1, 'Admission date is required'),
  dischargeDate: z.string().optional().nullable(),
});

type PatientFormValues = z.infer<typeof patientSchema>;

interface DialogBaseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DialogBase = ({ open, setOpen }: DialogBaseProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema) as any,
    defaultValues: {
      patientID: '',
      name: '',
      age: 0,
      gender: 'Male',
      diagnosis: '',
      status: 'registered',
      doctor: 'Dr. Lee',
      department: 'Cardiology',
      admissionDate: '',
      dischargeDate: '',
    },
  });

  const onSubmit = (data: PatientFormValues) => {
    console.log('Form Submitted:', data);
    setOpen(false);
    reset();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        setOpen(isOpen);
        if (!isOpen) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button size='sm'>Add Patient</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[728px]'>
        <DialogHeader>
          <DialogTitle>New Patient</DialogTitle>
          <DialogDescription>Create a new patient record</DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4'
        >
          {/* Patient ID */}
          <div className='col-span-1'>
            <Label htmlFor='patientID' className='mb-1'>
              Patient ID
            </Label>
            <Input id='patientID' {...register('patientID')} />
            {errors.patientID && (
              <p className='text-xs text-red-500'>{errors.patientID.message}</p>
            )}
          </div>

          {/* Name */}
          <div className='col-span-1'>
            <Label htmlFor='name' className='mb-1'>
              Name
            </Label>
            <Input id='name' {...register('name')} />
            {errors.name && (
              <p className='text-xs text-red-500'>{errors.name.message}</p>
            )}
          </div>

          {/* Age */}
          <div className='col-span-1'>
            <Label htmlFor='age' className='mb-1'>
              Age
            </Label>
            <Input id='age' type='number' {...register('age')} />
            {errors.age && (
              <p className='text-xs text-red-500'>{errors.age.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className='col-span-1'>
            <Label htmlFor='gender' className='mb-1'>
              Gender
            </Label>
            <Select
              defaultValue='Male'
              onValueChange={val =>
                setValue('gender', val as PatientFormValues['gender'])
              }
            >
              <SelectTrigger id='gender'>
                <SelectValue placeholder='Select gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Male'>Male</SelectItem>
                <SelectItem value='Female'>Female</SelectItem>
                <SelectItem value='Other'>Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className='text-xs text-red-500'>{errors.gender.message}</p>
            )}
          </div>

          {/* Diagnosis */}
          <div className='col-span-2'>
            <Label htmlFor='diagnosis' className='mb-1'>
              Diagnosis
            </Label>
            <Input id='diagnosis' {...register('diagnosis')} />
            {errors.diagnosis && (
              <p className='text-xs text-red-500'>{errors.diagnosis.message}</p>
            )}
          </div>

          {/* Status */}
          <div className='col-span-1'>
            <Label htmlFor='status' className='mb-1'>
              Status
            </Label>
            <Select
              defaultValue='registered'
              onValueChange={val =>
                setValue('status', val as PatientFormValues['status'])
              }
            >
              <SelectTrigger id='status'>
                <SelectValue placeholder='Select status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='registered'>Registered</SelectItem>
                <SelectItem value='admitted'>Admitted</SelectItem>
                <SelectItem value='under-treatment'>Under Treatment</SelectItem>
                <SelectItem value='scheduled'>Scheduled</SelectItem>
                <SelectItem value='discharged'>Discharged</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className='text-xs text-red-500'>{errors.status.message}</p>
            )}
          </div>

          {/* Doctor */}
          <div className='col-span-1'>
            <Label htmlFor='doctor' className='mb-1'>
              Doctor
            </Label>
            <Select
              defaultValue='Dr. Smith'
              onValueChange={val =>
                setValue('doctor', val as PatientFormValues['doctor'])
              }
            >
              <SelectTrigger id='doctor'>
                <SelectValue placeholder='Select doctor' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Dr. Smith'>Dr. Smith</SelectItem>
                <SelectItem value='Dr. Johnson'>Dr. Johnson</SelectItem>
                <SelectItem value='Dr. Lee'>Dr. Lee</SelectItem>
              </SelectContent>
            </Select>
            {errors.doctor && (
              <p className='text-xs text-red-500'>{errors.doctor.message}</p>
            )}
          </div>

          {/* Department */}
          <div className='col-span-1'>
            <Label htmlFor='department' className='mb-1'>
              Department
            </Label>
            <Select
              defaultValue='Cardiology'
              onValueChange={val =>
                setValue('department', val as PatientFormValues['department'])
              }
            >
              <SelectTrigger id='department'>
                <SelectValue placeholder='Select department' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Cardiology'>Cardiology</SelectItem>
                <SelectItem value='Neurology'>Neurology</SelectItem>
                <SelectItem value='Oncology'>Oncology</SelectItem>
                <SelectItem value='Pediatrics'>Pediatrics</SelectItem>
              </SelectContent>
            </Select>
            {errors.department && (
              <p className='text-xs text-red-500'>
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Admission Date */}
          <div className='col-span-1'>
            <Label htmlFor='admissionDate' className='mb-1'>
              Admission Date
            </Label>
            <Input
              id='admissionDate'
              type='date'
              {...register('admissionDate')}
            />
            {errors.admissionDate && (
              <p className='text-xs text-red-500'>
                {errors.admissionDate.message}
              </p>
            )}
          </div>

          {/* Discharge Date */}
          <div className='col-span-1'>
            <Label htmlFor='dischargeDate' className='mb-1'>
              Discharge Date
            </Label>
            <Input
              id='dischargeDate'
              type='date'
              {...register('dischargeDate')}
            />
            {errors.dischargeDate && (
              <p className='text-xs text-red-500'>
                {errors.dischargeDate.message}
              </p>
            )}
          </div>

          <Separator className='col-span-2' />

          <DialogFooter className='col-span-2'>
            <Button type='submit' className='px-6' size='sm'>
              Add Patient
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
