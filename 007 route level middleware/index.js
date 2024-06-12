const express = require("express");

const app = express();

const router1 = express.Router();
const router2 = express.Router();

const m1 = (req,res,next)=>{
    console.log("M1 Called");
    next();
};

const m2 = (req,res,next)=>{
    console.log("M2 Called");
    next();
};

router1.use(m1);
router2.use(m2);

app.get("/" , (req,res)=>{
    res.send("Hello with app (Get)");
});

router1.get("/" , (req,res)=>{
    res.send("Hello with Router 1 (Get)");
});

router2.get("/" , (req,res)=>{
    res.send("Hello with Router 2 (Get)");
});

app.post("/" , (req,res)=>{
    res.send("Hello with app (Post)");
});

router1.post("/" , (req,res)=>{
    res.send("Hello with Router 1 (Post)");
});

router2.post("/" , (req,res)=>{
    res.send("Hello with Router 2 (Post)");
});


app.use("/route1" , router1);
app.use("/route2" , router2);


app.listen(4000 , ()=>{
    console.log("server is running on port 4000")
});