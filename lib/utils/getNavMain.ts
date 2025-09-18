import { House, Store, Copy, Users, Clock, Pin, UserRound } from 'lucide-react';

export const getNavMain = (pathname: string) => [
  {
    title: 'Home',
    url: '#',
    icon: House,
    isActive: pathname === '/dashboard',
    items: [{ title: 'Dashboard', url: '/dashboard' }],
  },
  {
    title: 'Business Unit',
    url: '#',
    icon: Store,
    isActive: pathname.startsWith('/dashboard/business-unit'),
    items: [
      { title: 'Overview', url: '/dashboard/business-unit' },
      { title: 'Goals/Objectives', url: '/dashboard/business-unit/goals' },
      { title: 'Financials', url: '/dashboard/business-unit/financials' },
      { title: 'KPIs', url: '/dashboard/business-unit/kpis' },
      { title: 'Settings', url: '/dashboard/business-unit/settings' },
    ],
  },
  {
    title: 'Portfolio',
    url: '#',
    icon: Copy,
    items: [
      {
        title: 'Overview',
        url: '/dashboard/portfolio',
      },
      {
        title: 'Favourites',
        url: '/dashboard/portfolio/favourites',
      },
      {
        title: 'Goals/Objectives',
        url: '/dashboard/portfolio/goals',
      },
      {
        title: 'Financials',
        url: '/dashboard/portfolio/financials',
      },
      {
        title: 'KPIs',
        url: '/dashboard/portfolio/kpis',
      },
    ],
  },
  {
    title: 'Programme',
    url: '#',
    icon: Users,
    items: [
      {
        title: 'Overview',
        url: '/dashboard/programme',
      },
      {
        title: 'Favourites',
        url: '/dashboard/programme/favourites',
      },
      {
        title: 'Goals/Objectives',
        url: '/dashboard/programme/goals',
      },
      {
        title: 'Financials',
        url: '/dashboard/programme/financials',
      },
      {
        title: 'KPIs',
        url: '/dashboard/programme/kpis',
      },
    ],
  },
  {
    title: 'Projects',
    url: '#',
    icon: Clock,
    items: [
      {
        title: 'Overview',
        url: '/dashboard/projects',
      },
      {
        title: 'Favourites',
        url: '/dashboard/projects/favourites',
      },
      {
        title: 'Business Case',
        url: '/dashboard/projects/business-cases',
      },
      {
        title: 'Schedule',
        url: '/dashboard/projects/schedules',
      },
      {
        title: 'Financials',
        url: '/dashboard/projects/financials',
      },
      {
        title: 'Resources',
        url: '/dashboard/projects/resources',
      },
      {
        title: 'KPIs',
        url: '/dashboard/projects/kpis',
      },
      {
        title: 'Risks',
        url: '/dashboard/projects/risks',
      },
      {
        title: 'Issues',
        url: '/dashboard/projects/issues',
      },
      {
        title: 'Tasks',
        url: '/dashboard/projects/tasks',
      },
      {
        title: 'Documents',
        url: '/dashboard/projects/documents',
      },
    ],
  },
  {
    title: 'Ideas/Opportunities',
    url: '#',
    icon: Pin,
    items: [
      {
        title: 'Overview',
        url: '/dashboard/ideas',
      },
      {
        title: 'Favourites',
        url: '/dashboard/ideas/favourites',
      },
    ],
  },
  {
    title: 'Resources',
    url: '#',
    icon: UserRound,
    items: [
      {
        title: 'Overview',
        url: '/dashboard/resources',
      },
      {
        title: 'Favourites',
        url: '/dashboard/resources/favourites',
      },
    ],
  },
];
