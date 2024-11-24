variants: {
    display: ['group-hover']
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            screens: {
                print: { raw: 'print' },
                screen: { raw: 'screen' },
            },
            colors: {
                'primary': '#aaaaaa',
                'secondary': '#3f3cbb',
                'accent': '#121063',
                'dark': '#112D4E',
                'light': '#3ab7bf',
            },
            fontFamily: {
                'work-sans': ['"Work Sans"', 'sans-serif'],
            },
        }
    }
}