require('dotenv').config();
const express = require('express');
const app = express();
const connectDB=require("./db/connect");
const PORT = 5000;

const products_routes=require('./routes/products')
app.get('/',(req,res) => {
    res.send("This is live now")
});


//middleware or to set router

app.use('/api/products',products_routes)
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
        console.log(`${PORT} this is connected now`); 
        });

    }
    catch (error){
        console.log(error);
    }
}

start();