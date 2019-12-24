const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const data = require("./users");
const session = require('express-session')

router.get('/', async (req, res) => {
    if(req.session.user){
        res.redirect("/private");
    }
    else
    {
        res.render("auth");
    }
});

router.post('/login', async (req, res) => {
    let userInfo = await req.body;
    var username = userInfo["username"];
    var password = userInfo["password"];

    var a = false;

    var flag = 0;
    for(var i = 0; i<=data.length;i++)
    {
        if(username !== data[i].username)
        {
            flag = flag + 1;
            if(flag>=data.length)
            {
                break;
            }
        }

        else if(username == data[i].username)
        {
            a = await bcrypt.compare(password, data[i].hashedPassword);
            if(a == true)
            {
                req.session.user = data[i].username;
                res.redirect("/private");
                break;
            }
            else if(a == false)
            {
              //  res.render("auth", {error: "Username or Password is INVALID"});
                res.status(401).render("auth", {error: "Username or Password is INVALID"});
            }
        }
    
    }
    if(flag >= data.length )
    {
      //  res.render("auth", {error: "Username or Password is INVALID1"});
        res.status(401).render("auth", {error: "Username or Password is INVALID"});
    }

});

const authChecker = (req, res, next) => {
    if(req.session.user)
    {
        next();
    }   else {   res.status(403).render("error");
    }
}

router.get('/private',authChecker, async (req, res) => {

    if(req.session.user != undefined)
    {
        for(var i = 0; i<=data.length;i++)
        {
            if(req.session.user == data[i].username)
            {
                res.render('details',{
                    username: data[i].username,
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    profession: data[i].profession,
                    bio: data[i].bio
                });
                break;
            }
        }
    }
    else
    {
        res.status(403).render("error");
    }

});

router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.clearCookie('AuthCookie');
    res.render("logout");
});

module.exports = router;


