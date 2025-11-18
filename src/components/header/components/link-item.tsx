import { cn } from '@/lib';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  link: string;
  path: string;
  className?: string;
}

export const LinkItem: React.FC<Props> = ({ name, link, path, className }) => {
  return (
    <Link to={link}>
      <div
        className={cn(
          'max-sm:px-3 max-sm:py-2 py-3 px-4 text-white text-lg border-b-[4px] border-transparent hover:bg-lime-500/80',
          link == path && 'bg-lime-500/80',
          className,
        )}>
        {name}
      </div>
    </Link>
  );
};
