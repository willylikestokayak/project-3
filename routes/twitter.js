var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var { Twet } = require('../models/user');

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