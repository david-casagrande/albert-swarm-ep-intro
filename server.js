var env     = process.env.NODE_ENV || 'production',
		express = require('express'),
		http    = require('http'),
    reload  = require('reload');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

if(env === 'production'){
	app.use(express.static(__dirname + '/dist'));
}
else {
	app.use(express.static(__dirname + '/app'));
}

var server = http.createServer(app);

if(env !== 'production'){
	reload(server, app);
}

var port = Number(process.env.PORT || 8000);
console.log(app.settings.env);
server.listen(port, function(){
	console.log('Server is now running on port '+ port);
});
