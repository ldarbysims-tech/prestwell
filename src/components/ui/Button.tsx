import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  external?: boolean;
  'aria-label'?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-700 hover:bg-navy-800 text-white shadow-soft hover:shadow-warm hover:-translate-y-0.5',
  secondary:
    'bg-gold-500 hover:bg-gold-600 text-navy-900 shadow-soft hover:shadow-warm hover:-translate-y-0.5',
  gold:
    'bg-gold-500 hover:bg-gold-600 text-navy-900 shadow-soft hover:shadow-warm hover:-translate-y-0.5',
  outline:
    'border border-navy-700 text-navy-700 hover:bg-navy-50 hover:border-navy-800',
  ghost:
    'text-navy-700 hover:bg-cream-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm rounded-lg',
  md:  'px-6 py-3 text-sm rounded-xl',
  lg:  'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  external = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium font-body transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
