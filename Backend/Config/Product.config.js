const { configDotenv } = require('dotenv');
const mongoose = require('mongoose')
async function productDBconnection() {
    try {
        const connnect = mongoose.connect(process.env.URI)
        console.log('product database connected successfully');
        
    } catch (error) {
        throw new Error(error);
        
    }
}
module.exports = productDBconnection