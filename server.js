const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

// registerPartials is used to set path to partial templete location.
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine',hbs);

// hbs register helper register or create a function for templates to use.
hbs.registerHelper('getCurrentYear',() =>{
  return new Date().getFullYear();
});

// function to take argument from registerHelper and convent to upper case string.
hbs.registerHelper('screamIt',(text) =>{
  return text.toUpperCase();
});

app.get('/',(req, res) =>{
    res.render('home.hbs',{
      pageTitle:'Home',
      message: 'Welcome to this Page'
    });
});

app.get('/about',(req,res) =>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    message: 'Welcome to this Page'
  });
});

app.get('/bad',(req,res) =>{
  res.send({
    ErrorMessge: 'Something went wrong'
  });
});

app.listen(port,() =>{
  console.log(`Server is up at port: ${port} `);
});
