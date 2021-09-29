const express = require('express');
const bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
// const router = express();
const PORT = 3000
const HOST = '0.0.0.0';

var relay1_control, relay2_control, relay3_control;
var  data;

router.use(bodyParser.json());

const dataAlarm = {
    "name_mcu": "Alarms",
    "sensors": [
        {
            "name": "device1/Relay",
            "control": "false",
        }
        ,
        {
            "name": "device2/Relay",
            "control": "false"
        }
        ,
        {
            "name": "device3/Relay",
            "control": "false"
        }
    ]
}

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

  
router.get('/alarm/pull', function (req, res, next) {
    res.status(200).send(dataAlarm);
});

router.post('/alarm/push', function (req, res, next) {
    const { name_mcu, sensors } = req.body
    // console.log(name_mcu);
    for(let sensor of sensors){
        // console.log(sensor.status)
        if(sensor.name == "device1/Relay"){
            relay1_control = sensor.status;
            // console.log(relay1_control)
            for(let dataSensor of dataAlarm.sensors){
                if(dataSensor.name == "device1/Relay"){
                    dataSensor.control = relay1_control;
                }
            }
        }
    }
    console.log(req.body);
    res.status(200).json({ status: true })
});

router.get('/station/pull', function (req, res, next) {
    res.status(200).send(data);
});

router.post('/station/push', function (req, res, next) {
    data = req.body
    // console.log(data);
    res.status(200).json({ status: true })
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, function () {
    console.log(`app listening on PORT ${PORT}`)
});
