require('dotenv').config()
const express = require('express');
const userDBConnection = require('./Config/User.Config');
const userRoutes = require('./Routes/user.routes');
const app = express()
//========middleware==========
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//========User router======
app.use('/user',userRoutes)
//========listion==========
const port = process.env.PORT
app.listen(port, async () => {
    try {
        userDBConnection()
        console.log(`server is live on port no ${port}`);
    } catch (error) {
   process.exit(1)
    }
})




