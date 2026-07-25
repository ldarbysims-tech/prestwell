interface OliveMarkProps {
  className?: string;
  size?: number;
}

/** Olive branch mark — Prestwell Continuum brand icon */
export default function OliveMark({ className = '', size = 36 }: OliveMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 56C32 56 18 44 18 30C18 22.268 24.268 16 32 16C39.732 16 46 22.268 46 30C46 44 32 56 32 56Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 16V52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 24C26 22 22 25 20 29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 32C26 30 21 34 20 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 40C27 39 23 42 22 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 24C38 22 42 25 44 29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 32C38 30 43 34 44 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 40C37 39 41 42 42 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="22" cy="28.5" rx="2.2" ry="3.2" fill="currentColor" opacity="0.85" transform="rotate(-25 22 28.5)" />
      <ellipse cx="21.5" cy="37.5" rx="2.2" ry="3.2" fill="currentColor" opacity="0.85" transform="rotate(-20 21.5 37.5)" />
      <ellipse cx="23" cy="45.5" rx="2" ry="2.8" fill="currentColor" opacity="0.85" transform="rotate(-15 23 45.5)" />
      <ellipse cx="42" cy="28.5" rx="2.2" ry="3.2" fill="currentColor" opacity="0.85" transform="rotate(25 42 28.5)" />
      <ellipse cx="42.5" cy="37.5" rx="2.2" ry="3.2" fill="currentColor" opacity="0.85" transform="rotate(20 42.5 37.5)" />
      <ellipse cx="41" cy="45.5" rx="2" ry="2.8" fill="currentColor" opacity="0.85" transform="rotate(15 41 45.5)" />
    </svg>
  );
}
