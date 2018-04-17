var express = require('express');
var db = require('../models')
var router = express.Router();

router.get('/', function(req, res) {
    db.Article.find({})
    .then(function(result) {
        res.render('index', {article: result})
        console.log(result)
    })
    .catch(function(err) {
        res.json(err)
    })
});

router.get('/saved', function(req, res) {
    res.render('favorite')
});

module.exports = router