const people = require("./people.js");
const weather = require("./weather.js");
const work = require("./work.js");


const main = async() => {

    try {
        const getPeopleById = await people.getPersonById(43);
        console.log(getPeopleById);
    } catch(e) {
        console.log(e);
    }

    try{
        const peopledata = await people.getPersonById()
        console.log (peopledata)
    }catch(e){
        console.log (e);
    }


    try{
        const lexIndex = await people.lexIndex(2)
        console.log (lexIndex)
    }catch(e){
        console.log (e);
    }

    try{
        const lexIndex1 = await people.lexIndex(-1)
        console.log (lexIndex1)
    }catch(e){
        console.log (e);
    }

    try{
        const firstNameMetrics = await people.firstNameMetrics()
        console.log (firstNameMetrics)
    }catch(e){
        console.log (e);
    }
    
    try{
        const shouldTheyGoOutside = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log (shouldTheyGoOutside)
    }catch(e){
        console.log (e);
    }
    
    try{
        const shouldTheyGoOutside1 = await weather.shouldTheyGoOutside("Bob")
        console.log (shouldTheyGoOutside1)
    }catch(e){
        console.log (e);
    }
    
    try{
        const whereDoTheyWork = await work.whereDoTheyWork("Hank", "Tarling")
        console.log (whereDoTheyWork)
    }catch(e){
        console.log (e);
    }

    try{
        const whereDoTheyWork1 = await work.whereDoTheyWork("Bob", "Smith")
        console.log (whereDoTheyWork1)
    }catch(e){
        console.log (e);
    }
    
    try{
        const findTheHacker = await work.findTheHacker(1234)
        console.log (findTheHacker)
    }catch(e){
        console.log (e);
    }

    try{
        const findTheHacker1 = await work.findTheHacker("34534.34534")
        console.log (findTheHacker1)
    }catch(e){
        console.log (e);
    }


}

main();