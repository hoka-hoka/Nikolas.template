const wepackbase = require("./webpack.config");
const { merge } = require("webpack-merge");
const pug = require("../webpack/pug");
const babel = require("../webpack/babel-loader");
const fileloader = require("../webpack/fileloader");
const css = require("../webpack/css-loader");

module.exports = merge(wepackbase(), pug(), babel(), fileloader(), css());
