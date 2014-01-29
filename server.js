var express = require('express'),
		http    = require('http'),
    reload  = require('reload');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

app.use(express.static(__dirname + '/app'));
app.use("/vendor", express.static(__dirname + '/vendor'));

var server = http.createServer(app);
reload(server, app);
 
server.listen(8080, function(){
	console.log('Server is now running on port 8080')
});
