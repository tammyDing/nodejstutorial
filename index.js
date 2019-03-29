const express = require('express')
const app = express()
app.set('view engine', 'jade')
app.get('/', function(req, res){
  console.log(req, res)
})
const server = app.listen(3001, function () {
  console.log('listening')
})
