var express = require('express');

var bodyParser = require('body-parser');
var soils= require('../models/soil');
var five = require("johnny-five"),board,myServo;


function runMotor(){
	
	board = new five.Board({port:"/dev/cu.wchusbserial1420",sigint: false,repl: false,lock:false});
    board.on("ready", function() {

	  myServo = new five.Servo(9);	  
	  myServo.sweep();
	  this.wait(5000, function(){

	    myServo.stop();
	    myServo.center();


	  });
  
	});
}

var soilRouter = express.Router();

soilRouter.use(bodyParser.json());

soilRouter.route('/')
.get(function (req, res, next) {
    soils.findById("59048721da861c6a2d94f237",function (err, soil) {
        if (err) next(err);
        res.json(soil);
        });
});
soilRouter.route('/water')
.get(function (req, res, next) {
	runMotor();
	res.send("Done");
});

module.exports=soilRouter;