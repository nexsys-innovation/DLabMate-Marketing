interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} mb-12 ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
