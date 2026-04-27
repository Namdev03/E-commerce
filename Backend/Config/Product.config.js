const mongoose = require('mongoose')
async function productDBconnection() {
    try {
        const connnect = await mongoose.connect(process.env.URI)
        console.log('product database connected successfully');
        
    } catch (error) {
        throw new Error(error);
        
    }
}
module.exports = productDBconnection