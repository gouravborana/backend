const express = require("express");
const app = express();

const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const database = async()=>{
    await client.connect();
    const db = await client.db("test_database_temp");

    return db;
}

const insertData = async()=>{
    const db = await database();

    const adminCollection = await db.collection("admins");

    const response = await adminCollection.insertOne({
        name:"adminName1",
        password:"user@123"
    });
    console.log(response);
};

// insertData();

const readData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");

        const response = await collection.find().toArray();
        console.log(response);

    } catch(error) {
        console.log(error);
    }
};

// readData();

const deleteData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");

        const response = await collection.deleteOne({
            name: 'userId1'
        });
        console.log(response);

    } catch(error) {
        console.log(error);
    }
};

// deleteData();

const updateData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");

        const response = await collection.updateOne({name: 'userId1'} ,
            {$set:{name:"userId007"}}
        );
        console.log(response);

    } catch(error) {
        console.log(error);
    }
};

// updateData();

app.use(express.json());

app.listen(4000 , ()=>{
    console.log("Server is running on Port 4000");
});