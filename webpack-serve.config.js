const PORT = parseInt(process.env.PORT || 3000);
const config = require("./webpack.config")[0];
const {
  WebpackPluginServe: Serve
} = require('webpack-plugin-serve');

 const options = {
   static: [process.cwd(), require('path').resolve('./bin')],
   port: PORT
 };

config.plugins = [
  new Serve(options)
];
config.watch = true;

module.exports = config;
