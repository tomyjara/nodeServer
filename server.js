var http = require("http");

var server = http.createServer();
server.on("request", function(req, res){

  var filePath = false;
  if(req.url == '/'){
    filePath = "public/index.html";

  }else{
    filePath = "public" + req.url;
  }

  var absPath = "./" + filePath;
  serverWorking(res, absPath);


});
server.listen(process.env.PORT || 3000);
