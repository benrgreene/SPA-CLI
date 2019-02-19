// Library helpers
const shell       = require("shelljs")
const download    = require("download-git-repo")
const fileHelpers = require("./FileHelpers.js")
const messageLib  = require("./MessageHandler.js")

module.exports = {
  downloadFramework: (args) => {
    // create our new framework directory
    shell.mkdir(args.dir)
    // download the framework
    download('benrgreene/Single-Page-Framework', args.dir, {}, (err) => {
      if (err) { 
        messageLib.printError(`Error: couldn't download framework`)
      } else {
        messageLib.printSuccess(`Framework saved in directory: "${args.dir}"`)
      }
    })
  }
}