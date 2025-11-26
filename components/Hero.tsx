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
  variant?: 'gradient' | 'simple' | 'product';
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
  const isProduct = variant === 'product';

  // Split title for product variant (first word dark, rest lighter)
  const getTitleParts = () => {
    if (!isProduct) return { first: title, rest: '' };
    const words = title.split(' ');
    if (words.length === 1) return { first: title, rest: '' };
    const first = words[0];
    const rest = words.slice(1).join(' ');
    return { first, rest };
  };

  const titleParts = getTitleParts();

  // Product variant with abstract graphics
  if (isProduct) {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="container-custom relative">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                {badge && (
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                      {badge}
                    </span>
                  </div>
                )}
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-brand-navy">{titleParts.first}</span>
                  {titleParts.rest && (
                    <span className="text-neutral-400"> {titleParts.rest}</span>
                  )}
                </h1>
                
                <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                  {description}
                </p>
                
                {(primaryCTA || secondaryCTA) && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {primaryCTA && (
                      <Link
                        href={primaryCTA.href}
                        className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
                      >
                        {primaryCTA.text}
                      </Link>
                    )}
                    {secondaryCTA && (
                      <Link
                        href={secondaryCTA.href}
                        className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 rounded-lg bg-white text-brand-navy border-2 border-brand-navy hover:bg-neutral-50 transition-colors"
                      >
                        {secondaryCTA.text}
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Abstract Graphic */}
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 500 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Geometric shapes - positioned around person */}
                  {/* Red circle top right */}
                  <circle cx="380" cy="100" r="50" fill="#e2522b" />
                  
                  {/* Blue circle right */}
                  <circle cx="420" cy="220" r="45" fill="#1e3a5f" />
                  
                  {/* Red rectangle horizontal behind person */}
                  <rect x="240" y="280" width="160" height="30" fill="#e2522b" />
                  
                  {/* Blue rectangle horizontal below red */}
                  <rect x="220" y="350" width="180" height="30" fill="#1e3a5f" />
                  
                  {/* Blue circles left */}
                  <circle cx="100" cy="380" r="40" fill="#1e3a5f" />
                  <circle cx="120" cy="460" r="35" fill="#1e3a5f" />
                  
                  {/* Person silhouette from behind with umbrella */}
                  <g transform="translate(250, 150)">
                    {/* Umbrella - top */}
                    <path
                      d="M 0 -100 Q -50 -120 -80 -100 Q -50 -80 0 -80 Q 50 -80 80 -100 Q 50 -120 0 -100 Z"
                      fill="#000000"
                    />
                    {/* Umbrella handle */}
                    <line x1="0" y1="-80" x2="0" y2="20" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Head - circular */}
                    <circle cx="0" cy="30" r="25" fill="#000000" />
                    
                    {/* Body - torso */}
                    <path
                      d="M -30 55 Q -35 100 -25 140 Q -20 180 -15 220 L 15 220 Q 20 180 25 140 Q 35 100 30 55 Z"
                      fill="#000000"
                    />
                    
                    {/* Left arm holding umbrella */}
                    <ellipse cx="-40" cy="90" rx="15" ry="50" fill="#000000" transform="rotate(-20 -40 90)" />
                    
                    {/* Right arm */}
                    <ellipse cx="40" cy="90" rx="15" ry="50" fill="#000000" transform="rotate(20 40 90)" />
                    
                    {/* Legs */}
                    <rect x="-25" y="220" width="18" height="140" fill="#000000" rx="2" />
                    <rect x="7" y="220" width="18" height="140" fill="#000000" rx="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative ${
        isGradient
          ? 'bg-brand-orange'
          : 'bg-neutral-50'
      } overflow-hidden`}
    >
      {/* Background Effects */}
      {isGradient && (
        <>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </>
      )}
      
      <div className="container-custom relative">
        <div className={`${isGradient ? 'py-28 md:py-36 lg:py-48' : 'py-20 md:py-28 lg:py-32'} max-w-5xl mx-auto text-center`}>
          {badge && (
            <div className="mb-8 flex justify-center animate-fade-in">
              <span
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isGradient
                    ? 'bg-white/15 backdrop-blur-md text-white border border-white/20 shadow-lg hover:bg-white/20'
                    : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20 shadow-sm hover:bg-brand-orange/15'
                }`}
              >
                {isGradient && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
                {badge}
              </span>
            </div>
          )}
          
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-balance leading-tight tracking-tight animate-fade-in ${
              isGradient 
                ? 'text-white drop-shadow-lg' 
                : 'text-brand-navy'
            }`}
            style={{
              animationDelay: '0.1s',
            }}
          >
            {title}
          </h1>
          
          <p
            className={`text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in ${
              isGradient 
                ? 'text-white/90 drop-shadow-md' 
                : 'text-neutral-600'
            }`}
            style={{
              animationDelay: '0.2s',
            }}
          >
            {description}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{
                animationDelay: '0.3s',
              }}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={`group relative inline-flex items-center justify-center text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    isGradient
                      ? 'bg-white text-brand-navy hover:bg-neutral-50 shadow-xl focus:ring-4 focus:ring-white/50'
                      : 'btn-primary shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span className="relative z-10">{primaryCTA.text}</span>
                  {isGradient && (
                    <svg 
                      className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={`group relative inline-flex items-center justify-center text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isGradient
                      ? 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-md shadow-lg hover:border-white/50 focus:ring-4 focus:ring-white/30'
                      : 'btn-secondary shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">{secondaryCTA.text}</span>
                  {isGradient && (
                    <svg 
                      className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Wave/Divider */}
      {isGradient && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      )}
    </section>
  );
}
