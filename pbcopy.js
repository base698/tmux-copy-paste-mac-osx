var http = require('http');
var spawn = require('child_process').spawn
var port = 5482;

var post = function(req,res) {
  var pbcopy = spawn('pbcopy',[]);
  req.pipe(pbcopy.stdin);
  pbcopy.stdin.on('data',function(buf) {
		console.log(buf.toString())
	});
  console.log('copied');
  res.end("done.");
}

var get = function(req,res) {
  var pbcopy = spawn('pbpaste',[]);
  pbcopy.stdout.pipe(res);
}

var methods = {
	GET: get,
	POST: post
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  methods[req.method](req,res);

}).listen(port, '127.0.0.1');

console.log('listening on port: ' + port);
