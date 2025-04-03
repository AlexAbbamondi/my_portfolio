import { useEffect, useRef, useState } from 'react';

const useLazyLoadBackground = (image) => {
  const elementRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          entry.target.style.backgroundImage = `url(${image})`;
          setIsLoaded(true);  // Update the state when the image is loaded
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return [elementRef, isLoaded];
};

export default useLazyLoadBackground;
