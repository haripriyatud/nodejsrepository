let amount = process.argv.slice(2);
if(amount<10){ 
    console.log('argument passed is '  + amount + ' which is smaller than 10');
}
else if(amount>10){ 
    console.log('argument passed larger than 10');
}
else{
console.log('argument passed is equal to 10');
}

console.log('this is my first node app');