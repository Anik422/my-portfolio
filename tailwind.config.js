// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        navLight: '#4f46e5',       // bg-navLight
        navDark: '#3730a3',        // dark:bg-navDark
        sidebarLight: '#ffffff',
        sidebarDark: '#111827',
        dashboardLight: '#f9fafb',
        dashboardDark: '#1f2937',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
}
