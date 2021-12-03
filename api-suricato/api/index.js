const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

const jsonParser = bodyParser.json()

app.use(jsonParser)

const routerGet = require('./routes/mcu/alarm/show')
app.use('/mcu/alarm/show', routerGet)

const routerPostSuricato01 = require('./routes/mcu/alarm/dump/suricato-01')
app.use('/mcu/alarm/dump/suricato01', routerPostSuricato01.routerPost)

const routerPostSuricato02 = require('./routes/mcu/alarm/dump/suricato-02')
app.use('/mcu/alarm/dump/suricato02', routerPostSuricato02.routerPost)

const routerDataUpdate = require('./routes/mcu/alarm/data/dataAlarm')
app.use('/mcu/alarm/data-updated', routerDataUpdate.routerUpdated)

app.listen(config.get('api.port'), () => console.log('Tá tudo batendo!'))