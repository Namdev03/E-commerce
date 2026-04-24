const userRoutes = require('express').Router()
const {userRegister, loginApi} = require('../Controller/user.controller')

//=======endpoints=========
userRoutes.post('/',userRegister)
userRoutes.post('/login',loginApi)

module.exports = userRoutes