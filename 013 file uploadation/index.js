const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("./models/products");

mongoose.connect("mongodb+srv://nikhilmandoranm:xZfbLjJ9gebqkTp0@nikhil.biwvpw8.mongodb.net/file_uploadation_temp?retryWrites=true&w=majority&appName=nikhil")
.then(()=>{
    // console.log("database connected");
})
.catch((error)=>{
    console.log(error);
})

const app = express();

const multerStorage = multer.diskStorage({
    destination:function(req,file,next){
        next(null , "uploads");
    },
    filename:function(req,file,next){
        const splitArray = file.originalname.split(".");
        const fileExtention = splitArray[splitArray.length - 1];
        // console.log(fileExtention);
        next(null , Date.now() + "." + fileExtention);
    }
});

const upload = multer({storage:multerStorage}).single("thumbnail");

app.use(express.json());
app.use("/uploads" , express.static("uploads"));

app.post("/insert_single_file" , upload , async (req,res)=>{
    try {
        const { name } = req.body

        // console.log(req.file.filename);

        const productData = new Product({
            name,
            thumbnail:req.file.filename
        });

        const response = await productData.save();

        res.status(200).json({msg:"data insert successfully" , data:response});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({msg:"internal server error"})
    }
});

app.get("/read_data" , async(req,res)=>{
    try {
        const response = await Product.find();

        const dataWithPath = response.map((data)=>{
            data.thumbnail = `${req.protocol}://${req.get("host")}/uploads/${data.thumbnail}`;
            return data;
        });

        console.log(dataWithPath)

        res.status(200).json({msg:"data fetched successfully" , data:dataWithPath});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({msg:"data can't read"});
    }

    console.log(`${req.protocol}://${req.get("host")}/uploads`);
});

app.listen(4000 , ()=>{
    console.log("server is running on port 4000");
});