const express = require("express")
const router = express.Router()

router.get('/product',(req,res) => {
    res.send("hellow product !!!")
})

router.get('/product/:id',(req,res) => {
    const id = this.param.id
    res.send(`hellow product id ${id} !!!`)
})

module.exports = router