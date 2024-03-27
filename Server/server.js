const express = require("express");
const app = express();
const router = require("./Router/router");
const connectMongo = require("./db")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api",router)
const Port = 3000;

connectMongo()

app.listen(Port,()=>{
        console.log(`server is running at port ${Port}`);
    });