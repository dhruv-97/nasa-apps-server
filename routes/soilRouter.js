var express = require('express');

var bodyParser = require('body-parser');
var SerialPort = require("serialport");
//var port = new SerialPort("/dev/cu.wchusbserial1410", {
//  baudRate: 9600
//});
var x;
// port.on('open', function(){
//   console.log('Serial Port Opend');
//   port.on('data', function(data){
      
//       x=(data[0]-48);
      
//   });
// });
var soilRouter = express.Router();

soilRouter.use(bodyParser.json());

soilRouter.route('/')
.get(function (req, res, next) {
    res.json({"value":0});
});


module.exports=soilRouter;