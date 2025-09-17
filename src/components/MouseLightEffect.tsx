import { useEffect } from 'react';

const MouseLightEffect = () => {
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
};

export default MouseLightEffect;