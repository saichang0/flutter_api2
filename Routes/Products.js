const express = require("express")
const router = express.Router()
const { read, listData, create, update, delete: deleteProduct } = require("../controller/products_controller")

router.get('/list_product', listData)

router.get('/read_product/:id',read)

router.post('/create_product',create)

router.put('/update_product/:id',update)

router.delete('/delete_product/:id', deleteProduct)

module.exports = router