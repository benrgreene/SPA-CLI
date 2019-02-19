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
    let created         = shell.touch(fileName)
    let shellString     = shell.ShellString(fileContent)
    let contentsWritten = shellString.to(fileName)

    if (created && contentsWritten) {
      return true
    } else if (created) {
      return 'File created, contents not copied'
    } else {
      return 'Endpoint not created'
    }
  }
}