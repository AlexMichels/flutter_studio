const fs = require('fs');
const path = require('path');

// Copy CSS files
fs.copyFileSync('./css/style.css', './public/css/style.css');

// Copy JS files
fs.copyFileSync('./js/main.js', './public/js/main.js');

console.log('Assets copied successfully!');