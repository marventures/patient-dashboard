import { Loader2 } from 'lucide-react';

const Loading = (): React.JSX.Element => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Loader2 className='text-muted-foreground h-8 w-8 animate-spin' />
      <span className='text-muted-foreground ml-2 text-sm'>Loading...</span>
    </div>
  );
};

export default Loading;
