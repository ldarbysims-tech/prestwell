interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden bg-navy-700">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-300 font-medium mb-5">
            {eyebrow}
          </p>
        )}
        <h1
          className="font-display font-medium text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
        >
          {title}
        </h1>
        {description && (
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
      </div>
    </div>
  );
}
