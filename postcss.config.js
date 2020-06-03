const tailwindcss = require('tailwindcss');

module.exports = {
    theme : {
        extend : {
            fontFamily : {
                sans : [
                    'Inter', 
                    'system', 
                    '-apple-system', 
                    'BlinkMacSystemFont', 
                    'Roboto', 
                    'Segoe UI', 
                    'Arial', 
                    'sans-serif'
                ]
            }
        },
    },
    variants : {},
    plugins : [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
};