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


module.exports=soilRouter;