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
  const arrayOfFiles = getAllFiles('./dist/assets/')
  console.log(arrayOfFiles)
  arrayOfFiles.map((f) => {
    console.log(f)
    console.log(fs.readFileSync(f).toString())
  })
} catch (e) {
  console.log(e)
}
