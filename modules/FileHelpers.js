const shell    = require("shelljs")

module.exports = {
  pluginExists: (pluginName) => {
    let pluginsExists      = shell.test('-d', 'plugins')
    let pluginFolderExists = shell.test('-d', `plugins/${pluginName}`)
    return (pluginsExists && pluginFolderExists)
  },
  createFile: (fileName, fileContent) => {
    shell.touch(fileName)
    let shellString = shell.ShellString(fileContent)
    shellString.to(fileName)
  }
}