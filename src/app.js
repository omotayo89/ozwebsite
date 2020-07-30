
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express()


const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));


app.get('',(req, res)=> {
  res.render('index', {title: 'Welcome'})
});

app.get('/register',(req, res)=> {
  res.render('register', {title: 'register'})
});

app.get('/json',(req, res)=> {
    var user = {};
    user.name = 'isaac';
    user.age = 12;
    res.send(user);
  });


  app.get('*',(req, res)=> {
    res.render('404')
  });

app.listen(3000, ()=> {
    console.log('server is up on port 3000');
}
)