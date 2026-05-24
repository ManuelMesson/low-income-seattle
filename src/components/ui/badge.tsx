import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]',
        secondary:
          'border-transparent bg-[color:var(--color-secondary)] text-[color:var(--color-secondary-foreground)]',
        outline: 'text-[color:var(--color-foreground)]',
        destructive:
          'border-transparent bg-[color:var(--color-destructive)] text-[color:var(--color-destructive-foreground)]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
