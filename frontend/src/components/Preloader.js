import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="preloader" className={loaded ? 'loaded' : ''}>
      <div className="line"></div>
    </div>
  );
};

export default Preloader;
