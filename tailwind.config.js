module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        colors:{
          'gray': '#999999',
          'green' : '#28e98c',
          'white' : '#fff'
        },
        fontFamily:{
          'inter' : ['Inter', 'sans-serif']
        }
      },
  },
  plugins: [],
}
