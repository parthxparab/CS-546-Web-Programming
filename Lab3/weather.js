const axios = require('axios');

async function checkUndef(firstName, lastName)
{
    if(typeof firstName == "undefined" || typeof lastName == "undefined")
    {
        throw `Value not entered`;
    } 

}

function checkStr(firstName, lastName)
{
    if(typeof firstName !== "string" || typeof lastName !== "string" ) {
        throw `"provided variable" is not a string`;
      }
}
async function zipcode(firstName, lastName)
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
    return(data[val].zip)
    }
}

async function shouldTheyGoOutside(firstName, lastName)
{
  let weather  = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
  await checkUndef(firstName, lastName);
  await checkStr(firstName, lastName);
  var zip
  zip = await zipcode(firstName, lastName)

  for(let i in weather.data)
  {
    if(weather.data[i].zip == zip)
    {
      if(weather.data[i].temp >=34)
      {
        return("Yes, "+firstName +" should go outside")
      }
      else{
        return("No, "+ firstName +" should not go outside")
      }
    }

  }

}

module.exports = {
  shouldTheyGoOutside
}


