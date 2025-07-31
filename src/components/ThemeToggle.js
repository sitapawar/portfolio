import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight);
  }, [isLight]);

  return (
    <button onClick={() => setIsLight(!isLight)} className="theme-toggle">
      {isLight ? 'Dark Mode.' : 'Light Mode.'}
    </button>
  );
}
