const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum = 0;
    arr.forEach(value => {
        sum = sum+ (value **2);
    });
    return sum; 
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num<1)
    {
        return 0;
    }
    else if(num ==1)
    {
        return 1;
    }
    else
    {
        return(questionTwo(num-1)+questionTwo(num-2))
    }
}
const questionThree = function questionThree(text) {
    // Implement question 3 here
    let count = 0;
    for(let i =0;i<=text.length;i++)
    {
        if(text.charAt(i)=='a'||text.charAt(i)=='e'||text.charAt(i)=='i'||text.charAt(i)=='o'||text.charAt(i)=='u')
        {
        count++;
        }
    }
    return count;

}

const questionFour = function questionFour(num) {
    // Implement question  here
    if(num<0)
    {
        return NaN;
    }
    else if(num ==0)
    {
        return 1;
    }
    else
    {
        return (num*questionFour(num-1)); 
    }

}

module.exports = {
    firstName: "Parth", 
    lastName: "Parab", 
    studentId: "10444835",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};