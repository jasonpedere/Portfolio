import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  ttl: number;
  hue: number;
};

const DigitalDust: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion by disabling the effect in that case
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    const particles: Particle[] = [];
    let animationId = 0;
    // Force DPR=1 to lighten the GPU/CPU load on blur-heavy drawing
    const dpr = 1;

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.4 + 0.5,
      life: 0,
      ttl: 260 + Math.random() * 520,
      hue: 195 + Math.random() * 40,
    });

    const resetParticles = () => {
      particles.length = 0;
      // Lower density to improve performance, especially on integrated GPUs
      const count = Math.min(150, Math.max(50, Math.floor((width * height) / 18000)));
      for (let i = 0; i < count; i += 1) {
        particles.push(createParticle());
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetParticles();
    };

    const tick = () => {
      if (width === 0 || height === 0) {
        animationId = window.requestAnimationFrame(tick);
        return;
      }

      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(10, 10, 12, 0.06)';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        if (p.life > p.ttl) {
          particles[index] = createParticle();
          return;
        }

        const fadeIn = Math.min(1, p.life / 120);
        const fadeOut = Math.min(1, (p.ttl - p.life) / 120);
        const alpha = 0.12 + 0.3 * Math.min(fadeIn, fadeOut);

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 75%, ${alpha * 0.8})`;
        ctx.shadowBlur = 4;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = window.requestAnimationFrame(tick);
    };

    resize();
    animationId = window.requestAnimationFrame(tick);
    window.addEventListener('resize', resize);

    const handleVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationId);
      } else {
        animationId = window.requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
};

export default DigitalDust;
