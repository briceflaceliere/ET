var express = require("express");
var path = require("path");

const app = express();
const devMode = process.env.APP_MODE == 'dev';
const PUBLIC_DIR = path.resolve(__dirname, 'public/');
const HTML_FILE = path.resolve(PUBLIC_DIR, "index.html");


if (devMode) {
    console.log('----- DEV MODE -----')
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config");

    var compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        contentBase: PUBLIC_DIR,
        publicPath: '/',
        public: 'localhost:8083',
        host: '0.0.0.0',
        port: 80
    }));
}

// Serve static assets
app.use(express.static(PUBLIC_DIR));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});



app.listen(process.env.PORT || 80, function () {
    console.log(`Listening on port ${process.env.PORT || 80}!`);
});