const process = require('process')
const fs = require('fs')
const os = require('os')
const result = []

process.on('beforeExit', () => {
    console.log('process almost done')
    fs.writeFileSync('./debug-logs.txt', result.join(os.EOL), { flag: 'as+' })
})

console.log('runing')

for (let i = 0; i < 100000 ; i++) {
    if (i % 2 === 0) {
        result.push(`some text: ${i}`)
    }
}

console.log('cycle is over')