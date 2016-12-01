var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var server = http.createServer();


function send404(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}
function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}

server.on("request", function(req,res){
  //console.log(req);
  //var date = new Date();
  //var urlData = url.parse(req.url, true);

  //res.end(JSON.stringify(urlData));

  //res.end(JSON.stringify(date));
  var filePath = false;

  if (req.url == '/') {
    filePath = "public/index.html";
  } else {
    filePath = "public" + req.url;
  }

  var absPath = "./" + filePath;
  serverWorking(res, absPath);

});

server.listen(process.env.PORT || 3000);
