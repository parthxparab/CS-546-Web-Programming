function checkUndef(string)
{
    if(string == undefined)
    {
        throw `${string || "String "} not entered`;
    }
}

function checkStr(string)
{
    if(typeof string !== "string") {
        throw `${string || "provided variable"} is not a string`;
      }
}

function capitalize(string)
{
    checkUndef(string);
    checkStr(string);
    return(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}


function repeat(string, num)
{
    checkUndef(string);
    checkStr(string);

    if( num == NaN || num<0)
    {
        throw `${num || "provided variable"} is an invalid entry`;

    }

    else{
        return(string.repeat(num));
    }

}

function countChars(string)
{

    checkUndef(string);
    checkStr(string);
    {
        var alpha = function (text)
        {
            return text.split('').sort().join('');
        };
        string1=alpha(string);

        var counts = {};
        for (var i = 0; i < string1.length; i++)
        {
            counts[string1.charAt(i)] = 1 + (counts[string1.charAt(i)] || 0);
        }
        var sortedKeys = Object.keys(counts).sort();
        return(counts);
    }
}

module.exports = {
    capitalize,
    repeat,
    countChars
  }