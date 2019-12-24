const axios = require('axios');

async function checkUndef(id)
{
    if(typeof id == "undefined")
    {
        throw `${id || "Value"} not entered`;
    } 

}

async function checkNum(id)
{
    if(typeof id != 'number')
    {
        throw `${id || "provided variable"} is not a number`;

    }
}

async function getPersonById(id)
{
    
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    
    await checkUndef(id);
    await checkNum(id);

    if(id<0 || id > data.length)
    {
        throw `${id || "provided variable"} is out of bound`;

    }
    else
    {
    for(let i in data)
    {
        if(data[i].id == id)
        {
            return(data[i].firstName +" "+data[i].lastName);
        }
    }
}

}

async function lexIndex(index)
{
    var { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')

    await checkUndef(index);
    await checkNum(index); 
    if(index<0 || index > data.length)
    {
        throw `${index || "provided variable"} is out of bound`;

    }
    else
{
for(i in data)
{
        data.sort(function(a,b){
            var one=a.lastName, two=b.lastName
            if(one<two)
                return -1
            if(one>two)
                return 1
            else
                return 0
        })
//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
}
}
    return(data[index].firstName +" "+data[index].lastName);
}

async function firstNameMetrics()
{
    var { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')

   var totalLetters = 0
   var totalVowels = 0
   var totalConsonants = 0
   var longestName = 0
   var shortestName = 0

   for(i in data)
   {
           data.sort(function(a,b){
               var one=a.lastName, two=b.lastName
               if(one<two)
                   return -1
               if(one>two)
                   return 1
               else
                   return 0
           })
   }
   //https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    Object.keys(data).forEach(function(key){
    {
    data.sort(function(a, b){
        var one=a.firstName.toLowerCase();
        var two=b.firstName.toLowerCase();
        if (one.length < two.length)
            return -1 
        if (one.length > two.length)
            return 1
        else
            return 0 
    })
    var firstName = data[key].firstName
    totalLetters = totalLetters +firstName.length;
}});
   
    const vowels = ["a", "e", "i", "o", "u", "A","E","I","O","U"]
    var fname
    for(i in data)
    {
        fname = data[i].firstName
        fname = fname.toLowerCase();
    for (let letter of fname.toLowerCase()){

        if (vowels.includes(letter)) 
        {
                totalVowels++;
            }
    }    }
    totalConsonants = totalLetters - totalVowels

longestName = data[data.length-1].firstName
shortestName = data[0].firstName

var output = 
{
    'totalLetters':totalLetters,
    'totalVowels':totalVowels,
    'totalConsonants':totalConsonants,
    'longestName':longestName,
    'shortestName':shortestName
  }

  return(output)

}

module.exports = {
    getPersonById,
    lexIndex,
    firstNameMetrics
}