var express = require('express');

var bodyParser = require('body-parser');
var soils= require('../models/soil');
var soilRouter = express.Router();

soilRouter.use(bodyParser.json());

soilRouter.route('/')
.get(function (req, res, next) {
    soils.findById("59048721da861c6a2d94f237",function (err, soil) {
        if (err) next(err);
        res.json(soil);
        });
});
soilRouter.route('/activate')
.get(function (req, res, next) {
	soils.findByIdAndUpdate("59048721da861c6a2d94f237", {
        $set: {"motor":true}
        }, {
            new: true
        }, function (err, soil) {
            if (err) next(err);
            console.log(soil);
        });
	res.send("Done");
});
soilRouter.route('/deactivate')
.get(function (req, res, next) {
	soils.findByIdAndUpdate("59048721da861c6a2d94f237", {
        $set: {"motor":false}
        }, {
            new: true
        }, function (err, soil) {
            if (err) next(err);
            console.log(soil);
        });
	res.send("Done");
});

module.exports=soilRouter;