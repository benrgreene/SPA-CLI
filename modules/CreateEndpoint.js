// Library helpers
const shell       = require("shelljs")
const fileHelpers = require("./FileHelpers.js")

// default content for any new endpoints
const defaultEndpointFileContent = `<?php

API_Register::get_instance()->add_endpoint( 
  'ENDPOINT',
  'CALLBACK'
);

function CALLBACK( $data ) {
  API_Responses::send_response( array(
    'content' => 'endpoint exists'
  ) );
}`

module.exports = {
  createEndpoint: (args) => {
    // required arguments
    let plugin       = args.plugin
    let endpointFile = args.file
    let callback     = args.callback
    let endpoint     = args.endpoint
    // ensure the file name includes a file type ending
    endpointFile = endpointFile.includes('.php') ? endpointFile : `${endpointFile}.php`
    // optional args
    let pluginDirectory = args.pluginDirectory ? args.pluginDirectory : 'api'
    // ensure directory for endpoint exists
    let fileDir      = `plugins/${plugin}/${pluginDirectory}`
    let pluginExists = fileHelpers.folderExists(fileDir)
    if (pluginExists) {
      // need to update default content for current request
      let endpointContent = defaultEndpointFileContent.replace(/ENDPOINT/g, endpoint)
      endpointContent     = endpointContent.replace(/CALLBACK/g, callback)
      fileHelpers.createFile(`${fileDir}/${endpointFile}`, endpointContent)
    }
  }
}