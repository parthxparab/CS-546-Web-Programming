const axios = require('axios');

const getPersonById=async function getPersonById(id){
  if(id>500||id<0)
   throw("Id Is out of bounds");
  if(id==undefined)
   throw("Id doesn't exist");
  if(typeof id == 'number'){
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    for(var i in data){
      for(var j in i){
        if(data[i]['id']==id){
          return data[i]['firstName']+" "+data[i]['lastName'];
        }
      }
    }
    // });
  }else{
    throw("Id is not a number");
  }
}
function compare(a,b){
  const lastNameOfA = a.lastName.toUpperCase();
  const lastNameOfB = b.lastName.toUpperCase();
  let comparison = 0;
  if(lastNameOfA > lastNameOfB){
    comparison = 1;
  }else if(lastNameOfA < lastNameOfB){
    comparison = -1;
  }
  return comparison;
}

const lexIndex = async function lexIndex(index){
  if(index>500||index<0)
   throw("Index Is out of bounds");
  if(index==undefined)
   throw("Id doesn't exist");
  if(typeof index == 'number'){
  const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
  Object.keys(data).forEach(function(key){
      data.sort(compare);
  });
  return data[index]['firstName']+" "+data[index]['lastName'];
}else{
    throw("Index is not a number");
  }
  //return [data[index]['firstName'],data[index]['lastName']];
}
const firstNameMetrics=async function firstNameMetrics(){
  const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
  if(data==undefined)
    throw "Data is undefined"
  let sumOfAllLetters=0,sumOfAllVowels=0,sumOfAllConsonants=0,longestNameLength=Number.MIN_SAFE_INTEGER,shortestNameLength=Number.MAX_SAFE_INTEGER,longestName="",shortestName="";
  Object.keys(data).forEach(function(key){
    var firstName = data[key]['firstName'];
    if(firstName.length>longestNameLength){
      longestNameLength=firstName.length;
      longestName = firstName;
    }
    if(firstName.length<shortestNameLength){
      shortestNameLength=firstName.length;
      shortestName= firstName;
    }
    firstName = firstName.toLowerCase();
    for(var i of firstName){
      if(!(i.toUpperCase()!=i.toLowerCase())){
        continue;
      }
      sumOfAllLetters++;
      if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
        sumOfAllVowels++;
      }else{
        sumOfAllConsonants++;
      }
    }
  });
  var output = {
    'sumOfAllLetters':sumOfAllLetters,
    'sumOfAllVowels':sumOfAllVowels,
    'sumOfAllConsonants':sumOfAllConsonants,
    'longestName':longestName,
    'shortestName':shortestName
  }
  console.log (output);
}
async function main()
{
  await getPersonById(43);
  await lexIndex(2);
  await firstNameMetrics();
}

main();