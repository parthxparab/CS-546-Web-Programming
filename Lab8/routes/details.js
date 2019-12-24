const axios = require('axios');
const express = require('express');
const router = express.Router();

async function getData()
{
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}

const getPersonByID = async id =>
{
    if(!id || typeof id == "undefined" || typeof id !== "number")
    {
        throw `provided input invalid`;
    }

if( id<1 || id > 500){ throw `Invalid output`};

    const data = await getData();

    return(data[id-1]);

};

router.get("/:id", async (req, res) => {
    const num = Number(req.params.id);
    const person = await getPersonByID(num);
    res.render("site/details",{
        id: person.id,
        firstName : person.firstName,
        lastName : person.lastName,
        address : person.address,
        zip : person.zip,
        phone : person.phone,
        ssn: person.ssn

    });
});

module.exports = router;

