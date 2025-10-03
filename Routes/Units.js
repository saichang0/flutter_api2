const express = require("express")
const router = express.Router()

// GET /api/units
router.get('/unit', (req, res) => {
    res.send("Hello units !!!")
})

// GET /api/units/:id
router.get('/unit/:id', (req, res) => {
    const id = req.params.id
    res.send(`Hello units id ${id} !!!`)
})

router.post('/unit/:id',(req,res) => {
    try{
        const id = req.params.id
        res.send(`hellow unit id ${id} !!!`)
        res.status(200).json({
            message:"Unit added successfully"
        })

    }catch{
        res.status(500).json({
            message:"Unit added failed"
        })
    }
})

module.exports = router