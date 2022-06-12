const path = require("path");

module.exports = {
  entry: "./web/dist/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "web", "dist"),
  },
};
