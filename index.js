const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/shahvez', (req, res) => {
    res.send("You are reached at the server, and now this message is response from server")
})

app.get('/login',(req, res) => {
    res.send('<h1>Hello</h1>/n<input type="text"></input>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})