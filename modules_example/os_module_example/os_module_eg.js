const os = require('os')

const user = os.userInfo()
console.log(user)

console.log('System Uptime is: '+ os.uptime()+ ' seconds')

const current_os = {
    name:os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()    
}

console.log(current_os);