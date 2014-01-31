var express = require('express'),
		http    = require('http'),
    reload  = require('reload');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

app.use(express.static(__dirname + '/app'));

var server = http.createServer(app);
reload(server, app);

var port = Number(process.env.PORT || 5000);
console.log(process.env.PORT);
server.listen(port, function(){
	console.log('Server is now running on port '+ port);
});
