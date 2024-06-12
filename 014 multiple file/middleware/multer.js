const multer = require("multer");

const abc = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , "uploads");
    },
    filename:function(req,file,cb){
        const newName = Date.now() + file.filename;
        cb(null , newName);
    }
});

const upload = multer({storage:abc});