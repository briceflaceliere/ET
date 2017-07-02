"use strict";
const express = require('express');
const router = require('./src/http/router');
const app = express();

app.use('/', router);

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});