// Library helpers
const shell       = require("shelljs")
const fileHelpers = require("./FileHelpers.js")
const messageLib  = require("./MessageHandler.js")

// default content for any new plugins
const defaultFileContent = `<?php

// Load in API endpoints
add_action( 'load-apis', function() {
  load_directory( __DIR__ . '/api' );
});`

module.exports = {
  createPlugin: (args) => {
    // ensure there is a plugins folder before trying to write to it
    let pluginFolderExists = shell.test('-d', 'plugins')
    if (pluginFolderExists) {
      if (shell.test('-d', `plugins/${args.name}`)) {
        messageLib.printNeutral(`Plugin "${args.name}" already exists, aborting.`)
      } else {
        shell.mkdir(`plugins/${args.name}`)
        shell.mkdir(`plugins/${args.name}/api`)
        let fileCreated = fileHelpers.createFile(`plugins/${args.name}/setup.php`, defaultFileContent)
        if (true === fileCreated) {
          messageLib.printSuccess(`Plugin ${args.name} created`)
        } else {
          messageLib.printError(`Error plugin ${args.name} not fully created.`)
        }
      }
    } else {
      messageLib.printError(`Error: plugin folder doesn't exist.`)
    }
  }
}