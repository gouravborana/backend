const express = require("express");

const app = express();

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

const m1 = (req,res,next)=>{
    console.log("M1 Called");
    next();
};

const m2 = (req,res,next)=>{
    console.log("M2 Called");
    next();
};

const m3 = (req,res,next)=>{
    console.log("M3 Called");
    next();
};

router1.use(m1);
router2.use(m2);
router3.use(m3);

// App

app.get("/" , (req,res)=>{
    res.send("Hello with app (Get)");
});

app.post("/" , (req,res)=>{
    res.send("Hello with app (Post)");
});

app.put("/" , (req,res)=>{
    res.send("Hello with app (Put)");
});

app.patch("/" , (req,res)=>{
    res.send("Hello with app (Patch)");
});

app.delete("/" , (req,res)=>{
    res.send("Hello with app (Delete)");
});


// Router 1

router1.get("/" , (req,res)=>{
    res.send("Hello with Router 1 (Get)");
});

router1.post("/" , (req,res)=>{
    res.send("Hello with Router 1 (Post)");
});

router1.put("/" , (req,res)=>{
    res.send("Hello with Router 1 (Put)");
});

router1.patch("/" , (req,res)=>{
    res.send("Hello with Router 1 (Patch)");
});

router1.delete("/" , (req,res)=>{
    res.send("Hello with Router 1 (Delete)");
});

// Router 2

router2.get("/" , (req,res)=>{
    res.send("Hello with Router 2 (Get)");
});

router2.post("/" , (req,res)=>{
    res.send("Hello with Router 2 (Post)");
});

router2.put("/" , (req,res)=>{
    res.send("Hello with Router 2 (Put)");
});

router2.patch("/" , (req,res)=>{
    res.send("Hello with Router 2 (Patch)");
});

router2.delete("/" , (req,res)=>{
    res.send("Hello with Router 2 (Delete)");
});

// Router 3

router3.get("/" , (req,res)=>{
    res.send("Hello with Router 3 (Get)");
});

router3.post("/" , (req,res)=>{
    res.send("Hello with Router 3 (Post)");
});

router3.put("/" , (req,res)=>{
    res.send("Hello with Router 3 (Put)");
});

router3.patch("/" , (req,res)=>{
    res.send("Hello with Router 3 (Patch)");
});

router3.delete("/" , (req,res)=>{
    res.send("Hello with Router 3 (Delete)");
});


app.use("/route1" , router1);
app.use("/route2" , router2);
app.use("/route3" , router3);


app.listen(4000 , ()=>{
    console.log("server is running on port 4000")
});