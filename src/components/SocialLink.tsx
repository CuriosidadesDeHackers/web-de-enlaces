import React, { useState } from 'react';
import { DivideIcon as LucideIcon, ExternalLink, Zap } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  name: string;
  url: string;
  description?: string;
  color: string;
  delay?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, name, url, description, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/5',
      hoverBg: 'hover:bg-blue-500/15',
      border: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-400/50',
      icon: 'text-blue-500',
      hoverIcon: 'group-hover:text-blue-400',
      gradient: 'from-blue-500/0 via-blue-500/20 to-blue-500/0',
      glow: 'group-hover:shadow-blue-500/30'
    },
    cyan: {
      bg: 'bg-cyan-500/5',
      hoverBg: 'hover:bg-cyan-500/15',
      border: 'border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-400/50',
      icon: 'text-cyan-500',
      hoverIcon: 'group-hover:text-cyan-400',
      gradient: 'from-cyan-500/0 via-cyan-500/20 to-cyan-500/0',
      glow: 'group-hover:shadow-cyan-500/30'
    },
    indigo: {
      bg: 'bg-indigo-500/5',
      hoverBg: 'hover:bg-indigo-500/15',
      border: 'border-indigo-500/20',
      hoverBorder: 'hover:border-indigo-400/50',
      icon: 'text-indigo-500',
      hoverIcon: 'group-hover:text-indigo-400',
      gradient: 'from-indigo-500/0 via-indigo-500/20 to-indigo-500/0',
      glow: 'group-hover:shadow-indigo-500/30'
    },
    purple: {
      bg: 'bg-purple-500/5',
      hoverBg: 'hover:bg-purple-500/15',
      border: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-400/50',
      icon: 'text-purple-500',
      hoverIcon: 'group-hover:text-purple-400',
      gradient: 'from-purple-500/0 via-purple-500/20 to-purple-500/0',
      glow: 'group-hover:shadow-purple-500/30'
    },
    red: {
      bg: 'bg-red-500/5',
      hoverBg: 'hover:bg-red-500/15',
      border: 'border-red-500/20',
      hoverBorder: 'hover:border-red-400/50',
      icon: 'text-red-500',
      hoverIcon: 'group-hover:text-red-400',
      gradient: 'from-red-500/0 via-red-500/20 to-red-500/0',
      glow: 'group-hover:shadow-red-500/30'
    },
    gray: {
      bg: 'bg-gray-500/5',
      hoverBg: 'hover:bg-gray-500/15',
      border: 'border-gray-500/20',
      hoverBorder: 'hover:border-gray-400/50',
      icon: 'text-gray-500',
      hoverIcon: 'group-hover:text-gray-400',
      gradient: 'from-gray-500/0 via-gray-500/20 to-gray-500/0',
      glow: 'group-hover:shadow-gray-500/30'
    }
  };

  const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div 
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block w-full p-7 ${classes.bg} ${classes.hoverBg} backdrop-blur-sm border ${classes.border} ${classes.hoverBorder} rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${classes.glow} relative overflow-hidden transform-gpu`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${classes.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${color}-400/10 to-transparent animate-scan-slow`}></div>
        </div>
        
        <div className="relative flex items-center gap-6">
          <div className={`w-16 h-16 rounded-xl ${classes.bg} flex items-center justify-center ${classes.hoverBg} transition-all duration-500 border ${classes.border} group-hover:rotate-3 group-hover:scale-110 relative overflow-hidden`}>
            {/* Icon glow effect */}
            <div className={`absolute inset-0 bg-${color}-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
            <Icon className={`w-8 h-8 ${classes.icon} ${classes.hoverIcon} transition-all duration-300 relative z-10 group-hover:drop-shadow-lg`} />
            
            {/* Electric effect */}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className={`w-4 h-4 text-${color}-300 animate-ping absolute`} />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-medium text-xl mb-2 group-hover:text-white transition-colors duration-300 tracking-wide">
              {name}
            </h3>
            {description && (
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          <div className="w-12 h-12 rounded-xl bg-gray-800/30 flex items-center justify-center group-hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 group-hover:border-gray-600/50 group-hover:rotate-12 group-hover:scale-110">
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialLink;