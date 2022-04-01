const path = require("path");

module.exports = {
  mode: "development", 
  entry: "./src/index.js", // entry file path
  output: { // object
      path: path.resolve(__dirname, "dist"), // absolute path (folder)
      filename: "main.js", // output file path
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
  watch: true // when we run webpack, its going to watch our file and its going to bundle up everything at each update
};

// add "build": "webpack" to scripts, so that everytime we run the script it'll
// run the webpack command according to this configuration 