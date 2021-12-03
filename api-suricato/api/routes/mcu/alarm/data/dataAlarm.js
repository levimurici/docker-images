const {dataSuricato01} = require('../dump/suricato-01')
const {dataSuricato02} = require('../dump/suricato-02')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const routerUpdated = require('express').Router()

var control01, control02;

var dataAlarm = {
    "alarms" : {
        "suricato-01": 
        {
            "device": "device1/Alarm1",
            "control": control01
        },

        "suricato-02": 
        {
            "device": "device2/Alarm2",
            "control": control02
        } 
    }
}

routerUpdated.get('/', jsonParser, (req, res) => {
    console.log(dataSuricato01)
    console.log(dataSuricato02)

    dataAlarm.alarms["suricato-01"]["control"] = dataSuricato01.suricato01.data.control
    dataAlarm.alarms["suricato-02"]["control"] = dataSuricato02.suricato02.data.control
    res.status(200).send(dataAlarm)
});

module.exports = {
    routerUpdated, 
    dataAlarm
}