const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nikhilmandoranm:xZfbLjJ9gebqkTp0@nikhil.biwvpw8.mongodb.net/file_uploadation_temp?retryWrites=true&w=majority&appName=nikhil")

.then(()=>{
    console.log("database connected");
})
 .catch((error)=>{
    console.log(error);
 })