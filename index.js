var http = require('http');

const PORT = 8888;

function requestHandler(req, res) {
	res.end(`Hello Me ${process.platform}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
	console.log(`${process.env.NODE_ENV} server started and listening on port: ${PORT}. CTRL-C to exit.`);
});
