import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: string;
}

export default function FeatureCard({ icon, title, description, accent = '#0E7C86' }: FeatureCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-border p-7 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Accent line */}
      <div
        className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: accent }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accent}12`, color: accent }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
