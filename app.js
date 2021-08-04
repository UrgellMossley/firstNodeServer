const http = require(`http`);

function rqListnr(req,res){

}

const server = http.createServer((req,res)=>{
    console.log(req)
});

server.listen(3000);