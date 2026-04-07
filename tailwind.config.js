/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Gen Z color palette
        'primary': '#FF6B6B',
        'primary-dark': '#FF8E53',
        'secondary': '#FFD93D',
        'accent': '#4ECDC4',
        'neutral-light': '#F7F7F7',
        'neutral-dark': '#2C3E50',
        // Keep old colors for backward compatibility during transition
        'cityyear-red': '#FF6B6B',
        'cityyear-red-dark': '#FF8E53',
        'cityyear-blue': '#4ECDC4',
        'cityyear-blue-light': '#4ECDC4',
        'cityyear-yellow': '#FFD93D',
        'cityyear-green': '#4ECDC4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
      },
      lineHeight: {
        'relaxed': '1.6',
      },
      spacing: {
        'section': '8rem', // 40% more space between sections
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.8s ease-out',
        scale: 'scale 0.3s ease-out',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      },
    },
  },
  plugins: [],
}

