const os = require (`os`)


//infor baout current user
const user = os.userInfo()
console.log(user)

//methos returns system uptime
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)