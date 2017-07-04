var express = require("express");
var path = require("path");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'public/')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/', 'index.html'));
});

app.listen(80, function () {
    console.log("Listening on port 80!");
});