import React, { useEffect, useState } from 'react';
import { Shield, MapPin, Globe } from 'lucide-react';

const ProfileHeader = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Especialista en Ciberseguridad', 'Investigador de Vulnerabilidades', 'Consultor en Seguridad Digital', 'Bug Bounty Hunter'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="text-center mb-20 relative">
      <div className="relative mb-12">
        {/* Animated rings around avatar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border border-blue-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute w-56 h-56 border border-blue-400/20 rounded-full animate-spin-reverse"></div>
          <div className="absolute w-64 h-64 border border-blue-300/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative w-44 h-44 mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full p-1 shadow-2xl animate-glow">
          <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden">
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan"></div>
            <img 
              src="/manuel.png" 
              alt="Manuel Martínez - Especialista en Ciberseguridad" 
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Clean professional name */}
      <div className="relative mb-8">
        <h1 className="text-6xl font-light text-white mb-2 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Manuel Martínez
          </span>
        </h1>
        
        {/* Typewriter effect */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-xl text-gray-300 font-light">
            <span className="typewriter-text">{text}</span>
            <span className="cursor-blink">|</span>
          </p>
        </div>
      </div>
      
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
        Curioso, ciberseguridad, pentesting y bug bounty. Ayudando a organizaciones a proteger sus activos digitales.
      </p>
      
      {/* Location and website info with animations */}
      <div className="flex items-center justify-center gap-12 text-gray-400 text-sm">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/25 transition-all duration-300">
            <MapPin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="group-hover:text-blue-400 transition-colors duration-300">Málaga, España</span>
        </div>
        <div className="flex items-center gap-3 group cursor-pointer">

        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;