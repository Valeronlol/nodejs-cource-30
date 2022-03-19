const process = require('process')
const fs = require('fs')
const os = require('os')

process.on('uncaughtException', (reason) => {
    fs.writeFileSync('./error-logs.txt', reason.toString() + os.EOL, { flag: 'as+' })
})

// async function errorFunction() {
//     setInterval(() => {
//         new Error('Hi this is async error')
//     }, 1000)
// }

// errorFunction()

// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// });
  
Promise.resolve().then((res) => {
    throw new Error('Hi this is async error')
})