interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
  showRule?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  light = false,
  className = '',
  showRule = true,
}: SectionHeaderProps) {
  const alignClass   = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowColor = light ? 'text-gold-300' : 'text-gold-600';
  const headingColor = light ? 'text-white'    : 'text-navy-700';
  const subColor     = light ? 'text-white/70' : 'text-slate-mid';

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`
            font-body text-xs tracking-[0.2em] uppercase font-medium mb-3
            ${eyebrowColor}
          `}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`
          font-display font-medium leading-tight mb-4
          text-3xl sm:text-4xl md:text-[2.6rem]
          ${headingColor}
        `}
      >
        {heading}
      </h2>

      {showRule && (
        <div
          className={`gold-rule mb-5 ${align === 'center' ? 'mx-auto' : ''}`}
          aria-hidden="true"
        />
      )}

      {subheading && (
        <p
          className={`
            font-body text-base sm:text-lg leading-relaxed
            ${subColor}
          `}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
