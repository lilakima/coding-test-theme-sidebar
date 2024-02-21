module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      darkMode: 'class', // Enable dark mode
      colors: {
        dark: {
          DEFAULT: '#1f2937',
          text: '#fff'
        },
        primary: {
          DEFAULT: '#2563eb',
          text: '#fff',
          background: '#991b1b'
        },
        allButton: '#991b1b', // 新增 ALL 按钮的背景色
      }
    },
  },
  plugins: [],
};
