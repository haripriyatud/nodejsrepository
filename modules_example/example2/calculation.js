 
 import { add, diff } from './calculator.js';


var expr= process.argv.slice(2).toString();

 switch (expr) {
    case 'add':
        const sum = add(7,8);
        console.log(sum);
      break;
    case 'diff':
        const difference = diff(8,7);
        console.log(difference);
      break;
    default:
      console.log('unknown operation');
  }




