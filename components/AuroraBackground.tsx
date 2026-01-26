import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes auroraShift {
          0% { transform: translate3d(-10%, -5%, 0) rotate(0deg); }
          50% { transform: translate3d(8%, 6%, 0) rotate(12deg); }
          100% { transform: translate3d(-10%, -5%, 0) rotate(0deg); }
        }
        @keyframes auroraDrift {
          0% { transform: translate3d(12%, 8%, 0) rotate(-8deg); }
          50% { transform: translate3d(-8%, -6%, 0) rotate(6deg); }
          100% { transform: translate3d(12%, 8%, 0) rotate(-8deg); }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .aurora-layer {
            animation: none !important;
          }
        }

        /* Mobile: simplify to a single, softer wash (no animations) */
        @media (max-width: 768px) {
          .aurora-base {
            filter: blur(80px);
            opacity: 0.45;
          }
          .aurora-secondary,
          .aurora-tertiary {
            display: none;
          }
          .aurora-mobile-static {
            content: '';
            position: absolute;
            inset: -20% -10% auto -10%;
            height: 80%;
            background: radial-gradient(55% 55% at 50% 40%, rgba(99, 102, 241, 0.35) 0%, rgba(15, 23, 42, 0) 70%),
                        radial-gradient(40% 40% at 60% 70%, rgba(14, 165, 233, 0.25) 0%, rgba(15, 23, 42, 0) 70%);
            filter: blur(90px);
            opacity: 0.65;
          }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="aurora-mobile-static" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-60 aurora-fallback"
          style={{
            background: 'linear-gradient(120deg, rgba(99, 102, 241, 0.22), rgba(14, 165, 233, 0.16), rgba(236, 72, 153, 0.12))',
          }}
          aria-hidden="true"
        />
        <div
          className="aurora-layer aurora-base absolute w-[120%] h-[120%] left-[-10%] top-[-10%] blur-3xl opacity-45"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(99, 102, 241, 0.35) 0%, rgba(15, 23, 42, 0) 70%)',
            animation: 'auroraShift 22s ease-in-out infinite',
          }}
        />
        <div
          className="aurora-layer aurora-secondary absolute w-[140%] h-[140%] left-[-20%] top-[-20%] blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(45% 45% at 60% 40%, rgba(14, 165, 233, 0.25) 0%, rgba(15, 23, 42, 0) 70%)',
            animation: 'auroraDrift 28s ease-in-out infinite',
          }}
        />
        <div
          className="aurora-layer aurora-tertiary absolute w-[110%] h-[110%] left-[-5%] top-[-5%] blur-2xl opacity-35"
          style={{
            background: 'radial-gradient(60% 60% at 40% 60%, rgba(236, 72, 153, 0.18) 0%, rgba(15, 23, 42, 0) 70%)',
            animation: 'auroraShift 26s ease-in-out infinite reverse',
          }}
        />
      </div>
    </>
  );
};

export default AuroraBackground;
