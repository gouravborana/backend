const express = require("express");

const app = express();

const token = "n1551";

const checkToken = (req,res,next) => {
    const userToken = req.params.val;

    if(!userToken){
        res.status(400).json({msg : "Please add Token"});
    } else if (userToken != token) {
        res.status(401).json({msg : "Invalid Token"});        
    } else {
        next();
    }
}

app.use(checkToken);

app.get("/user/:val?", (req,res)=>{
    res.status(200).json({msg : "API fetched successfully"});
});

app.get("/admin/:val?", (req,res)=>{
    res.status(200).json({msg : "API fetched successfully"});
});

app.get("/client/:val?", (req,res)=>{
    res.status(200).json({msg : "API fetched successfully"});
});

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});