/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    keyframes: {
      loop: {
        to: {
          'offset-distance': '100%',
        },
      },
    },

    extend: {
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wiggle: {
          '0%': {
            transform: 'translateY(5%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(5%)',
          },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },

      colors: {
        ebony: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#cbd8ec',
          300: '#9db6dc',
          400: '#6990c7',
          500: '#4672b1',
          600: '#345995',
          700: '#2b4779',
          800: '#273e65',
          900: '#253555',
          950: '#111827',
        },

        ebonyclay: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a6bcd3',
          400: '#7799b9',
          500: '#557ca2',
          600: '#426287',
          700: '#37506d',
          800: '#30455c',
          900: '#2c3c4e',
          950: '#1f2937',
        },

        woodsmoke: {
          50: '#f5f6f6',
          100: '#e5e7e8',
          200: '#ced2d3',
          300: '#abb2b5',
          400: '#828a8e',
          500: '#666f74',
          600: '#585e62',
          700: '#4b4f53',
          800: '#424648',
          900: '#3a3d3f',
          950: '#131415',
        },
        flamingo: {
          50: '#fef5ee',
          100: '#fee9d6',
          200: '#fbd0ad',
          300: '#f8ae79',
          400: '#f48243',
          500: '#f2692a',
          600: '#e24614',
          700: '#bc3412',
          800: '#952a17',
          900: '#782616',
          950: '#411009',
        },
        junglegreen: {
          50: '#effef9',
          100: '#c7ffee',
          200: '#90ffde',
          300: '#51f7cc',
          400: '#1de4b7',
          500: '#04c89e',
          600: '#00ae8d',
          700: '#05806a',
          800: '#0a6556',
          900: '#0d5448',
          950: '#00332d',
        },
        royalBlue: {
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93b4fd',
          400: '#6090fa',
          500: '#3b76f6',
          600: '#2563eb',
          700: '#1d58d8',
          800: '#1e4baf',
          900: '#1e408a',
          950: '#172a54',
        },
        onyx: {
          50: 'rgba(241, 241, 244, var(--tw-bg-opacity))',
          100: 'rgba(227, 227, 232, var(--tw-bg-opacity))',
          200: 'rgba(200, 198, 210, var(--tw-bg-opacity))',
          300: 'rgba(175, 173, 190, var(--tw-bg-opacity))',
          400: 'rgba(148, 144, 167, var(--tw-bg-opacity))',
          500: 'rgba(120, 116, 144, var(--tw-bg-opacity))',
          600: 'rgba(96, 93, 117, var(--tw-bg-opacity))',
          700: 'rgba(75, 72, 91, var(--tw-bg-opacity))',
          800: 'rgba(52, 50, 63, var(--tw-bg-opacity))',
          900: 'rgba(31, 30, 38, var(--tw-bg-opacity))',
          950: 'rgba(28, 27, 34, var(--tw-bg-opacity))',
          '900/60': '#1f1e2699',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
