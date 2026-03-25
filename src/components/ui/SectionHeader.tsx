interface SectionHeaderProps {
  eyebrow?: string;       // small uppercase label above heading
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  light?: boolean;        // true = white text (for dark backgrounds)
  className?: string;
}

/**
 * SectionHeader
 * Consistent typographic treatment for all page sections.
 * Uses Cormorant Garamond for the main heading and DM Sans for supporting text.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const alignClass   = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowColor = light ? 'text-sage-300' : 'text-sage-600';
  const headingColor = light ? 'text-white'    : 'text-navy-700';
  const subColor     = light ? 'text-white/65' : 'text-slate-mid';

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
