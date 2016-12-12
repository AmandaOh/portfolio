var express = require('express')
var path = require('path')
var dotenv = require('dotenv')
var app = express()

app.use(express.static('public'))

console.log('the environment is on ' + process.env.NODE_ENV)

// app.get('/', function (req,res) {
//   res.render('index')
// })

app.listen(process.env.PORT || 3000)
