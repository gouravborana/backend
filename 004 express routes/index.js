const express = require("express");

const app = express();

app.get("/" , (req,res)=>{
    res.send("Get Called");
});

app.get("/home" , (req,res)=>{
    res.send("Home with Get");
});

app.post("/" , (req,res)=>{
    res.send("Post Called");
});

app.post("/home" , (req,res)=>{
    res.send("Home with Post");
});

app.listen(4000, ()=>{
    console.log("server is running on Port 4000");
});