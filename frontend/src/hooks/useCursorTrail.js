import { useEffect } from 'react';

const useCursorTrail = () => {
  useEffect(() => {
    let lastTrailTime = 0;
    const trailDelay = 30; // milliseconds between trail elements

    function createTrail(x, y) {
      const currentTime = Date.now();
      if (currentTime - lastTrailTime < trailDelay) return;
      lastTrailTime = currentTime;

      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      document.body.appendChild(trail);

      // Trigger animation
      requestAnimationFrame(() => {
        trail.classList.add('active');
      });

      // Remove element after animation completes
      setTimeout(() => {
        trail.remove();
      }, 800);
    }

    const handleMouseMove = (e) => {
      createTrail(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining trail elements
      document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    };
  }, []);
};

export default useCursorTrail;
