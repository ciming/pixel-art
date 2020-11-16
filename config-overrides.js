
const path = require('path')
const {alias} = require('react-app-rewire-alias')
const { override, addWebpackAlias, babelInclude} = require('customize-cra')



module.exports = override(
  addWebpackAlias({
    "@store": path.resolve("src/store")
  }),
  babelInclude([
    path.resolve("src"), // make sure you link your own source
    path.resolve("node_modules/react-global-hook"),
    path.resolve("node_modules/react-principal")
  ])
)