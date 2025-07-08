import React, { useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkSection from './components/LinkSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Professional background effects */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,158,225,0.25),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.20),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(99,102,241,0.12),transparent_40%)]"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,158,225,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,158,225,0.4)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-move"></div>
        </div>
        
        {/* Matrix-like dots with animation */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,158,225,1)_1px,transparent_1px)] bg-[size:60px_60px] animate-matrix-dots"></div>
        </div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-horizontal"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-scan-vertical"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="floating-orb floating-orb-1"></div>
          <div className="floating-orb floating-orb-2"></div>
          <div className="floating-orb floating-orb-3"></div>
          <div className="floating-orb floating-orb-4"></div>
          <div className="floating-orb floating-orb-5"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        <ProfileHeader />
        <LinkSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;