var express = require('express');
var router = express.Router();

router.get('/chengshe', function(req, res, next) {
    res.render('chengshe');
});

router.get('/cookieSession', function(req, res, next) {
    res.render('cookieSession');
});

router.get('/database', function(req, res, next) {
    res.render('database');
});

router.get('/js', function(req, res, next) {
    res.render('js');
});

router.get('/memcached', function(req, res, next) {
    res.render('memcached');
});

router.get('/mongodb', function(req, res, next) {
    res.render('mongodb');
});

router.get('/redis', function(req, res, next) {
    res.render('redis');
});

router.get('/tips', function(req, res, next) {
    res.render('tips');
})

module.exports = router;