const chalk = require('chalk');

module.exports = {
  printError: (errorMessage) => {
    if ('string' == typeof errorMessage) {
      errorMessage = [errorMessage]
    }
    errorMessage.forEach((message) => {
      console.log(chalk.bgRed(chalk.white(message)));
    })
  },
  printSuccess: (messages) => {
    if ('string' == typeof messages) {
      messages = [messages]
    }
    messages.forEach((message) => {
      console.log(chalk.green(message));
    })
  },
  printNeutral: (messages) => {
    if ('string' == typeof messages) {
      messages = [messages]
    }
    messages.forEach((message) => {
      console.log(chalk.blue(message));
    })
  }
}