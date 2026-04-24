const { addProductApi } = require('../Controller/Product.controller')
const upload = require('../Config/Multer.config')
const productRoutes = require('express').Router()
//=======end point =======
productRoutes.post('/',upload.single('productImage'),addProductApi)
module.exports = productRoutes