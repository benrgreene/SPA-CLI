// Library helpers
const shell       = require("shelljs")
const fileHelpers = require("./FileHelpers.js")

// default content for any new plugins
const defaultFileContent = "<?php\n\n"

module.exports = {
  createPlugin: (args) => {
    // ensure there is a plugins folder before trying to write to it
    let pluginFolderExists = shell.test('-d', 'plugins')
    if (pluginFolderExists) {
      shell.mkdir(`plugins/${args.name}`)
      fileHelpers.createFile(`plugins/${args.name}/setup.php`, defaultFileContent)
    }
  }
}