import React from 'react';
import NeuralNetworkBG from '../components/layout/NeuralBg';

const Home: React.FC = () => {
  const handleScroll = () => {
    const about = document.getElementById('about-section');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      style={{ scrollSnapAlign: 'start' }}
    >
      <NeuralNetworkBG />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Yeo Zong Yao</h1>
        <h2 className="text-2xl font-semibold mb-6 drop-shadow">
          Full Stack Developer
          Parttime Coder &amp; Fulltime Cocksucker
        </h2>
        <p className="text-lg max-w-xl mx-auto drop-shadow mb-10">
          I build interactive, modern web applications with a passion for both
          frontend and backend technologies.
        </p>
        <button
          onClick={handleScroll}
          className="mt-8 px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/80 transition"
          aria-label="Scroll to About"
        >
          Find out more about me
        </button>
      </div>
    </section>
  );
};

export default Home;
