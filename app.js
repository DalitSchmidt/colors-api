const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/colors', require('./routes/colors'))
app.use('/api/list', require('./routes/list'))

app.use((req, res) => {
    res.status(404).json({error: `Invalid route '${req.path}'`})
})

module.exports = app