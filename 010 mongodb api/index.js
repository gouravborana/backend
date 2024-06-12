const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());


const url = "mongodb://localhost:27017";
const database = "wslc_83_85_94";
const client = new MongoClient(url);

const dbConnection = async()=>{
    await client.connect()
    const db = await client.db(database);
    const collection = await db.collection("users");

    return collection
};

app.post("/insert_user" , async (req,res)=>{
    try{
        const collection = await dbConnection();

        const response = await collection.insertOne(req.body);

        res.status(200).json({msg:"data inserted successfully" , data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal server error"});
    }
});

app.get("/read_data" , async (req,res)=>{
    try{
        const collection = await dbConnection();

        const response = await collection.find().toArray();

        res.status(200).json({msg:"data fetched successfully" , data:response});
    }
    catch(error){
        res.status(500).json({msg:"internal server error"});
    }
});

app.get("/find_user_by_name/:name" , async (req,res)=>{
    try{
        const collection = await dbConnection();
        const response = await collection.find(req.params).toArray();
        res.status(200).json({msg:"data find successfully" , data:response})
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal server error"});
    }
});

app.put("/update_user/:name" , async (req,res)=>{
    try{
        const collection = await dbConnection();
        const response = await collection.updateOne(
            req.params,
            {
                $set:req.body
            }
        )
        res.status(200).json({msg:"data update successfully" , data:response})
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal server error"});
    }
});

app.delete("/delete_user/:name" , async (req,res)=>{
    try{
        const collection = await dbConnection();
        const response = await collection.deleteOne(req.params);
        res.status(200).json({msg:"data update successfully" , data:response})
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal server error"});
    }
});

app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
});