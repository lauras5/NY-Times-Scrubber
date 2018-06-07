var Router = require('express').Router();
var db = require('../models');

// gets all articles
Router.get('/api/articles', (req, res) => {
    db.Article.find({})
        .then(r => {
            res.json(r)
        })
        .catch(e => {
            console.log(e)
        });
});

// posts articles
Router.post('/api/articles', (req, res) => {
    // req.body
    db.Article.create({
        title: req.body.title,
        date: req.body.body,
        url: req.body.url
    })
        .then(r => {
            res.json(r)
        })
        .catch(e => {
            console.log(e)
        });
});

// gets all saved articles
Router.get('/api/articles', (req, res) => {
    db.Article.find(
        { saved: true }
    )
        .then(r => {
            console.log(r)
        })
        .catch(e => {
            console.log(e)
        })
})



Router.delete('/api/articles/:id', (req, res) => {
    db.Article.remove({
        _id: req.params.id
    })
    .then(r => {
        res.json(r)
    })
    .catch(e => {
        console.log(e)
    })
})

module.exports = Router;