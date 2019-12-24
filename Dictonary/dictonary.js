const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(val)
{
    if (typeof val !== "string") {
        throw `${val || "provided variable"} is not a string`;
      }
}


    function lookupDefinition(inputVal){
    checkInput(inputVal);
    if(words[inputVal] != undefined ){
        return words[inputVal]
    }
    else
    {
        throw "Definition not found"
    }
    }

    function getWord(value){
        checkInput(value);
        let getWord = Object.keys(words).find(key => words[key] === value);
        if (getWord == undefined){
            throw "Word not found"
        }
        return getWord
    }

    module.exports = { lookupDefinition, getWord}
