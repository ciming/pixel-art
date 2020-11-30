
const path = require('path')
const {alias} = require('react-app-rewire-alias')
const { override, addWebpackAlias, babelInclude, addBabelPlugin} = require('customize-cra')



module.exports = override(
  addWebpackAlias({
    "@store": path.resolve("src/redux"),
    "@components": path.resolve("src/Components"),
    "@utils": path.resolve("src/Utils")
  }),
  addBabelPlugin(["@babel/plugin-proposal-decorators", { "legacy": true }]),
  babelInclude([
    path.resolve("src"), // make sure you link your own source
    path.resolve("node_modules/react-global-hook"),
    path.resolve("node_modules/react-principal")
  ])
)