import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Intro from './components/Intro';
import Work from './components/Work';
import Approach from './components/Approach';
import Toolkit from './components/Toolkit';
import Study from './components/Study';
import Certs from './components/Certs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';
import useCustomCursor from './hooks/useCustomCursor';
import useMagnetic from './hooks/useMagnetic';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => document.body.classList.add('boot'));
    return () => document.body.classList.remove('boot');
  }, []);

  useReveal();
  useCustomCursor();
  useMagnetic();

  return (
    <>
      <Cursor />
      <Navbar
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen(o => !o)}
      />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main>
        <Intro />
        <Hero />
        <Marquee />
        <Work />
        <Approach />
        <Toolkit />
        <Study />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}