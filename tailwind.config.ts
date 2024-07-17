import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red_dark: '#BF3B44',
      red_mid: '#F3BABD',
      red_light: '#F4E6E7',
      green_dark: '#639339',
      green_mid: '#CBE4B4',
      green_light: '#E5F0DB',
      white: '#FFFFFF',
      gray: {
        1: '#1B1D1E',
        2: '#333638',
        3: '#5C6265',
        4: '#B9BBBC',
        5: '#DDDEDF',
        6: '#EFF0F0',
        7: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
export default config
