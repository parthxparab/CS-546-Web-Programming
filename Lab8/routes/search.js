const express = require('express');
const axios = require('axios');
const router = express.Router();

async function getPersonByName(searchName)
{
    let arr = [];
    if(typeof searchName == "undefined" || typeof searchName !== "string")
    {
        throw ` provided input is invalid`;
    }
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');

    for(let x of data)
    {
        if (
            x["firstName"].includes(
                searchName.charAt(0).toUpperCase() +
                searchName.substring(1, searchName.length)
            )
        )
        {
        arr.push(x);}

        else if(x["lastName"].includes(
            searchName.charAt(0).toUpperCase() +
            searchName.substring(1, searchName.length)
          ))
          {
            arr.push(x);}

        else if(x["firstName"].includes(searchName.toLowerCase())) arr.push(x);
        else if(x["lastName"].includes(searchName.toLowerCase())) arr.push(x);

        if(arr.length === 20) break;

        }

    return arr;
}

router.post('/', async (req, res) => {
    
    if(!req.body.personName)
    {
        res.status(400);
        res.render("site/error", {});
    }

    else{
        const name = req.body.personName;
        const peopleList = await getPersonByName(name);
        res.render("site/search", {name: name, people: peopleList});
    }

});


module.exports = router;


