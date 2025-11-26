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
  graphicType?: 'threat' | 'secops' | 'vulnerability' | 'identity' | 'payment' | 'analyst' | 'intelligence-service' | 'vulnerability-hunting' | 'platform' | 'default';
}

export default function Hero({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'gradient',
  graphicType = 'default',
}: HeroProps) {
  const isGradient = variant === 'gradient';
  const isProduct = variant === 'product';
  
  // Website color scheme
  const orange = '#e2522b';
  const navy = '#1e3a5f';

  // Generate abstract graphic based on type
  const renderAbstractGraphic = () => {
    const viewBox = "0 0 500 600";
    
    switch (graphicType) {
      case 'threat':
        // Threat Intelligence - targets, radar, threat symbols
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Radar/scanning circles */}
            <circle cx="250" cy="300" r="120" stroke={orange} strokeWidth="3" fill="none" opacity="0.3" />
            <circle cx="250" cy="300" r="80" stroke={navy} strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="250" cy="300" r="40" stroke={orange} strokeWidth="2" fill={orange} opacity="0.2" />
            
            {/* Target symbols */}
            <circle cx="150" cy="150" r="35" fill={orange} opacity="0.8" />
            <circle cx="150" cy="150" r="20" fill={navy} />
            <circle cx="150" cy="150" r="8" fill="white" />
            
            <circle cx="380" cy="200" r="30" fill={navy} opacity="0.8" />
            <circle cx="380" cy="200" r="15" fill={orange} />
            
            {/* Threat indicators - arrows */}
            <path d="M 100 400 L 150 350 L 140 350 L 140 330 L 160 330 L 160 350 L 150 350 Z" fill={orange} />
            <path d="M 400 450 L 350 500 L 360 500 L 360 520 L 340 520 L 340 500 L 350 500 Z" fill={navy} />
            
            {/* Geometric shapes */}
            <rect x="80" y="480" width="100" height="25" fill={orange} opacity="0.7" />
            <rect x="320" y="100" width="120" height="30" fill={navy} opacity="0.7" />
            <circle cx="120" cy="380" r="25" fill={navy} opacity="0.6" />
          </svg>
        );
        
      case 'secops':
        // SecOps Intelligence - monitoring, dashboards, operations
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Dashboard/monitor frame */}
            <rect x="150" y="180" width="200" height="140" fill={navy} opacity="0.1" stroke={navy} strokeWidth="2" rx="4" />
            <rect x="160" y="190" width="180" height="100" fill="white" opacity="0.9" />
            
            {/* Chart bars */}
            <rect x="170" y="250" width="25" height="30" fill={orange} />
            <rect x="205" y="230" width="25" height="50" fill={navy} />
            <rect x="240" y="240" width="25" height="40" fill={orange} />
            <rect x="275" y="220" width="25" height="60" fill={navy} />
            <rect x="310" y="250" width="25" height="30" fill={orange} />
            
            {/* Monitoring symbols */}
            <circle cx="200" cy="120" r="40" fill={orange} opacity="0.3" stroke={orange} strokeWidth="2" />
            <circle cx="200" cy="120" r="25" fill={navy} opacity="0.5" />
            <circle cx="200" cy="120" r="10" fill={orange} />
            
            {/* Alert indicators */}
            <path d="M 350 180 L 380 150 L 370 150 L 370 130 L 390 130 L 390 150 L 380 150 Z" fill={orange} />
            <circle cx="420" cy="200" r="20" fill={navy} />
            <path d="M 420 185 L 420 195 L 415 195 L 420 200 L 425 195 L 420 195 Z" fill="white" />
            
            {/* Geometric shapes */}
            <rect x="80" y="400" width="120" height="30" fill={orange} opacity="0.7" />
            <rect x="300" y="450" width="140" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="500" r="30" fill={navy} opacity="0.6" />
            <circle cx="400" cy="480" r="35" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'vulnerability':
        // Vulnerability Intelligence - gaps, risk assessment, shields
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Shield with gap */}
            <path d="M 250 150 Q 250 120 280 120 L 320 120 Q 350 120 350 150 L 350 250 Q 350 280 320 280 L 280 280 Q 250 280 250 250 Z" fill={navy} opacity="0.2" stroke={navy} strokeWidth="3" />
            <path d="M 250 200 L 350 200" stroke={orange} strokeWidth="4" strokeDasharray="8 4" />
            
            {/* Risk indicators */}
            <circle cx="150" cy="200" r="40" fill={orange} opacity="0.8" />
            <path d="M 150 175 L 150 225 M 125 200 L 175 200" stroke="white" strokeWidth="3" />
            
            <circle cx="380" cy="250" r="35" fill={navy} opacity="0.8" />
            <path d="M 380 230 L 380 270 M 360 250 L 400 250" stroke="white" strokeWidth="3" />
            
            {/* Gap visualization */}
            <rect x="180" y="320" width="140" height="20" fill={orange} opacity="0.6" />
            <rect x="200" y="340" width="100" height="20" fill={navy} opacity="0.6" />
            <path d="M 200 360 L 300 360" stroke={orange} strokeWidth="3" strokeDasharray="5 5" />
            
            {/* Geometric shapes */}
            <rect x="80" y="450" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="480" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="500" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'identity':
        // Identity Intelligence - users, keys, credentials
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* User silhouette */}
            <circle cx="250" cy="200" r="50" fill={navy} opacity="0.3" />
            <path d="M 200 250 Q 200 280 250 280 Q 300 280 300 250" fill={navy} opacity="0.3" />
            
            {/* Key symbols */}
            <g transform="translate(150, 350)">
              <rect x="0" y="0" width="60" height="30" rx="15" fill={orange} />
              <circle cx="15" cy="15" r="8" fill="white" />
              <rect x="50" y="10" width="20" height="10" rx="2" fill={orange} />
            </g>
            
            <g transform="translate(320, 400)">
              <rect x="0" y="0" width="50" height="25" rx="12" fill={navy} />
              <circle cx="12" cy="12" r="6" fill="white" />
              <rect x="42" y="8" width="15" height="9" rx="2" fill={navy} />
            </g>
            
            {/* Credential indicators */}
            <rect x="100" y="150" width="80" height="40" rx="4" fill={orange} opacity="0.2" stroke={orange} strokeWidth="2" />
            <rect x="110" y="160" width="60" height="5" fill={orange} opacity="0.6" />
            <rect x="110" y="170" width="40" height="5" fill={orange} opacity="0.6" />
            
            {/* Geometric shapes */}
            <rect x="80" y="480" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="500" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="480" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'payment':
        // Payment Fraud Intelligence - cards, transactions, fraud detection
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Credit card */}
            <rect x="150" y="200" width="200" height="120" rx="8" fill={navy} opacity="0.2" stroke={navy} strokeWidth="2" />
            <rect x="160" y="210" width="180" height="30" fill={orange} opacity="0.3" />
            <rect x="160" y="250" width="60" height="8" fill={navy} opacity="0.5" />
            <rect x="160" y="270" width="100" height="8" fill={navy} opacity="0.5" />
            <circle cx="300" cy="280" r="15" fill={orange} opacity="0.6" />
            
            {/* Fraud alert */}
            <path d="M 350 150 L 380 120 L 370 120 L 370 100 L 390 100 L 390 120 L 380 120 Z" fill={orange} />
            <circle cx="420" cy="180" r="25" fill={navy} />
            <path d="M 420 165 L 420 175 M 410 170 L 430 170" stroke="white" strokeWidth="2" />
            
            {/* Transaction flow */}
            <circle cx="100" cy="300" r="30" fill={orange} opacity="0.6" />
            <path d="M 130 300 L 150 300" stroke={navy} strokeWidth="3" />
            <circle cx="400" cy="300" r="30" fill={navy} opacity="0.6" />
            <path d="M 350 300 L 370 300" stroke={orange} strokeWidth="3" />
            
            {/* Geometric shapes */}
            <rect x="80" y="450" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="480" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="500" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'analyst':
        // Analyst on Demand - collaboration, engineering, support
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Collaboration/team symbols */}
            <circle cx="180" cy="200" r="40" fill={navy} opacity="0.3" />
            <circle cx="180" cy="200" r="25" fill={orange} opacity="0.5" />
            <circle cx="320" cy="200" r="40" fill={orange} opacity="0.3" />
            <circle cx="320" cy="200" r="25" fill={navy} opacity="0.5" />
            <path d="M 220 200 L 280 200" stroke={navy} strokeWidth="3" />
            
            {/* Engineering tools */}
            <rect x="150" y="300" width="80" height="60" rx="4" fill={navy} opacity="0.2" stroke={navy} strokeWidth="2" />
            <rect x="160" y="310" width="60" height="8" fill={orange} />
            <rect x="160" y="325" width="40" height="8" fill={orange} />
            <rect x="160" y="340" width="50" height="8" fill={orange} />
            
            <rect x="270" y="300" width="80" height="60" rx="4" fill={orange} opacity="0.2" stroke={orange} strokeWidth="2" />
            <rect x="280" y="310" width="60" height="8" fill={navy} />
            <rect x="280" y="325" width="40" height="8" fill={navy} />
            <rect x="280" y="340" width="50" height="8" fill={navy} />
            
            {/* Connection/network */}
            <circle cx="250" cy="420" r="30" fill={navy} opacity="0.6" />
            <path d="M 220 420 L 150 450 M 280 420 L 350 450" stroke={orange} strokeWidth="2" />
            
            {/* Geometric shapes */}
            <rect x="80" y="480" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="500" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="480" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'intelligence-service':
        // Intelligence Services - analysis, research, insights
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Analysis/document */}
            <rect x="150" y="180" width="200" height="160" rx="4" fill={navy} opacity="0.1" stroke={navy} strokeWidth="2" />
            <rect x="160" y="190" width="180" height="8" fill={orange} />
            <rect x="160" y="210" width="140" height="6" fill={navy} opacity="0.4" />
            <rect x="160" y="225" width="160" height="6" fill={navy} opacity="0.4" />
            <rect x="160" y="240" width="120" height="6" fill={navy} opacity="0.4" />
            
            {/* Graph/chart */}
            <polyline points="180,280 200,260 220,270 240,250 260,240 280,230 300,220 320,210" 
              fill="none" stroke={orange} strokeWidth="3" />
            <circle cx="180" cy="280" r="4" fill={orange} />
            <circle cx="220" cy="270" r="4" fill={orange} />
            <circle cx="280" cy="230" r="4" fill={orange} />
            <circle cx="320" cy="210" r="4" fill={orange} />
            
            {/* Insight indicators */}
            <circle cx="100" cy="150" r="35" fill={orange} opacity="0.6" />
            <path d="M 100 135 L 100 165 M 85 150 L 115 150" stroke="white" strokeWidth="3" />
            
            <circle cx="400" cy="250" r="30" fill={navy} opacity="0.6" />
            <path d="M 400 240 L 400 260 M 390 250 L 410 250" stroke="white" strokeWidth="2" />
            
            {/* Geometric shapes */}
            <rect x="80" y="450" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="480" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="500" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'vulnerability-hunting':
        // Vulnerability Hunting - hunting, discovery, scanning
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Scanning/search beam */}
            <path d="M 250 150 L 150 250 L 250 350 L 350 250 Z" fill={orange} opacity="0.2" />
            <path d="M 250 150 L 150 250 M 250 150 L 350 250 M 150 250 L 250 350 M 350 250 L 250 350" 
              stroke={orange} strokeWidth="2" />
            
            {/* Target/findings */}
            <circle cx="180" cy="220" r="25" fill={navy} opacity="0.8" />
            <circle cx="180" cy="220" r="15" fill={orange} />
            <circle cx="180" cy="220" r="5" fill="white" />
            
            <circle cx="320" cy="280" r="20" fill={orange} opacity="0.8" />
            <circle cx="320" cy="280" r="10" fill={navy} />
            
            {/* Discovery indicators */}
            <path d="M 100 350 L 130 320 L 120 320 L 120 300 L 140 300 L 140 320 L 130 320 Z" fill={orange} />
            <path d="M 400 400 L 370 430 L 380 430 L 380 450 L 360 450 L 360 430 L 370 430 Z" fill={navy} />
            
            {/* Geometric shapes */}
            <rect x="80" y="450" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="480" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="500" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      case 'platform':
        // Platform - technology, integration, platform
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Platform/network nodes */}
            <circle cx="200" cy="200" r="40" fill={orange} opacity="0.6" />
            <circle cx="300" cy="200" r="40" fill={navy} opacity="0.6" />
            <circle cx="250" cy="280" r="40" fill={orange} opacity="0.6" />
            <path d="M 240 200 L 260 200" stroke={navy} strokeWidth="3" />
            <path d="M 220 220 L 240 260" stroke={navy} strokeWidth="3" />
            <path d="M 280 220 L 260 260" stroke={orange} strokeWidth="3" />
            
            {/* Integration connectors */}
            <rect x="120" y="350" width="80" height="50" rx="4" fill={navy} opacity="0.2" stroke={navy} strokeWidth="2" />
            <rect x="130" y="360" width="60" height="6" fill={orange} />
            <rect x="130" y="375" width="40" height="6" fill={orange} />
            
            <rect x="300" y="350" width="80" height="50" rx="4" fill={orange} opacity="0.2" stroke={orange} strokeWidth="2" />
            <rect x="310" y="360" width="60" height="6" fill={navy} />
            <rect x="310" y="375" width="40" height="6" fill={navy} />
            
            {/* Geometric shapes */}
            <rect x="80" y="450" width="100" height="30" fill={orange} opacity="0.7" />
            <rect x="320" y="480" width="120" height="25" fill={navy} opacity="0.7" />
            <circle cx="100" cy="520" r="25" fill={navy} opacity="0.6" />
            <circle cx="420" cy="500" r="30" fill={orange} opacity="0.6" />
          </svg>
        );
        
      default:
        // Default - person with umbrella (original)
        return (
          <svg className="w-full h-full" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Geometric shapes */}
            <circle cx="380" cy="100" r="50" fill={orange} />
            <circle cx="420" cy="220" r="45" fill={navy} />
            <rect x="240" y="280" width="160" height="30" fill={orange} />
            <rect x="220" y="350" width="180" height="30" fill={navy} />
            <circle cx="100" cy="380" r="40" fill={navy} />
            <circle cx="120" cy="460" r="35" fill={navy} />
            
            {/* Person silhouette from behind with umbrella */}
            <g transform="translate(250, 150)">
              <path d="M 0 -100 Q -50 -120 -80 -100 Q -50 -80 0 -80 Q 50 -80 80 -100 Q 50 -120 0 -100 Z" fill="#000000" />
              <line x1="0" y1="-80" x2="0" y2="20" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
              <circle cx="0" cy="30" r="25" fill="#000000" />
              <path d="M -30 55 Q -35 100 -25 140 Q -20 180 -15 220 L 15 220 Q 20 180 25 140 Q 35 100 30 55 Z" fill="#000000" />
              <ellipse cx="-40" cy="90" rx="15" ry="50" fill="#000000" transform="rotate(-20 -40 90)" />
              <ellipse cx="40" cy="90" rx="15" ry="50" fill="#000000" transform="rotate(20 40 90)" />
              <rect x="-25" y="220" width="18" height="140" fill="#000000" rx="2" />
              <rect x="7" y="220" width="18" height="140" fill="#000000" rx="2" />
            </g>
          </svg>
        );
    }
  };

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
          <div className="py-20 md:py-28 lg:py-36">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                {badge && (
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                      {badge}
                    </span>
                  </div>
                )}
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-brand-navy">{titleParts.first}</span>
                  {titleParts.rest && (
                    <span className="text-neutral-400"> {titleParts.rest}</span>
                  )}
                </h1>
                
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
                  {description}
                </p>
                
                {(primaryCTA || secondaryCTA) && (
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    {primaryCTA && (
                      <Link
                        href={primaryCTA.href}
                        className="inline-flex items-center justify-center text-base font-semibold px-8 py-3.5 rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
                      >
                        {primaryCTA.text}
                      </Link>
                    )}
                    {secondaryCTA && (
                      <Link
                        href={secondaryCTA.href}
                        className="inline-flex items-center justify-center text-base font-semibold px-8 py-3.5 rounded-lg bg-white text-brand-navy border-2 border-brand-navy hover:bg-neutral-50 transition-colors"
                      >
                        {secondaryCTA.text}
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Abstract Graphic */}
              <div className="relative h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
                {renderAbstractGraphic()}
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
