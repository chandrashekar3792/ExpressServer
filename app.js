var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 
var app = express();

// Set Static Path

app.use(express.static(path.join(__dirname,'public'))) ; 

/*app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/about',function(req,res){
	res.sendFile(path.join(__dirname,'about.html'));
});
app.get('/services',function(req,res){
	res.sendFile(path.join(__dirname,'services.html'));
});
*/

//Middleware needed for bodyPerser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/people',function(req,res){
	var people = [{
		first_name:"Chandrashekar",
		last_name:"S",
		age:24,
		gender:"male"
	},
	{
		first_name:"Prasad",
		last_name:"US",
		age:23,
		gender:"male"
	},
	{
		first_name:"Pradeep",
		last_name:"D",
		age:25,
		gender:"female"
	}
	];
	res.json(people);
});

// Download some file
app.get('/download',function(req,res){
	res.download(path.join(__dirname,'/downloads/sample.pdf'));
});

// Redirect 
app.get('/about',function(req,res){
	res.redirect('/about.html');
});
app.get('/services',function(req,res){
	res.redirect('/services.html');
});
app.get('/faq',function(req,res){
	res.redirect('/faq.html');
});

// Post reqest
app.post('/subscribe',function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	console.log(name+' Has subscribed with '+email);
});
app.listen(3000,function(){
	console.log('App is started on port 3000');
});