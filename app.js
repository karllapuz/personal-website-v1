var express = require("express"),
	app		= express();

// SET PORT
var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES
app.get("/", function(req, res){
	res.render("landing");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/projects", function(req, res){
	res.render("projects");
});

// LISTENER 
app.listen(port, function(){
	console.log("Karl's Website is running!");
});