const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
const htmlpath = path.join(__dirname,"public");
app.use(express.static(htmlpath))

app.get("/" , (req,res)=>{
    res.sendFile(`${htmlpath}/index.html`);
});

app.get("/about_us" , (req,res)=>{
    res.sendFile(`${htmlpath}/about_us.html`);
});

app.get("/contact_us" , (req,res)=>{
    res.sendFile(`${htmlpath}/contact_us.html`);
});

app.get("/course" , (req,res)=>{
    res.sendFile(`${htmlpath}/course.html`);
});

app.get("/enquiry" , (req,res)=>{
    res.sendFile(`${htmlpath}/enquiry.html`);
});

app.get("/gallery" , (req,res)=>{
    res.sendFile(`${htmlpath}/gallery.html`);
});

app.get('/*',(req,res)=>{
    res.sendFile(`${htmlpath}/404error.html`);
});






app.listen(process.env.PORT);