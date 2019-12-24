const axios = require('axios');
async function checkUndef(firstName, lastName)
{
    if(typeof firstName == "undefined")
    {
    } 
    else if(typeof lastName == "undefined")
    {
        throw `Value not entered`;
    }
}
function checkStr(firstName, lastName)
{
    if(typeof firstName !== "string") {
        throw `"provided variable" is not a string`;
      }
    
    else if(typeof lastName !== "string")
    {
        throw `"provided variable" is not a string`;

    }

}
async function ssnnum(firstName, lastName)
{
  var val
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  for(let i in data)
  {
      if(data[i].firstName == firstName && data[i].lastName == lastName)
      {
          val = i

      }
    }
    if(val == undefined)
    {
      throw `provided variable not present in file`;
    }
    else
    {
    return(data[val].ssn)
    }
}

async function whereDoTheyWork(firstName, lastName)
{
    let work  = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    await checkUndef(firstName, lastName);
    await checkStr(firstName, lastName);
    var ssn
    ssn = await ssnnum(firstName, lastName)
    for(let i in work.data)
    {
      if(work.data[i].ssn == ssn)
      {
        if(work.data[i].willBeFired == true)
        {
          return(firstName+" "+lastName+" - "+work.data[i].jobTitle+" at "+ work.data[i].company+". They will be fired.")
        }
        else{
            return(firstName+" "+lastName+" - "+work.data[i].jobTitle+" at "+ work.data[i].company+". They will not be fired.")

        }
      }
    }
}

async function findssn(ip)
{
    var ssno
    let  work1  = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    for(var i in work1.data)
    {
        if(work1.data[i].ip == ip)
        {
            ssno = work1.data[i].ssn
        }
    }
    return ssno
}
async function hasNumbers(ip)
{
var regex = /\d/g;
return regex.test(ip);
//https://stackoverflow.com/questions/22100243/how-to-check-if-a-string-contains-a-number-in-javascript
} 

async function findTheHacker(ip)
{
    var ssn, test
    ssn = await findssn(ip)
    test = await hasNumbers(ip)

    if(test == false)
    {
        throw `Input not a valid IP`
    }

    let  people1 = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    
    for(var i in people1.data)
    {
        if(people1.data[i].ssn == ssn)
        {
            return(people1.data[i].firstName +" "+people1.data[i].lastName+" is the hacker!");

        }

    }
}

module.exports = {
    whereDoTheyWork,    
    findTheHacker
}


