import { useEffect } from 'react';

const useDropdownToggle = () => {
  useEffect(() => {
    const toggleDropdowns = (e) => {
      const target = e.target.closest('.toggle-dropdown');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        
        const parent = target.parentNode;
        const dropdown = parent.nextElementSibling;
        
        if (parent && dropdown) {
          parent.classList.toggle('active');
          dropdown.classList.toggle('dropdown-active');
        }
      }
    };

    document.addEventListener('click', toggleDropdowns);
    
    return () => {
      document.removeEventListener('click', toggleDropdowns);
    };
  }, []);
};

export default useDropdownToggle;
