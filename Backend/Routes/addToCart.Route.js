const addToCartRoute = require('express').Router()
const {addToCartApi }= require('../Controller/addToCart.controller')
//========end point ========
addToCartRoute.post('/',addToCartApi)
module.exports = addToCartRoute