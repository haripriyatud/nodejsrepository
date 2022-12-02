import { readFile, writeFile, appendFile } from 'fs';
readFile('myfile.txt','utf-8',(err,content)=>{
    if(err){
        console.log('error occured: '+ err);
        return;
    }
    console.log('file contents: '+ content);
})

appendFile('myfile.txt','\nthis would be written to the file async', 'utf-8',(err,result)=>{
    if(err){
        console.log('error occured: '+ err);
        return;
    }
    console.log('file written sucessfully');
})