import Link from 'next/link';

export interface Feature {
  icon?: string;
  title: string;
  description: string;
  href?: string;
}

interface FeatureGridProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  description,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-20">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                {title}
              </h2>
            )}
            {description && <p className="text-xl text-neutral-600 leading-relaxed">{description}</p>}
          </div>
        )}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => {
            const content = (
              <>
                {feature.icon && <div className="text-4xl mb-6">{feature.icon}</div>}
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-lg text-neutral-600 mb-4 leading-relaxed">{feature.description}</p>
                {feature.href && (
                  <div className="flex items-center text-brand-orange font-semibold">
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </>
            );

            if (feature.href) {
              return (
                <Link
                  key={index}
                  href={feature.href}
                  className="card group cursor-pointer hover:border-brand-orange hover:shadow-lg"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div key={index} className="card">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
