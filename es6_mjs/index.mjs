import fs from 'fs'
import path from 'path'
import os from 'os'

// console.log(path.extname('big-fat.cat.jpg'))

const osPath = '/Users/va/teach/lesson_3/es6_mjs/index.mjs'
const parsed = path.parse(osPath)

const relatedOsPath = '../es6/utils/helper.mjs'

// console.log(path.isAbsolute(osPath), path.isAbsolute(relatedOsPath))

// console.log(path.resolve('/Users/va/teach/lesson_3/es6_mjs', '../es6/utils/../utils/', 'helper', '.mjs'))

// console.log(path.sep)

// console.log(path.resolve(os.homedir(), 'Downloads'))

// console.log(os.constants)

fs.readFile('./hello.txt', (err, file) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(file.toString())
})