/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)'
      }
    },
  },
  plugins: [],
}
/**
#eaeaea
#bebebf
#9e9ea0
#727275
#56565a
#2c2c31
#28282d
#1f1f23
#18181b
#121215

#f3eefc
#d8cbf7
#c6b2f3
#ab8eee
#9b79ea
#8257e5
#764fd0
#5c3ea3
#48307e
#372560

#ffefeb
#ffccc2
#ffb4a4
#ff927b
#ff7d61
#ff5c3a
#e85435
#b54129
#8c3320
#6b2718

#fff9ec
#ffebc4
#ffe2a7
#ffd47f
#ffcc66
#ffbf40
#e8ae3a
#b5882d
#8c6923
#6b501b

#e6fbef
#b1f1ce
#8cebb6
#57e295
#36dc81
#04d361
#04c058
#039645
#027435
#025929
 */
