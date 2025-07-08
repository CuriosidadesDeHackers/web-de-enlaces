import React from 'react';
import { Shield, Terminal, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-center pt-20 pb-12 relative">
      <div className="relative">
        {/* Copyright */}
        <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-400 transition-colors duration-300">
          © 2025 Manuel Martínez - Curiosidades De Hackers. Todos los derechos reservados.
        </p>
        
        {/* Services */}
        <div className="flex items-center justify-center gap-6 text-xs text-gray-600 mb-8 flex-wrap">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Terminal className="w-3 h-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-blue-400 transition-colors duration-300">Consultoría</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Shield className="w-3 h-3 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-cyan-400 transition-colors duration-300">Auditorías</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Terminal className="w-3 h-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-blue-400 transition-colors duration-300">Investigación</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Zap className="w-3 h-3 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-indigo-400 transition-colors duration-300">Formación</span>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-6"></div>
        
        {/* Additional info */}
        <div className="text-xs text-gray-700">
          <p className="mb-2">Especialista en identificación de vulnerabilidades y programas de bug bounty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;