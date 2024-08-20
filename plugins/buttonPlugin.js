const plugin = require("tailwindcss/plugin");
// const {default: lightOrDarkColor} = require("@check-light-or-dark/color")

const buttonPlugin = plugin(function({addComponents, matchComponents, theme,}){

    // console.log(theme('spacing'));
    
    addComponents({
        '.btn': {
            display: 'inline-block',
            cursor: 'pointer',
            fontWeight: 'bold',
            // if the spacing does not contain a decimal value we can access it without a square bracket like below
            padding: `${theme('spacing.2')} ${theme('spacing')['4']}`,
            borderRadius: theme('borderRadius').lg,
        }
    })
    console.log(theme("colors"));
    for (let key in theme('colors')) {
        if (typeof theme('colors')[key] !== 'string') {
            for (let shade in theme('colors')[key]){
                // const colorType = lightOrDarkColor(theme('colors')[key][shade]);
                addComponents({
                    [`.btn-${key}-${shade}`]: {
                        backgroundColor: theme('colors')[key][shade],
                        // color: colorType === 'dark' ? 'white' : 'black', 
                    },
                });
            }
            
        }
    }
});

module.exports = buttonPlugin