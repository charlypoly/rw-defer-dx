/* eslint-disable import/order */
const { exec } = require('child_process')

exec('ls -la /vercel/output', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})

const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

try {
  const arrayOfFiles = getAllFiles('/vercel/output/assets/')
  console.log(arrayOfFiles)
  arrayOfFiles.map((f) => {
    console.log(f)
    console.log(fs.readFileSync(f).toString())
  })
} catch (e) {
  console.log(e)
}
