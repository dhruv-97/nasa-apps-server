var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var displays= require('../models/display');
var Verify=require('./verify');
var displayRouter = express.Router();

displayRouter.use(bodyParser.json());

displayRouter.route('/')
.get(function (req, res, next) {
    displays.findById("59037a923ef3875aca70c3d5",function (err, display) {
        if (err) next(err);
        res.json(display);
        });
});
displayRouter.route('/:value')
.put(function (req, res, next) {
    displays.findByIdAndUpdate("59037a923ef3875aca70c3d5", {
        $set: {"display":parseInt(req.params.value,10)}
    }, {
        new: true
    }, function (err, display) {
        if (err) next(err);
        res.json(display);
    });
});

module.exports=displayRouter;