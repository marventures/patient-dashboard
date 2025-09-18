import { redirect } from 'next/navigation';

/**
 * @route RootPage
 * @version 1.0.0
 * @updated 18/09/2025
 * @author Marvin M. Pacis (2025)
 *
 * The `RootPage` route acts as the main entry point of the application and handles initial routing logic.
 * It programmatically redirects users to the `/dashboard` route upon visiting the root path.
 *
 * Features:
 * - Server-side redirection to the main dashboard route.
 *
 * Utilizes:
 * - `redirect` from `next/navigation` to perform a server-side redirect.
 *
 * @async
 * @returns {Promise<void>} This route does not render a UI; it triggers a redirection to `/dashboard`.
 *
 * @example
 * // Visiting `/` will redirect users to `/dashboard`
 * <RootPage />
 */
const RootPage = async (): Promise<void> => {
  return redirect('/dashboard');
};

export default RootPage;
