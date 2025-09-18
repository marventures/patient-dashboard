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
import { Separator } from '@/components/ui/separator';

const ideaSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(35, 'Name cannot be longer than 35 characters'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(500, 'Description cannot be longer than 500 characters'),
});

type IdeaFormValues = z.infer<typeof ideaSchema>;

interface DialogBaseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DialogBase = ({ open, setOpen }: DialogBaseProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IdeaFormValues>({
    resolver: zodResolver(ideaSchema),
    defaultValues: { name: '', description: '' },
  });

  // TODO:
  const onSubmit = (data: IdeaFormValues) => {
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
          <DialogTitle className='sr-only'>New Patient</DialogTitle>
          <DialogDescription className='sr-only'>
            Create new patient
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 gap-y-3'
        >
          <div className='grid grid-cols-1 gap-y-4'>
            {/* Name */}
            <div>
              <Label htmlFor='name' className='sr-only'>
                Name
              </Label>

              {errors.name && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <Label htmlFor='description' className='sr-only'>
                Description
              </Label>

              {errors.description && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <Separator />

          <DialogFooter>
            <div className='flex w-full justify-end'>
              <Button className={'w-auto px-6'} size='sm'>
                Add Patient
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
