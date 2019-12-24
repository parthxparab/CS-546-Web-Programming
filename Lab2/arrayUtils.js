function checkArray(array)
{
    if (Array.isArray(array)!== true) {
        throw `${array || "provided variable"} input not an array`;
    }
}

function checkNum(array)
{
    if(!array.some(isNaN) !== true)  //https://stackoverflow.com/questions/32817027/check-if-an-array-contains-only-numeric-values
    {
        throw `${array || "provided variable"} is not an number`;
    }
}

function checkLen(array)
{
    if(array.length ==0)
    {
        throw `${array || "provided array"} array is empty`;

    }
}

function head(array)
{
    checkArray(array);
    checkNum(array);
    checkLen(array);
    return(array[0]); 
}

function last(array)
{
    checkArray(array);
    checkNum(array);
    checkLen(array);
    return(array[array.length-1]); 
}

function remove(array, index)
{
    checkArray(array);
    checkNum(array);
    checkLen(array);

    if(index < 0 || index > array.length-1)
    {
        throw `${index || "provided value"}  is out of bound`;
    }

    else
    {
        array.splice(index, 1); //https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
        return(array); 
    }
}

function range(end,value=undefined)
{

    var array = [];
    if(end == NaN || end < 0 || end ==undefined || end % 1 != 0)
    {
        throw `${end || "provided variable"} is an invalid entry`;

    }

    else if(value ==undefined)
    {
        for(let i =0; i< end; i++)
        {
            array.push(i);
        }
        return(array); 

    }

    else if (value !== undefined)
    {

        for(let i =0; i< end; i++)
        {
                array.push(value);
        }
        return(array); 

            
    }
}

function countElements(array)
{
    checkArray(array);
    checkLen(array);
    {
        var counts = {};
        for (var i = 0; i < array.length; i++) //https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
        {
            counts[array[i]] = 1 + (counts[array[i]] || 0);
        }
        return(counts);
    }
}

function isEqual(arrayOne, arrayTwo)
{

    checkArray(arrayOne);
    checkArray(arrayTwo);
    checkNum(arrayOne);
    checkNum(arrayTwo);

    {
        if(JSON.stringify(arrayOne)==JSON.stringify(arrayTwo))  //https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
        {
            return(true); 
        }
        else
        {
            return(false); 

        }
    }
}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
  }