const express = require('express');
const router = express.Router();
const searchController = require('../controller/search');


router.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// define the search route
router.get('/search', searchController.searchAction);

module.exports = router;