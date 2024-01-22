const mongoose=require('mongoose')

const connectDB=(uri)=>{
    console.log("connected");
    return mongoose.connect(uri,{
        //userNewUrlParser: true,
        //useUnifiedTopology: true,
    });
};

module.exports=connectDB;