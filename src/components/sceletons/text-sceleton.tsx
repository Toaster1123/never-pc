import { cn } from '@/lib';
import React from 'react';

interface Props {
  className?: string;
}

export const TextSceleton: React.FC<Props> = ({ className }) => {
  return <div className={cn('bg-gray-300 animate-pulse rounded-md', className)} />;
};
