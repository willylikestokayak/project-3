var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var { Twet } = require('../models/user');

router.post('/user', function(req, res, next) {
    Twet.find({ userId: req.body.user }, function(err, tweets){
		if (err) return console.log(err);
        res.send(tweets)
        console.log("req.body.user" + req.body.user)
    });
});

router.post('/', function(req, res, next) {
    Twet.create({
        userId: req.body.user.id,
        handle: req.body.handle
    }, function(err, user) {
        if (err) {
            res.send(err.message)
        } else {
            req.flash('success', 'Welcome to your new account! You are logged in.');
        }
    });
});

module.exports = router;