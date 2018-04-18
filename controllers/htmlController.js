var express = require('express');
var db = require('../models')
var router = express.Router();

router.get('/', function(req, res) {
    db.Article.find({}).sort({_id: 1})
    .then(function(result) {
        res.render('index', {article: result})
    })
    .catch(function(err) {
        res.json(err)
    })
});

router.get('/saved', function(req, res) {
    db.Article.find({ saved: true }).sort({_id: 1})
    .then(function(result) {
        res.render('favorite', {article: result})
    })
    .catch(function(err) {
        res.json(err)
    })
});

router.get('/article', function(req, res) {
    db.Article.find().then(function(result) {
        res.json(result)
    }).catch(function(err) {
        res.json(err)
    })
});

router.get('article/:id', function(req, res) {
    db.Article.findOne({_id: req.params.id }).then(function(result) {
        res.json(result)
    }).catch(function(err) {
        res.json(err)
    })
})

router.post('/article/:id', function(req, res) {
    db.Article.findById(req.params.id, function(err, data) {
        if (data.saved) {
            db.Article.findOneAndUpdate({_id: req.params.id}, {saved:false}).then(function(data) {
                res.redirect('/saved')
            }).catch(function(err) {
                res.json(err)
            })
        } else {
            db.Article.findOneAndUpdate({_id: req.params.id}, {saved:true}).then(function(data) {
                res.send('/')
            }).catch(function(err) {
                res.json(err)
            })
        }
    })
})

module.exports = router