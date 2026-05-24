import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] hover:opacity-90',
        destructive:
          'bg-[color:var(--color-destructive)] text-[color:var(--color-destructive-foreground)] hover:opacity-90',
        outline:
          'border border-[color:var(--color-border)] bg-[color:var(--color-background)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]',
        secondary:
          'bg-[color:var(--color-secondary)] text-[color:var(--color-secondary-foreground)] hover:opacity-90',
        ghost:
          'hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]',
        link: 'text-[color:var(--color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-6 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
