import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx,jsx,js}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		animation: {
  			'spin-slow': 'spin 3s linear ',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		}
  	}
  },
  
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config