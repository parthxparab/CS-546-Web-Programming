const dic = require("./dictonary");

try {
    console.log(dic.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.lookupDefinition("program"))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("The action or process ."))
}catch (error){
    console.log(error)
}
