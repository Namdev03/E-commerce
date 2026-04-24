const { configDotenv } = require("dotenv");
const userSchema = require("../Model/user.model");
const bcrypt = require('bcrypt')
async function userRegister(req, res) {
    try {
        const payload = req.body;
        const userExist = await userSchema.findOne({ email: payload.email })
        if (userExist) {
            return res.status(409).json({ message: "user alredy Registered" })
        }
        const hashPassword = await bcrypt.hash(payload.password, 10)
        const register = await userSchema.create({
            ...payload,
            password: hashPassword
        })
        const toSend = {
            name: payload.name,
            email: payload.email
        }
        res.status(201).json({ message: "Register successfully", Data: toSend })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function loginApi(req,res) {
    try {
        const payload = req.body;
        const userExist = await userSchema.findOne({ email: payload.email })
        if (!userExist) {
            return res.status(404).json({ message: "user not Registered" })
        }
        const comoarePassword = await bcrypt.compare(payload.password,userExist.password)
        const toSend = {
            id: userExist._id,
            name: userExist.name,
            email: userExist.email
        }
        res.status(200).json({ message: "Login successfully", Data: toSend })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { userRegister,loginApi }