const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/newmongoose")

.then(()=>
    console.log("database connected")
) 
.catch(()=>{
    console.log("error")
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:Number,
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const User = mongoose.model("users" , userSchema);

const app = express();
app.use(express.json());

app.post("/insert_user" , async(req,res)=>{
    try{
        const data = req.body;
        const userdata = new User(data);

        const response = await userdata.save();

        res.status(200).json({msg:"data submit" , data : response});
    }
    catch (error) {
        console.log(error);

        if (error.code === 11000) return res.status(400).json({msg:"email is already registered"});

        if (error.errors.mobile) return res.status(402).json({msg:"invalid mobile number"});

        res.status(500).json({msg : "internal server error"});
    }
});

app.get("/read_data" , async(req,res)=>{
    const response = await User.find();
    res.status(200).json({msg:"data fetch successfully" , data:response})
});

app.get("/update_data" , async(req,res)=>{
    const response = await User.updateOne({name:"Shayne"},
        {email:"Liliane.Olson@gmail.com"}
    );
    res.status(200).json({msg:"data fetch successfully" , data:response})
});

app.get("/delete_data" , async(req,res)=>{
    const response = await User.deleteOne({name:"nikhil2"});
    res.status(200).json({msg:"data delete successfully" , data:response})
});



app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
});