/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobile: '640px',
      screen: '1280px',
      wide: '1600px'
    },
    extend: {
      width: {
        content: '1000px'
      },
      colors: {
        dark: {
          salemsfur: '#F7F9FC',
          snow: '#0A0C14',
          trout: '#A3AABF',
          manatee: '#A3AABF',
          botticelli: '#495166',
          whitelilac: '#262C3B',
          alpine: '#171B26',
          pro: '#0B231A',
          con: '#381721'
        },
        light: {
          magenta: '#E20074',
          salemsfur: '#171B26',
          magentaLight: '#F9CCE3',
          royalblue: '#00A0DE',
          trout: '#474C59',
          manatee: '#8D93A6',
          snow: '#FFFFFF',
          botticelli: '#CFD5E5',
          whitelilac: '#EBEFF7',
          alpine: '#F7F9FC',
          red: '#EE3F54',
          green: '#0D8033',
          cararra: '#E7E6E0',
          iceWater: '#F2F6FF',
          pro: '#EDFAF2',
          con: '#FEECEE',
          black: '#0A0C14',
          cadetBlue: '#A3AABF',
          riverBed: '#495166',
          ebony: '#262C3B',
          goldenSand: '#F5E198'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
