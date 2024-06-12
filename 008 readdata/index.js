const express = require("express");
const app = express();
const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
client.connect();

app.use(express.json());

app.get("/" , (req,res)=>{
    try{
        res.status(200).json({msg : "Welcome to api"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Internal Server Error"});
    }
});

app.post("/adddtata" , (req , res)=>{
    try{
        console.log(req.body);
        res.status(200).json({msg : "okay"});
    } catch (error) {
        res.status(500).json({msg : "Internal Server Error"})
    }
});

app.listen(4000 , ()=>{
    console.log("Server is running on Port 4000");
});