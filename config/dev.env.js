var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_URL: '"https://138.68.234.244:8080"',
  API_URL:  '"https://robertkohut.com/api/v2"'
})
