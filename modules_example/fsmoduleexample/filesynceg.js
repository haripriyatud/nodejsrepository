import { readFileSync, writeFileSync } from 'fs'

const file_contents = readFileSync('myfile.txt','utf-8')
console.log(file_contents)
writeFileSync('myfile.txt','\nthis would be written to the file',{flag:'a'})
