var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser')
var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_db');
var personSchema = mongoose.Schema({
   username: String,
   password: String,
   email: String,
   phone:Number
});
var Person = mongoose.model("Person", personSchema);
app.use(cors({origin:'*'}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 
passport.deserializeUser(function(id, done) {
  Person.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username)
    console.log(password)
    Person.findOne({ 
      username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/hello1', 
  passport.authenticate('local', { successRedirect:'/Signup',
    failureRedirect:'/Login'}
  )
);
app.get('/Login', (req, res) => {
  res.send(false);
}); 
app.get('/Signup', (req, res) => {
  res.send(true);
}); 


app.post('/hello', (req, res) => {
	var data = new Person({
		username:req.body.data.username,
		password:req.body.data.password,
		email:req.body.data.email,
		phone:req.body.data.phone
	})
	data.save()
	.then(data => {
		console.log(data);
		res.json(data);
	})	
});	
app.listen(3030,function(){
	console.log("server is running...")
});



