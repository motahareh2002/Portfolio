module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        colors:{
          'gray': '#999999',
          'green' : '#28e98c',
          'white' : '#fff',
          'blackBg' : '#1f1f1f'
        },
        fontFamily:{
          'inter' : ['Inter', 'sans-serif']
        }
      },
  },
  plugins: [],
}
