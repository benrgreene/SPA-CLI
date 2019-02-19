# SPA - CLI

This is a CLI tool for helping with development withing the SPA Framework.

## Installing

First, you'll need Node/NPM installed. After that, install the tool using `npm install spa-cli`.

## Commands

There are a few commands withing the CLI tool:

### Create New Framework Instance

**COMMAND UNDER CONSTRUCTION**

Command: `spa-cli install --site-name=<my-site>`

It's possible to download the framework to a a new folder to create a new site instance. 

Requires the following parameters:

* --site-name: this is the folder/site to create and save the framework files in. Is relative to the directory the command is run in.

### Adding Plugins

Command: `spa-cli plugin --name=<plugin>`

Requires the following parameters:

* --name: the name of the plugin directory to create. Will also create a 'setup.php' file **Required**

### Adding API Endpoints

Command: `spa-cli endpoint --plugin=<plugin-name> --file=<api-endpoint-file-name> --endpoint=<my-endpoint> --callback=<callback-function> --pluginDirectory=<my-plugin-directory>`

Parameters:

* --file: the file name for the API endpoint. **Required**
* --endpoint: the endpoint name (everything after `/api/`). **Required**
* --callback: the name of the function to use as the endpoint callback. **Required**
* --plugin: the plugin to add the endpoint to. **Required**
* --pluginDirectory: the directory in the plugin the endpoint goes in. **Optional**, defaults to 'api/'