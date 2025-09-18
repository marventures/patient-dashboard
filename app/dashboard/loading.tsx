import { Loader2 } from 'lucide-react';

/**
 * @route Loading
 * @version 1.0.0
 * @updated 18/09/2025
 * @author Marvin M. Pacis (2025)
 *
 * The `Loading` component displays a centered loading spinner with a "Loading..." message inside dashboard routes.
 * Typically used as a fallback UI during route transitions or asynchronous operations.
 *
 * Features:
 * - Displays a spinning `Loader2` icon from `lucide-react`.
 * - Shows a subtle status message to inform the user.
 *
 * Utilizes:
 * - Tailwind CSS for layout, spacing, and styling.
 * - `lucide-react` for animated loader icon.
 *
 * @returns {React.JSX.Element} The loading UI with spinner and message.
 *
 * @example
 * <Loading />
 */
const Loading = (): React.JSX.Element => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Loader2 className='text-muted-foreground h-8 w-8 animate-spin' />
      <span className='text-muted-foreground ml-2 text-sm'>Loading...</span>
    </div>
  );
};

export default Loading;
