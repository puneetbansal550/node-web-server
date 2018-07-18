var express = require('express');

// create a new app here
var app = express();


// Request Handlers
app.get('/',(req, res) =>{
  // res.send('Hello World!!');
res.send({
  name: 'puneet',
  likes: [
    "Movies",
    "Soccer"
  ]
});

});

app.get('/about',(req,res) =>{
  res.send('About Content');
});

app.get('/bad',(req,res) =>{
  res.send({
    ErrorMessge: 'Something went wrong'
  });
});
// Unitl up here nothing is going to happen
//so we are going to listen to http requests

app.listen(3000);
