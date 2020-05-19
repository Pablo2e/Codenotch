/* https://www.codewars.com/kata/59f7fc109f0e86d705000043
By 3, or not by 3? That is the question . . .
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
You can expect all test case arguments to be strings representing values greater than 0. */
function divisibleByThree(str){
    var total=0
    for (let i = 0; i < str.length; i++) {
        total += parseInt(str[i]);
        
    }
    if(total%3==0){
        console.log(true)
        //return(true)
    }else{
        //return(false) 
        console.log(false)
    }
}


divisibleByThree("100853")
/*"123"       -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false */