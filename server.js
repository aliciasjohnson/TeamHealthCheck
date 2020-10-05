var http = require('http');
var fs = require('fs');

var connect = require('connect');

var app = connect();

function homePage(request, response){
	console.log("User requested home page")
};

function myHealth(request, response){
	console.log("User requested My Health Page")
};

function about(request, response){
	console.log("User requested About Page")
};

app.use('/', homePage);
app.use('/index', homePage);
app.use('/my_health', myHealth);
app.use('/about', about);

http.createServer(app).listen(8080);
console.log("Server is now running...");


//old code(
//404 response
//function send404Response(response){
//	response.writeHead(404, {"Content-Type": "text/plain"});
//	response.write("Error 404: Page Not Found");
//	response.end();
//}
//Handle a user request. Send to home page
//function onRequest(request, response){
//	if(request.method == 'GET' && request.url == '/'){
//		response.writeHead(200, {"Content-Type": "text/html"});
//		fs.createReadStream("index.html").pipe(response);
//	}else{
//		send404Response(response)
//	}
//		
//}
//
//http.createServer(onRequest).listen(8080);
//console.log("Server is now running...");
//
//)





