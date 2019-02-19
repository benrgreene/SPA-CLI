// Library helpers
const shell       = require("shelljs")
const fileHelpers = require("./FileHelpers.js")

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
      shell.mkdir(`plugins/${args.name}`)
      shell.mkdir(`plugins/${args.name}/api`)
      fileHelpers.createFile(`plugins/${args.name}/setup.php`, defaultFileContent)
    }
  }
}