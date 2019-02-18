# SPA - CLI

This is a CLI tool for helping with development withing the SPA Framework. There are a couple commands that this tools includes:

## Adding Plugins

Requires the following parameters:

* name: the name of the plugin directory to create. Will also create a 'setup.php' file **Required**

## Adding API Endpoints

* file: the file name for the API endpoint. **Required**
* endpoint: the endpoint name (everything after `/api/`). **Required**
* callback: the name of the function to use as the endpoint callback. **Required**
* add-hook: whether to add a 'load-api' hook to the setup file. **Optional**, defaults to false.