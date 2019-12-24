const animals = require("./data/animals");
const connection = require('./mongoConnection');

async function main() {
    try {
    var sasha = await animals.create("Sasha", "Dog");
    console.log(sasha);
    }
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);

     }
    try {
    var lucy = await animals.create("Lucy", "Dog");
    //console.log(lucy);
    }
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);

    }

    try {
    var allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);}
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);
    }

    try{
    var duke = await animals.create("Duke", "Walrus");
    console.log(duke);
    }
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);
    }

    try{
    var sashita = await animals.rename(sasha._id, "Sashita");
    console.log(sashita);
    }
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);
    }

    try
    {
    var removeLucy = await animals.remove(lucy._id);
    console.log(removeLucy);}
    
    catch(e)
    {
        console.log("Error occured: ")
        console.log(e);
    }


    try {
        var allMyAnimals1 = await animals.getAll();
        console.log(allMyAnimals1);}
        catch(e)
        {
            console.log("Error occured: ")
            console.log(e);
        }    
    const db = await connection();
    await db.serverConfig.close();



}

main();