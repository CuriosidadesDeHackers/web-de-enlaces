import React from 'react';
import SocialLink from './SocialLink';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  MessageCircle,
  Globe,
  Bug,
  Terminal,
  Shield,
  Briefcase,
  Music,
  User,
  Search,
  ShieldCheck,
  Compass
} from 'lucide-react';

const LinkSection = () => {
  const socialLinks = [
    {
      icon: Globe,
      name: 'Curiosidades De Hackers',
      url: 'https://curiosidadesdehackers.com/',
      description: 'Portal principal con artículos y recursos de ciberseguridad',
      color: 'blue'
    },
    {
      icon: User,
      name: 'Sobre mí',
      url: 'https://curiosidadesdehackers.com/about/',
      description: 'Conoce más sobre mi experiencia y trayectoria profesional',
      color: 'cyan'
    },

    {
      icon: Linkedin,
      name: 'LinkedIn Profesional',
      url: 'https://es.linkedin.com/in/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289',
      description: 'Red profesional y experiencia laboral',
      color: 'blue'
    },
    {
      icon: Github,
      name: 'Repositorios GitHub',
      url: 'https://github.com/CuriosidadesDeHackers',
      description: 'Herramientas y proyectos de código abierto',
      color: 'gray'
    },
    {
      icon: MessageCircle,
      name: 'Canal Telegram',
      url: 'https://t.me/CuriosidadesDeHackers',
      description: 'Noticias y actualizaciones de seguridad',
      color: 'cyan'
    },
    {
      icon: Twitter,
      name: 'Twitter/X',
      url: 'https://twitter.com/HackersCuriosos',
      description: 'Actualizaciones y pensamientos sobre ciberseguridad',
      color: 'gray'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/curiosidadesdehackers/',
      description: 'Contenido visual y behind the scenes',
      color: 'purple'
    },
    {
      icon: Youtube,
      name: 'Canal de YouTube',
      url: 'https://www.youtube.com/channel/UCyFq3OKciq3VMNpTmzV1XTA',
      description: 'Tutoriales y conferencias sobre seguridad digital',
      color: 'red'
    },
    {
      icon: Mail,
      name: 'Contacto Profesional',
      url: 'mailto:info@curiosidadesdehackers.com',
      description: 'Para consultas y colaboraciones profesionales',
      color: 'blue'
    }
  ];

  const projectLinks = [
        {
      icon: Terminal,
      name: 'The Hackers Labs',
      url: 'https://thehackerslabs.com/',
      description: 'Plataforma de CTFs y retos de ciberseguridad avanzados',
      color: 'cyan'
    },
    {
      icon: Bug,
      name: 'Bug Bounty Labs',
      url: 'https://bugbountylabs.com/',
      description: 'Plataforma de laboratorios vulnerables para practicar',
      color: 'purple'
    },

    {
      icon: ShieldCheck,
      name: 'Generador CSRF POC Avanzado',
      url: 'https://csrf.curiosidadesdehackers.com/',
      description: 'Web diseñada para generar pruebas de concepto (PoC) de ataques CSRF (Cross-Site Request Forgery)',
      color: 'blue'
    },
    {
      icon: Search,
      name: 'IOCs Database, Cybersecurity Intelligence Platform',
      url: 'https://iocs.curiosidadesdehackers.com/',
      description: 'Base de datos de indicadores de compromiso (IOCs)',
      color: 'indigo'
    },
    {
      icon: Compass,
      name: 'Tu Senda Digital',
      url: 'https://tusendadigital.com/',
      description: 'Plataforma de orientación y recursos para el desarrollo profesional digital',
      color: 'purple'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Social Networks Section */}
      <div className="relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-4xl font-light text-white tracking-wide">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Redes Sociales
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/15 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-cyan-500" />
            </div>
            <h2 className="text-4xl font-light text-white tracking-wide">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6">
          {projectLinks.map((link, index) => (
            <SocialLink key={index} {...link} delay={index * 150} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
    </div>
  );
};

export default LinkSection;