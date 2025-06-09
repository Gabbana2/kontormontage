import React from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  height?: string;
  overlay?: 'light' | 'dark' | 'none';
  overlayOpacity?: string;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  children,
  height = 'h-64 md:h-96 lg:h-screen',
  overlay = 'dark',
  overlayOpacity = 'bg-slate-900/60',
  className = '',
}) => {
  return (
    <section 
      className={`relative ${height} bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay for text readability */}
      {overlay !== 'none' && (
        <div 
          className={`absolute inset-0 ${
            overlay === 'dark' 
              ? overlayOpacity || 'bg-slate-900/60'
              : 'bg-white/70'
          }`}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection; 