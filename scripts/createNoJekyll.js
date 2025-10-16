const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../out/.nojekyll');

fs.writeFileSync(filePath, '', 'utf8');
console.log('.nojekyll file created in out/');
