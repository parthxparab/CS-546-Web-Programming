
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

function checkMin(...args)
{
    if(args.length<2)
    {
        throw `Minimum 2 objects required`;
    }
}
function checkUndef(...args)
{
    if(args == undefined)
    {
        throw `Value not entered`;
    }
}
function checkObj(obj)
{
    if(typeof obj !== "object") 
    {
        throw `${obj || "provided variable"} is not an object`;
    }
}

function extend(...args){
    let i =0;
    var ans = {};
    checkMin(...args);
    checkUndef(...args);
    for(i of args)
    {
        var obj = i;
        checkObj(obj);
        Object.keys(obj).forEach(function(key)
        {
            if(!ans.hasOwnProperty(key)) 
            {
                ans[key]=obj[key];
            }
        });
    }
    return(ans);
    //https://stackoverflow.com/questions/41534611/extending-objects-properties-without-overwriting-them

}


function smush(...args){
    let i =0;
    var ans = {};
    checkMin(...args);
    checkUndef(...args);
    for(i of args)
    {
        var obj = i;
        checkObj(obj);
        ans = Object.assign(ans, i);
    }
    return(ans);
}

function mapValues(object, func)
{
    let i =0;
    checkObj(object);
  
    if(typeof func != 'function')
    {
        throw `${func || "provided input"} is not a function`;
    }
    for(i in object)
    {
        object[i] = func(object[i]);
    }
    return(object)
}
module.exports= {
    extend,
    smush,
    mapValues
    }
