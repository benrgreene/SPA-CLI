const shell    = require("shelljs")

module.exports = {
  pluginExists: (pluginName) => {
    let pluginFolderExists = shell.test('-d', `plugins/${pluginName}`)
    return pluginFolderExists
  },
  folderExists: (folderName) => {
    let folderExists = shell.test('-d', folderName)
    return folderExists
  },
  createFile: (fileName, fileContent) => {
    shell.touch(fileName)
    let shellString = shell.ShellString(fileContent)
    shellString.to(fileName)
  }
}