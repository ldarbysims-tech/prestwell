import Link from 'next/link';
import OliveMark from '@/components/brand/OliveMark';

interface BrandLockupProps {
  href?: string;
  light?: boolean;
  compact?: boolean;
}

export default function BrandLockup({
  href = '/',
  light = false,
  compact = false,
}: BrandLockupProps) {
  const nameColor = light ? 'text-white' : 'text-navy-700';
  const subColor = light ? 'text-white/55' : 'text-slate-mid';
  const markColor = light ? 'text-gold-400' : 'text-gold-500';

  const inner = (
    <span className="inline-flex items-center gap-3 group">
      <OliveMark
        size={compact ? 28 : 34}
        className={`${markColor} group-hover:opacity-90 transition-opacity`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight ${nameColor} ${
            compact ? 'text-xl' : 'text-2xl'
          }`}
        >
          Prestwell
        </span>
        <span
          className={`font-body tracking-[0.18em] uppercase ${subColor} ${
            compact ? 'text-[10px]' : 'text-xs'
          }`}
        >
          Continuum
        </span>
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex" aria-label="Prestwell Continuum home">
      {inner}
    </Link>
  );
}
