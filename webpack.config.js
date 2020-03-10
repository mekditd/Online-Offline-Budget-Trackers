const config = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.m?js$/,
      // Exclude node modules bc it's already being done
      exclude: /(node_modules)/,
      use: {
        // Babel-loader converts script from ES6 to ES5 for older browser support
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  }
};
module.exports = config;