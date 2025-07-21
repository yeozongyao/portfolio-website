import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './pages/LandingPage.tsx';
import About from './pages/MainPage.tsx';
import AppLayout from './components/layout/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout>
      <Home />
      <section
        id="about-section"
        className="min-h-screen flex items-center justify-center bg-primary text-white"
        style={{ scrollSnapAlign: 'start' }}
      >
        <About />
      </section>
    </AppLayout>
  </StrictMode>
);
