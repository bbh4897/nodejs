const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    if(req.method == "GET"){
        if(req.url == "/")
            res.write("index");
        else if (req.url == "/iletisim")
            res.write("iletisim");
        else
            res.write("Yanlış İstek");
    }
    res.end()
});

server.listen(3002);
