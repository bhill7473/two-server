var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {

 
  response.end("You are very good" + request.url);
}
function handleRequestTwo(request, response) {

 
  response.end("You are very bad " + request.url);
}


var server = http.createServer(handleRequest);


var servertwo = http.createServer(handleRequestTwo);


server.listen(PORT1, function() {

  // 
  console.log("Server listening on: http://localhost:" + PORT1);
});

servertwo.listen(PORT2, function() {


  console.log("Server listening on: http://localhost:" + PORT2);
});