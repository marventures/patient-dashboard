import { redirect } from 'next/navigation';

const RootPage = async (): Promise<void> => {
  return redirect('/dashboard');
};

export default RootPage;
