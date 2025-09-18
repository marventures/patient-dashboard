import { AlertCircle } from 'lucide-react';

export const ErrorIndicator = ({
  message = 'Something went wrong',
}): React.JSX.Element => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <AlertCircle className='h-8 w-8 animate-pulse text-red-500' />
      <span className='ml-2 text-sm text-red-600'>{message}</span>
    </div>
  );
};
