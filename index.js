#!/usr/bin/env node

// Require libraries
const inquirer = require("inquirer")
const chalk    = require("chalk")
const shell    = require("shelljs")

/** Custom modules for the tools */
const argsLib      = require("./ArgProccessing.js")
const messageLib   = require("./MessageHandler.js")
const pluginLib    = require("./CreatePlugin.js")
const endpointLib  = require("./CreateEndpoint.js")

// Get CLI args
const args = argsLib.getArgObject()

// Run the main script
const run = async () => {
  switch (args.main) {
    case 'plugin':
      handleCommand(['name'], pluginLib.createPlugin)
      break
    case 'endpoint':
      handleCommand(['file', 'endpoint', 'callback'], endpointLib.createEndpoint)
      break
    default:
      console.log('helping')
  }
}

// Handles a CLI command:
// Parameters:
//    commandArgs - the required arguments for the command
//    callback    - the function to call after argument validation
const handleCommand = (commandArgs, callback) => {
  let haveProperties = argsLib.hasProperties(args, commandArgs)
  if (haveProperties) {
    callback(args)
  } else {
    let messages = argsLib.missingProperties(args, commandArgs)
    messageLib.printError(messages)
  }
}

run()