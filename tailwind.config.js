/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#009ee1',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear reverse infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scan': 'scan 3s ease-in-out infinite',
        'scan-slow': 'scanSlow 4s ease-in-out infinite',
        'scan-horizontal': 'scanHorizontal 8s linear infinite',
        'scan-vertical': 'scanVertical 6s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'matrix-dots': 'matrixDots 4s ease-in-out infinite',
        'float-orb': 'floatOrb 6s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(0, 158, 225, 0.3), 0 0 40px rgba(0, 158, 225, 0.2), 0 0 60px rgba(0, 158, 225, 0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(0, 158, 225, 0.4), 0 0 60px rgba(0, 158, 225, 0.3), 0 0 90px rgba(0, 158, 225, 0.2)'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            'box-shadow': '0 0 10px rgba(0, 158, 225, 0.5)'
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(0, 158, 225, 0.8), 0 0 30px rgba(0, 158, 225, 0.6)'
          }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scanSlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scanHorizontal: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        scanVertical: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(80px, 80px)' }
        },
        matrixDots: {
          '0%, 100%': { opacity: '0.04' },
          '50%': { opacity: '0.08' }
        },
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px)' },
          '75%': { transform: 'translateY(-30px) translateX(-10px)' }
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};