const express = require("express")
const router = express.Router()

router.get('/category',(req,res) => {
    res.send("hellow category !!!")
})

router.get('/category/:id', (req, res) => {
    try {
        const id = req.params.id
        res.send(`hellow category id ${id} !!!`)
        res.status(200).json({
            message: 'Category added successfully',
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add category'
        })
    }
})

module.exports = router