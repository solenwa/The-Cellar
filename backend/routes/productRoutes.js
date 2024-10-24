const express = require("express")

const {createProduct} = require('../productController')
const productRouter = express.Router()

productRouter.post('/', createProduct)

module.exports = productRouter