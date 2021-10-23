const path = require(`path`)

//This helper function helps construct a path to the parent directory
//dirName returns the dir name of a path
//The main module property refers to the main module that started the application in this case app.js
//
module.exports = path.dirname(require.main.filename)
