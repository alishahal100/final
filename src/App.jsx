import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './components/Home';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollAnimation from './components/demo';
import ServicesBefore from './components/servicesbefore';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis with GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lagSmoothing for smoother animations
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.create({
      trigger: '.pinned',
      start: 'top top',
      endTrigger: '.whitespace',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: '.header-info',
      start: 'top top',
      endTrigger: '.whitespace',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: '.pinned',
      start: 'top top',
      endTrigger: '.header-info',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to('.revealer', { rotation });
      },
    });

    // Clean up Lenis and GSAP listeners on unmount
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dev" element={<ScrollAnimation />} />
            <Route path="/servicebefore" element={<ServicesBefore />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}
