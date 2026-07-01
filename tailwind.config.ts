import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1A73E8',
        'brand-dark': '#0F56B3',
        'brand-light': '#E8F0FE',
        'text-primary': '#1F1F1F',
        'text-secondary': '#5F6368',
        'text-tertiary': '#9AA0A6',
        'bg-page': '#FFFFFF',
        'bg-section': '#F8F9FA',
        'bg-input': '#F1F3F4',
        'border-default': '#DADCE0',
        'border-subtle': '#E8EAED',
        success: '#1E7E34',
        'success-bg': '#E6F4EA',
        warning: '#B36B00',
        'warning-bg': '#FEF3E0',
        danger: '#C5221F',
        'danger-bg': '#FCE8E6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        card: '10px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.10)',
      },
      maxWidth: {
        container: '1140px',
        form: '640px',
      },
    },
  },
  plugins: [],
}

export default config
