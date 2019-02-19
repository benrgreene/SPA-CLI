# SPA - CLI

This is a CLI tool for helping with development withing the SPA Framework. There are a couple commands that this tools includes:

## Adding Plugins

Requires the following parameters:

* name: the name of the plugin directory to create. Will also create a 'setup.php' file **Required**

## Adding API Endpoints

* file: the file name for the API endpoint. **Required**
* endpoint: the endpoint name (everything after `/api/`). **Required**
* callback: the name of the function to use as the endpoint callback. **Required**
* plugin: the plugin to add the endpoint to. **Required**
* pluginDirectory: the directory in the plugin the endpoint goes in. **Optional**, defaults to 'api/'