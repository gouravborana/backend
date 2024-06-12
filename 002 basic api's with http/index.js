const http = require("http");
const url = require("url")

const server = (req,res) => {

    // console.log(req.url);

    const param =  url.parse(req.url , true);

    // console.log(param)

    if (req.method == "GET" && param.href == "/home") {
        res.end("Get Called (Home)")
    }
    else if (req.method == "POST"){
        res.end("Post Called")
    }
    else if (req.method == "GET" && param.href == "/about"){
        res.end("Get Called (About)")
    }
}

http.createServer(server).listen(4500);