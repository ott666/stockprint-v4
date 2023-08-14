import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'secondaryBlue':'#617ABC'
      },
      screens:{
        'mm':'375px',
        '3xl':'1900px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hidlogo':
          'url("/logos/hid_gold.svg")',
          'ink1000card':
          'url("/ink1000/ink10007.png")',
          'gradienteAzul':'linear-gradient(135deg, rgba(106, 121, 172, 0.37) 100%, rgba(18, 65, 234, 0.37) 100%);',
          'gradienteAzulRisk':'linear-gradient(135deg, rgba(20, 0, 255, 1) 21.88%, rgba(59, 111, 186, 1) 55.21%, rgba(0, 56, 255, 1) 84.90%)',
      },
    },
  },
  plugins: [],
}
export default config
