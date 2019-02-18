module.exports = {
  getArgObject: () => {
    const rawArgs  = process.argv.slice(2)
    const toReturn = {}
    // loop through each 
    rawArgs.forEach((arg) => {
      if (arg.includes('=')) {
        let parts = arg.split('=')
        let key   = parts[0].replace('--', '')
        toReturn[key] = parts[1]
      } else {
        toReturn['main'] = arg
      }
    })
    if (!toReturn.hasOwnProperty('main')) {
      toReturn.main = 'help'
    }
    return toReturn
  }
}