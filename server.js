const express = require('express')
const fs = require('fs')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

fs.readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)))

app.listen(3000,() => console.log("server is runing on port 3000"))
