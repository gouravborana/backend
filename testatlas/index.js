const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nikhilmandoranm:xZfbLjJ9gebqkTp0@nikhil.biwvpw8.mongodb.net/test_atlas?retryWrites=true&w=majority&appName=nikhil")

.then(()=>{
    console.log("DataBase Connect Successfully")
});

const userSchema = new mongoose.Schema({
    name:String,
    email:String
});

const User = mongoose.model("users" , userSchema);

const addUser = async()=>{
    const data = new User({
        name:"Test",
        email:"test@test.com"
    });

    const response = await data.save();

    console.log(response);
}

// addUser();

const readData = async()=>{
    const response = await User.find();
    console.log(response);
}

// readData();