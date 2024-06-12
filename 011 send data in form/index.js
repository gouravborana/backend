const express = require("express");
const multer = require("multer");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const multExc = multer();

const url = "mongodb://localhost:27017";
const database = "wslc_83_85_94";
const client = new MongoClient(url);

const dbConnection = async()=>{
    await client.connect()
    const db = await client.db(database);
    const collection = await db.collection("users");

    return collection
};

app.post("/insert_data" , multExc.none() , async (req,res)=>{
    try{
        const collection = await dbConnection();

        const response = await collection.insertOne(req.body);

        console.log(req.body);
        res.status(200).json({data:response});
    }
    catch(error){
        res.status(500).json({msg:"internal server error"});
    }
});

app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
});