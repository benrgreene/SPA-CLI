#!/usr/bin/env node

// Require libraries
const inquirer = require("inquirer")
const chalk    = require("chalk")
const shell    = require("shelljs")

/** Custom Modules for the tools */
const argsLib  = require("./ArgProccessing.js")

// Get CLI args
const args = argsLib.getArgObject()

// Run the main script
const run = async () => {
  switch (args.main) {
    case 'endpoint':
      console.log('building api endpoint')
      break
    default:
      console.log('helping')
  }
}

run()