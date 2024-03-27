const mongoose = require("mongoose");

const URI = 'mongodb+srv://rrrsahu:123@rani.lzszynk.mongodb.net/Rani?retryWrites=true&w=majority'
// 'mongodb+srv://ccccsahu:Charu%40281971@cluster0.wnomgof.mongodb.net/mernStackProject?retryWrites=true&w=majority'

const connectMongo = async () =>{
    try{
    await mongoose.connect(URI);
    console.log("connection stablished successfully")
    }
    catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports=connectMongo;
