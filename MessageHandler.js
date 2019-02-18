module.exports = {
  printError: (errorMessage) => {
    if ('string' == typeof errorMessage) {
      errorMessage = [errorMessage]
    }
    errorMessage.forEach((message) => {
      console.error(message);
    })
  },
  printSucess: (message) => {

  }
}