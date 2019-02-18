#!/usr/bin/env node

// Require libraries
const inquirer = require("inquirer")
const chalk    = require("chalk")
const shell    = require("shelljs")

/** Custom Modules for the tools */
const argsLib    = require("./ArgProccessing.js")
const messageLib = require("./MessageHandler.js")

// Get CLI args
const args = argsLib.getArgObject()

// Run the main script
const run = async () => {
  switch (args.main) {
    case 'plugin':
      handleCommand(['name'])
      break
    case 'endpoint':
      handleCommand(['file', 'endpoint', 'callback'])
      break
    default:
      console.log('helping')
  }
}

const handleCommand = (commandArgs) => {
  let haveProperties = argsLib.hasProperties(args, commandArgs)
  if (haveProperties) {

  } else {
    let messages = argsLib.missingProperties(args, commandArgs)
    console.log(messages)
    messageLib.printError(messages)
  }
}

run()