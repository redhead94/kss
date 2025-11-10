import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { sm: '640px', md: '768px', lg: '976px', xl: '1200px' },
    },
    extend: {
      colors: {
        // Pulled to match the flyer (blue brand + teal highlight + gold accent)
        brand: {
          blue: '#1777CF',     // main header blue
          deep: '#0B4E9C',     // darker blue for emphasis
          teal: '#1EC5D9',     // “SHAR” light letters feel
          gold: '#F4A120',     // small accent (e.g., subtext dividers)
          ink: '#0F172A',      // body text
          mist: '#F4F7FB',     // page background
        },
      },
      fontFamily: {
        // Swap to your brand fonts if you have them
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(23, 119, 207, 0.15)',
      },
      letterSpacing: {
        wide2: '.04em',
      },
      backgroundImage: {
        // soft vertical glow similar to the flyer’s light streaks
        'streaks':
          'radial-gradient(80% 60% at 80% 20%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%), linear-gradient(180deg, #F8FAFF 0%, #EEF4FB 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
