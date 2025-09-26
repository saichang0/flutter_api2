const express = require("express")
const router = express.Router()

// GET /api/units
router.get('/', (req, res) => {
    res.send("Hello units !!!")
})

// GET /api/units/:id
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Hello units id ${id} !!!`)
})

module.exports = router