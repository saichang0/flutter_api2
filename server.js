const express = require('express')
const fs = require('fs')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(cors())

fs.readdirSync('./Routes').map((r)=>app.use('',require('./Routes/'+r)))

app.listen(3000,() => console.log("server is runing on port 3000"))
