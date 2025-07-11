import React from 'react';

const Header: React.FC = () => (
  <header className="w-full py-4 px-6 flex justify-between items-center bg-primary text-white">
    <div className="text-2xl font-bold">Yeo Zong Yao</div>
    <nav className="space-x-6">
      <a href="#about" className="hover:text-accent">About</a>
      <a href="#skills" className="hover:text-accent">Skills</a>
      <a href="#projects" className="hover:text-accent">Projects</a>
      <a href="#contact" className="hover:text-accent">Contact</a>
    </nav>
  </header>
);

export default Header;
