var express = require('express')
var app = express()

// 路由效果
app.get('/', function (req, res) {
    res.send('root!!!!')
})

app.get('/coolfe', function (req, res) {
    res.send('Hello Coolfe')
})

app.listen(3000)