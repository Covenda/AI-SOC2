import Link from 'next/link';

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'gradient' | 'simple';
}

export default function Hero({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'gradient',
}: HeroProps) {
  const isGradient = variant === 'gradient';

  return (
    <section
      className={`relative ${
        isGradient
          ? 'bg-gradient-to-br from-brand-navy via-brand-blue to-brand-purple'
          : 'bg-neutral-50'
      } overflow-hidden`}
    >
      {isGradient && <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>}
      <div className="container-custom relative">
        <div className="py-24 md:py-32 lg:py-40 max-w-4xl mx-auto text-center">
          {badge && (
            <div className="mb-6 flex justify-center">
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  isGradient
                    ? 'bg-white/10 backdrop-blur-sm text-white'
                    : 'bg-brand-blue/10 text-brand-blue'
                }`}
              >
                {badge}
              </span>
            </div>
          )}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance ${
              isGradient ? 'text-white' : 'text-brand-navy'
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance ${
              isGradient ? 'text-neutral-200' : 'text-neutral-600'
            }`}
          >
            {description}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={`btn text-lg px-8 py-4 ${
                    isGradient
                      ? 'bg-white hover:bg-neutral-100 text-brand-navy focus:ring-white'
                      : 'btn-primary'
                  }`}
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={`btn text-lg px-8 py-4 ${
                    isGradient
                      ? 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm focus:ring-white'
                      : 'btn-secondary'
                  }`}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
