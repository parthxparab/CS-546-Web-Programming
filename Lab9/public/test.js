(function(){

    const check = document.getElementById("check");
    check.addEventListener("submit", event =>{
    event.preventDefault();   

//  primecheck()
{
    var i,number;
    var ol = document.getElementById("attempts");
    var li = document.createElement("li");

    var flag = 0;
    number = Number(document.getElementById("text1").value);
     if(number ==0 ||number == 1)
    {
        var isnotprime = number+" is NOT a prime number "
        li.setAttribute('id',number);
        li.className="not-prime"
        li.appendChild(document.createTextNode(isnotprime));
        ol.appendChild(li);
        //.style.color = "#FF3D00";   
    }
    else if(!number ||typeof number!== "number" ||number == undefined || number =="" || isNaN(number))
    {
        window.alert("Invalid Input, Please Enter Numbers only");

    }


    else if(number < 0)
    {
        window.alert("Prime number property does not apply to Negative Numbers");

    }
    if(number % 1 !== 0 && number!==0 && number !==1)
    {
        window.alert("Prime number of float numbers does not exist");

    }
    else
    {
    for(i=2; i <= number/2; i++)
	{
		if(number%i == 0 && number!==0 && number !==1)
		{
			flag = 1;
			break;
		}
    }
    if(flag == 0 && number!==0 && number !==1)
    {
        isprime = number+" is a prime number ";
        li.setAttribute('id',number);
        li.className="is-prime"
        li.appendChild(document.createTextNode(isprime));
        ol.appendChild(li);
        //.style.color = "#00E676";

    }
    else if(number!==0 && number !==1)
    {
        var isnotprime = number+" is NOT a prime number "
        li.setAttribute('id',number);
        li.className="not-prime"
        li.appendChild(document.createTextNode(isnotprime));
        ol.appendChild(li);
        //.style.color = "#FF3D00";

    }
}
    

}});
})();
