import type {Config} from 'tailwindcss';
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        'float-1': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -15px) rotate(5deg)' },
          '50%': { transform: 'translate(-10px, 10px) rotate(-3deg)' },
          '75%': { transform: 'translate(5px, 5px) rotate(2deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        'float-2': {
            '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
            '25%': { transform: 'translate(-15px, 10px) rotate(-5deg)' },
            '50%': { transform: 'translate(10px, -10px) rotate(3deg)' },
            '75%': { transform: 'translate(-5px, -5px) rotate(-2deg)' },
            '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        'float-3': {
            '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
            '25%': { transform: 'translate(10px, 15px) rotate(-6deg)' },
            '50%': { transform: 'translate(-12px, -5px) rotate(4deg)' },
            '75%': { transform: 'translate(8px, -10px) rotate(-2deg)' },
            '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        'float-4': {
            '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
            '25%': { transform: 'translate(-12px, -12px) rotate(6deg)' },
            '50%': { transform: 'translate(8px, 8px) rotate(-4deg)' },
            '75%': { transform: 'translate(-10px, 12px) rotate(3deg)' },
            '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          to: { transform: 'translateX(50%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: 'aurora 60s linear infinite',
        'float-1': 'float-1 12s ease-in-out infinite',
        'float-2': 'float-2 13s ease-in-out infinite',
        'float-3': 'float-3 14s ease-in-out infinite',
        'float-4': 'float-4 15s ease-in-out infinite',
        'float-fast': 'float-fast 2s ease-in-out infinite',
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
};

export default config;
