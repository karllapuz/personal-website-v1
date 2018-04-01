var express = require("express"),
	app		= express();

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
app.listen(3000, function(){
	console.log("Karl's Website has started!");
});