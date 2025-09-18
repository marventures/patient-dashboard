// components/dashboard/app-sidebar/nav-main/index.tsx
'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

/**
 * @component NavMain
 * @version 1.0.0
 * @updated 31/07/2025
 * @author Marvin M. Pacis (2025)
 * @copyright © 2025 Agile Minds Consulting Ltd.
 *
 * The `NavMain` component renders the primary sidebar navigation menu with collapsible groups.
 * It dynamically displays navigation items and their nested sub-items based on the provided configuration.
 *
 * Features:
 * - Displays a list of navigation items with optional icons.
 * - Supports collapsible submenus for each main item.
 * - Highlights the active submenu item based on current route.
 * - Utilizes Next.js `usePathname` and `useRouter` for route detection and navigation.
 * - Styled using Tailwind CSS and composed of custom sidebar UI primitives.
 *
 * Utilizes:
 * - `SidebarGroup`, `SidebarMenu`, `SidebarMenuItem`, and related sidebar components.
 * - `lucide-react` icons for visual clarity.
 * - Next.js navigation hooks for routing logic.
 * - `Collapsible` component for expand/collapse functionality.
 *
 * @param {Object} props - Component props
 * @param {NavItem[]} props.items - An array of navigation item objects to render.
 *
 * @returns {React.JSX.Element} The rendered navigation menu for the sidebar.
 *
 * @example
 * <NavMain
 *   items={[
 *     {
 *       title: 'Dashboard',
 *       url: '/dashboard',
 *       icon: HomeIcon,
 *       items: [
 *         { title: 'Overview', url: '/dashboard/overview' },
 *         { title: 'Stats', url: '/dashboard/stats' }
 *       ]
 *     }
 *   ]}
 * />
 */
export const NavMain = ({ items }: { items: NavItem[] }): React.JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map(item => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className='group/collapsible'
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && (
                    <item.icon strokeWidth={1.75} className='text-gray-400' />
                  )}
                  <span>{item.title}</span>
                  <ChevronRight className='ml-auto text-gray-400 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map(subItem => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        onClick={() => router.push(subItem.url)}
                        className={pathname === subItem.url ? 'bg-muted' : ''}
                      >
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
