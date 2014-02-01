var env     = process.env.NODE_ENV || 'production',
		express = require('express'),
		http    = require('http'),
    reload  = require('reload');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});


var staticDir = (env === 'production') ? '/dist' : '/app'; 
app.use(express.static(__dirname + staticDir));


var server = http.createServer(app);
if(env !== 'production'){
	reload(server, app);
}


var port = Number(process.env.PORT || 8000);
server.listen(port, function(){
	console.log('Server is now running on port '+ port);
});
