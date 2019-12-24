const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session')
const app = express();

var configRoutes = require("./routes");
const exphbs = require("express-handlebars");

app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) =>{
  var text;
  if(req.session.user !== "" || req.session.user !== undefined || req.session.user.length == 0)
  {
    text = "(Non-Authenticated User)"
  }
  else text = "(Authenticated User)"
  console.log(new Date().toUTCString(), req.method, req.originalUrl, text);
  next();
})

configRoutes(app); 

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");

  });