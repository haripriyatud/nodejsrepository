const { dirname } = require('path');
const path = require('path')

const cwd= path.resolve(__dirname);

console.log(path.basename(cwd));

console.log(path.isAbsolute(cwd));

console.log(path.extname(__filename));

const mypath= path.join('/folder','/subfolder','filename.extension')

console.log(mypath)


