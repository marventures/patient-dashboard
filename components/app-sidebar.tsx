'use client';

import * as React from 'react';
import {
  AudioWaveform,
  ClipboardList,
  Stethoscope,
  Command,
  GalleryVerticalEnd,
  Settings2,
  Users,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';

import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'Marvin Pacis',
    email: 'contact@marvinpacis.com',
  },
  teams: [
    {
      name: 'General Hospital',
      logo: GalleryVerticalEnd,
      plan: 'Inpatient',
    },
    {
      name: 'City Clinic',
      logo: AudioWaveform,
      plan: 'Outpatient',
    },
    {
      name: 'Wellness Center',
      logo: Command,
      plan: 'Emergency',
    },
  ],
  navMain: [
    {
      title: 'Patients',
      url: '#',
      icon: Users,
      isActive: true,
      items: [
        {
          title: 'All Patients',
          url: '#',
        },
        {
          title: 'Appointments',
          url: '#',
        },
        {
          title: 'Medical Records',
          url: '#',
        },
      ],
    },
    {
      title: 'Staff',
      url: '#',
      icon: Stethoscope,
      items: [
        {
          title: 'Doctors',
          url: '#',
        },
        {
          title: 'Nurses',
          url: '#',
        },
        {
          title: 'Support Staff',
          url: '#',
        },
      ],
    },
    {
      title: 'Reports',
      url: '#',
      icon: ClipboardList,
      items: [
        {
          title: 'Daily Summary',
          url: '#',
        },
        {
          title: 'Billing Reports',
          url: '#',
        },
        {
          title: 'Inventory',
          url: '#',
        },
        {
          title: 'Audit Logs',
          url: '#',
        },
      ],
    },
    {
      title: 'Administration',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General Settings',
          url: '#',
        },
        {
          title: 'User Management',
          url: '#',
        },
        {
          title: 'Billing & Insurance',
          url: '#',
        },
        {
          title: 'System Preferences',
          url: '#',
        },
      ],
    },
  ],
};

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
