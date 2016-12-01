var http = require("http");

var server = http.createServer();
server.on("request", function(req, res){
  var urtDara = url.parse(req.url, true);
  console.log(urlData);
  var date = new Date();
  var current_hour = date.getHours();
  var current_min = date.getMinutes();
  res.end(JSON.stringify(current_hour));


});
server.listen(3000);
