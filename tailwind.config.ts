import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // OBS Brand Colors
        obs: {
          purple: '#a33188',
          blue: {
            DEFAULT: '#4a92c9',
            light: '#9fdcf7',
          },
          teal: '#68bae5',
          green: '#30e070',
        },
        // Christmas Theme Colors
        christmas: {
          red: '#c41e3a',
          gold: '#ffd700',
          snow: '#fffafa',
        },
      },
      animation: {
        'snow-fall': 'snowfall 10s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'door-shake': 'doorshake 0.5s ease-in-out',
      },
      keyframes: {
        snowfall: {
          '0%': { transform: 'translateY(-100vh) translateX(0)' },
          '100%': { transform: 'translateY(100vh) translateX(100px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        doorshake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
