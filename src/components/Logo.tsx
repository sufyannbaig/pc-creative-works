type LogoProps = { light?: boolean; className?: string };

/** Simple wordmark: italic "pc" monogram in a circle + "creative works". Easy to refine later. */
export default function Logo({ light = false, className = "" }: LogoProps) {
  const fg = light ? "text-cream" : "text-espresso";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${fg} ${className}`} aria-label="PC Creative Works home">
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="31" y="41" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="26" fontStyle="italic" fill="currentColor">pc</text>
        <circle cx="47" cy="21" r="4" fill="#B4613A" />
      </svg>
      <span className="font-serif text-xl leading-none">
        creative <span className="italic">works</span>
      </span>
    </a>
  );
}
