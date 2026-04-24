require('dotenv').config()
const express = require('express');
const userDBConnection = require('./Config/User.Config');
const userRoutes = require('./Routes/user.routes');
const productDBconnection = require('./Config/Product.config');
const productRoutes = require('./Routes/product.routes');
const app = express()
//========middleware==========
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/upload', express.static('upload'));
//========User router======
app.use('/user',userRoutes)
app.use('/product',productRoutes)
//========listion==========
const port = process.env.PORT
app.listen(port, async () => {
    try {
        userDBConnection()
        productDBconnection()
        console.log(`server is live on port no ${port}`);
    } catch (error) {
   process.exit(1)
    }
})




