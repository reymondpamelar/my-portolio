const { Scale } = require('chart.js')
const plugin = require('tailwindcss/plugin')
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './containers/**/*.{js,ts,jsx,tsx}',
        './styles/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class',
    target: 'relaxed',
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        spacing: {
            px: '1px',
            '0': '0',
            '0.5': '0.12rem',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '31': '7rem',
            '31.5': '7.5rem',
            '31.75': '7.6rem',
            '32': '8rem',
            '34': '8.5rem',
            '36': '9rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '60': '15rem',
            '61': '15.25rem',
            '62': '15.5rem',
            '64': '16rem',
            '66': '16.5rem',
            '68': '17rem',
            '72': '18rem',
            '128': '32rem',
            '160': '40rem',
            '176': '44rem',
            '192': '50rem',
        },
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw'
        }),
        extend: {
            screens: {
                'custombp': {'raw': '(max-height: 720px)'},
            },
            animation: {
                loaderRotate: 'loaderRotate 3s ease-in-out infinite',
                loaderSlide: 'loaderSlide 3s ease-in-out infinite',
                loaderInitialAppear: 'loaderInitialAppear 3s infinite',
                bounceRight: 'bounceRight 2s ease-in-out infinite',
                reversePing: 'reversePing 1s',
                slideUp: 'slideUp 1s',
                slideDown: 'slideDown 1s',
                slideRight: 'slideRight 1s',
                slideLeft: 'slideLeft 1s',
                slideInDown: 'slideInDown 1s',
                rotate180: 'rotate180 ',
            },
            keyframes:{
                loaderRotate: {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '25%': {
                        transform: 'rotate(0deg)'
                    },
                    '50%': {
                        transform: 'rotate(360deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    },

                },
                loaderSlide: {
                    '25%': {
                        transform: 'translateX(-30px) translateY(-30px)',
                    },
                    '50%': {
                        transform: 'translateX(-30px) translateY(-30px)',
                    },
                    '75%': {
                        transform: 'translateX(-30px) translateY(-30px)',
                    },
                    '90%': {
                        transform: 'translateX(0px) translateY(0px)',
                    },
                },
                loaderInitialAppear: {
                    '25%': {
                        opacity: '0',
                    },
                    '85%': {
                        opacity: '0',
                    },
                    '90%': {
                        opacity: '1',
                    },
                },
                bounceRight: {
                    '0%, 100%': {
                        transform: 'translateX(-6%)',
                    },
                    '50%': {
                        transform: 'translateX(6%)',
                    },
                },
                reversePing: {
                    '0%, 5%': {
                        opacity: '.5',
                        transform: 'scale(2)',
                    },
                },
                slideUp: {
                    '0%': {
                        opacity: '.0',
                        transform: 'translateY(6%)',
                    },
                },
                slideDown: {
                    '0%': {
                        opacity: '.0',
                        transform: 'translateY(-6%)',
                    },
                },
                slideRight: {
                    '0%': {
                        opacity: '.0',
                        transform: 'translateX(-6%)',
                    },
                },
                slideLeft: {
                    '0%': {
                        opacity: '.0',
                        transform: 'translateX(6%)',
                    },
                },
                slideInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                rotate180: {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(180deg)'
                    },
                }
            },
            colors: {
                pblue: '#0979ff',
                pgreen: '#7ED957',
                primary: {
                    '400': '#1890ff',
                    '500': '#096dd9'
                },
                secondary: {
                    '400': '#1890ff',
                    '500': '#096dd9'
                },
                transparent: 'transparent',
                current: 'currentColor',
                black: '#000',
                white: '#fff',
                mainWhite: '#F2F7FD',
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#08203D'
                },
                red: {
                    100: '#fff5f5',
                    200: '#fed7d7',
                    300: '#feb2b2',
                    400: '#fc8181',
                    500: '#f56565',
                    600: '#e53e3e',
                    700: '#c53030',
                    800: '#9b2c2c',
                    900: '#742a2a'
                },
                orange: {
                    100: '#fffaf0',
                    200: '#feebc8',
                    300: '#fbd38d',
                    400: '#f6ad55',
                    500: '#ed8936',
                    600: '#dd6b20',
                    700: '#c05621',
                    800: '#9c4221',
                    900: '#7b341e'
                },
                yellow: {
                    100: '#fffff0',
                    200: '#fefcbf',
                    300: '#faf089',
                    400: '#f6e05e',
                    500: '#ecc94b',
                    600: '#d69e2e',
                    700: '#b7791f',
                    800: '#975a16',
                    900: '#744210'
                },
                green: {
                    100: '#f0fff4',
                    200: '#c6f6d5',
                    300: '#9ae6b4',
                    400: '#68d391',
                    500: '#48bb78',
                    600: '#38a169',
                    700: '#2f855a',
                    800: '#276749',
                    900: '#22543d'
                },
                teal: {
                    100: '#e6fffa',
                    200: '#b2f5ea',
                    300: '#81e6d9',
                    400: '#4fd1c5',
                    500: '#38b2ac',
                    600: '#319795',
                    700: '#2c7a7b',
                    800: '#285e61',
                    900: '#234e52'
                },
                blue: {
                    100: '#ebf8ff',
                    200: '#bee3f8',
                    300: '#90cdf4',
                    400: '#63b3ed',
                    500: '#4299e1',
                    600: '#3182ce',
                    700: '#2b6cb0',
                    800: '#2c5282',
                    900: '#2a4365'
                },
                indigo: {
                    100: '#ebf4ff',
                    200: '#c3dafe',
                    300: '#a3bffa',
                    400: '#7f9cf5',
                    500: '#667eea',
                    600: '#5a67d8',
                    700: '#4c51bf',
                    800: '#434190',
                    900: '#3c366b'
                },
                purple: {
                    100: '#faf5ff',
                    200: '#e9d8fd',
                    300: '#d6bcfa',
                    400: '#b794f4',
                    500: '#9f7aea',
                    600: '#805ad5',
                    700: '#6b46c1',
                    800: '#553c9a',
                    900: '#44337a'
                },
                pink: {
                    100: '#fff5f7',
                    200: '#fed7e2',
                    300: '#fbb6ce',
                    400: '#f687b3',
                    500: '#ed64a6',
                    600: '#d53f8c',
                    700: '#b83280',
                    800: '#97266d',
                    900: '#702459'
                }
            },
            borderColor: {
                primary: {
                    '2': '#1890ff',
                    '3': '#096dd9'
                }
            },
            textColor: {
                primary: {
                    '400': '#1890ff',
                    '500': '#096dd9'
                }
            },
            fontFamily: {
                asap:['Asap Condensed'],
                'open-sans': ['"Open Sans"'],
                poppins: ['Poppins'],
                galano: ['Galano'],
                sans: [
                    '"Open Sans"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ],
                serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
                mono: [
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ],
                serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
                vidaloka: ['Vidaloka']
            },
            fontSize: {
                xxs: '0.625rem',
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem'
            },
            transitionDuration: {
                '0': '0ms',
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
                '1000': '1000ms'
            },
            fontWeight: {
                hairline: '100',
                thin: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900'
            },
            height: {
                'info-box': '10em'
            },
            width: {
                'info-box': '10em'
            }
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
        whitespace: ['responsive'],
        spacing: ['responsive', 'ltr', 'rtl'],
        padding: ['responsive', 'ltr', 'rtl'],
        margin: ['responsive', 'ltr', 'rtl'],
        width: ['responsive'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        plugin(function ({addVariant, e}) {
            addVariant('ltr', ({modifySelectors, separator}) => {
                modifySelectors(({className}) => {
                    return `.${e(`ltr${separator}${className}`)}`
                })
            })
        }),
        plugin(function ({addVariant, e}) {
            addVariant('rtl', ({modifySelectors, separator}) => {
                modifySelectors(({className}) => {
                    return `.${e(`rtl${separator}${className}`)}`
                })
            })
        }),
        require('tailwindcss-neumorphism')
    ],
}
