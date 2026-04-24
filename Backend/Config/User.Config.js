const { configDotenv } = require('dotenv');
const mongoose = require('mongoose')
 const userDBConnection = async(params) =>{
    try {
        const connect = mongoose.connect(process.env.URI)
        console.log('user database connected successfully');
        
    } catch (error) {
        throw new Error(error);
        
    }
 }
module.exports = userDBConnection