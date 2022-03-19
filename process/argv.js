const process = require('process')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const imagePath = process.argv[2]
const width = Number(process.argv[3]) || 40
const height = Number(process.argv[4]) || 60
const inputBuffer = fs.readFileSync(imagePath)

const parsed = path.parse(imagePath)
const target = path.resolve(__dirname, 'cats', `${parsed.name}_${Math.random()}${parsed.ext}`)

sharp(inputBuffer)
  .resize(width, height)
  .toFile(target, (err, info) => {
      console.log(err, info)
  })