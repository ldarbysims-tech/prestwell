import Link from 'next/link';
import Image from 'next/image';

interface BrandLockupProps {
  href?: string;
  light?: boolean;
  compact?: boolean;
}

export default function BrandLockup({
  href = '/',
  compact = false,
}: BrandLockupProps) {
  const size = compact ? 56 : 72;

  const inner = (
    <span className="inline-flex items-center group">
      <Image
        src="/brand/logo.png"
        alt="Prestwell Continuum"
        width={size}
        height={size}
        className="rounded-full object-cover shadow-soft group-hover:opacity-95 transition-opacity"
        priority
      />
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex" aria-label="Prestwell Continuum home">
      {inner}
    </Link>
  );
}
