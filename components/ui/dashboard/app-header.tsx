import { Bell, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { images } from '@/constants';

const formatSegment = (segment: string) => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

export const AppHeader = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean).slice(1);

  return (
    <header>
      {/* App Header */}
      <div className='relative'>
        {/* Logo container with padding and background */}
        <div className='relative flex items-center justify-between px-4 py-5'>
          <Image
            className='flex'
            src={images.pdLogo}
            width={193}
            height={24}
            alt={'Project Director Logo'}
            priority
          />

          <div className='flex gap-2'>
            <Search strokeWidth={1.75} className='text-gray-400' />
            <Bell strokeWidth={1.75} className='text-gray-400' />
          </div>
        </div>

        {/* Gradient bottom border */}
        <div className='absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#4F4890] via-[#B8277D] to-[#4F4890]' />
      </div>
      <div className='flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
        <div className='flex items-center gap-2 px-4'>
          <SidebarTrigger className='-ml-1 text-gray-400 hover:text-gray-400' />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-4'
          />
          <Breadcrumb>
            <BreadcrumbList>
              {segments.length === 0 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                segments.map((seg, idx) => {
                  const isLast = idx === segments.length - 1;
                  const href = `/dashboard/${segments
                    .slice(0, idx + 1)
                    .join('/')}`;

                  // Special case for "ideas"
                  const label =
                    seg.toLowerCase() === 'ideas'
                      ? 'Ideas / Opportunities'
                      : formatSegment(seg);

                  return (
                    <div key={seg} className='flex items-center'>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link href={href}>{label}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}
                    </div>
                  );
                })
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};
