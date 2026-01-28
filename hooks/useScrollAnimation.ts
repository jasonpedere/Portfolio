import { useEffect, useRef } from 'react';

type AnimationType = 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

export const useScrollAnimation = (animationType: AnimationType = 'slide-up') => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const className = 
            animationType === 'slide-up' ? 'scroll-animate' :
            animationType === 'slide-left' ? 'scroll-animate-left' :
            animationType === 'slide-right' ? 'scroll-animate-right' :
            'scroll-animate-scale';
          
          element.classList.add(className, 'visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationType]);

  return ref;
};
