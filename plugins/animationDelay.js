const plugin = require("tailwindcss/plugin");
const animationDelay = plugin(
    function({ matchUtilities, theme })
    {
    matchUtilities(
        {
        "animation-delay": (value) => {
            return {
                animationDelay: value,
            };
        },
    },
    { 
        // specify default value as 2nd arg to register values for animationDelay class
        values: theme("animationDelay"),
        // referencing from theme{animationDelay} below, which then adds to the matchUtilities above
        }
    );
    }, 
    {
    theme: {
        animationDelay: {
            100: "100ms",
            200: "200ms",
            300: "300ms",
            400: "400ms",
            500: "500ms",
            600: "600ms",
            700: "700ms",
            800: "800ms",
            900: "900ms",
            1000: "1000ms",
        },
    },
}
);

module.exports = animationDelay;