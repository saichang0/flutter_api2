const express = require("express")
const router = express.Router()

router.get('/category',(req,res) => {
    res.send("hellow category !!!")
})

router.get('/category/:id',(req,res) => {
    const id = this.param.id
    res.send(`hellow category id ${id} !!!`)
})

module.exports = router