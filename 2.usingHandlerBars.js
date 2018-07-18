const express = require('express');
const hbs = require('hbs');

var app = express();
app.use(express.static(__dirname + '/public'));

// here we are setting configration file of uur app by using set, it take akey/value pair. name of property,and value
// hbs is a handlerBars a view engine like ejs. we can create templete in .hbs file for html.

app.set('view engine',hbs);

// views folder in express is default for templates
//render function take a .bhs file and second is data for that template 
app.get('/',(req, res) =>{
    res.render('home.hbs',{
      pageTitle:'Home',
      message: 'Welcome to this Page',
      currentYear: new Date().getFullYear()
    });
});

app.get('/about',(req,res) =>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad',(req,res) =>{
  res.send({
    ErrorMessge: 'Something went wrong'
  });
});

app.listen(3000,() =>{
  console.log('Server is up at port: 3000');
});
