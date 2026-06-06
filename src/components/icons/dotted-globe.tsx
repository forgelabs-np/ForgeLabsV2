export const DottedGlobe = () => {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <div className="aspect-square">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="hsl(var(--border))" />
                </pattern>
                <mask id="globe-mask">
                    <circle cx="250" cy="250" r="200" fill="white" />
                </mask>
            </defs>
            
            <circle cx="250" cy="250" r="200" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1" />

            <rect width="500" height="500" fill="url(#dot-pattern)" mask="url(#globe-mask)" opacity="0.5" />
            
            {/* Highlighted dots */}
            <circle cx="200" cy="200" r="8" fill="hsl(var(--primary))" opacity="0.8" />
            <circle cx="350" cy="220" r="8" fill="hsl(var(--primary))" opacity="0.8" />
            <circle cx="280" cy="350" r="8" fill="hsl(var(--primary))" opacity="0.8" />
            <circle cx="150" cy="300" r="8" fill="hsl(var(--primary))" opacity="0.8" />
             <circle cx="380" cy="300" r="8" fill="hsl(var(--primary))" opacity="0.8" />
        </svg>
        </div>
      </div>
    );
  };
