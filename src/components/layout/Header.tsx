import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastYRef.current && y > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastYRef.current = y
    };

    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <header
      className={`
        flex items-center justify-between
        px-6 py-4
        z-50
        fixed inset-x-0 top-0
        bg-primary/70 backdrop-blur-md
        transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="text-2xl font-bold">Yeo Zong Yao</div>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-accent">
          About
        </a>
        <a href="#skills" className="hover:text-accent">
          Skills
        </a>
        <a href="#projects" className="hover:text-accent">
          Projects
        </a>
        <a href="#contact" className="hover:text-accent">
          Contact
        </a>
      </nav>
    </header>
  );
}
