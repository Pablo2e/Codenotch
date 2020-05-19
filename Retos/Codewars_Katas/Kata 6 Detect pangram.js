/* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
Detect pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation. */
function isPangram(string){
    string1=string.toLowerCase()
    var cont=0;
    if(string1.includes("a")){cont++;}
    if(string1.includes("b")){cont++;}
    if(string1.includes("c")){cont++;}
    if(string1.includes("d")){cont++;}
    if(string1.includes("e")){cont++;}
    if(string1.includes("f")){cont++;}
    if(string1.includes("g")){cont++;}
    if(string1.includes("h")){cont++;}
    if(string1.includes("i")){cont++;}
    if(string1.includes("j")){cont++;}
    if(string1.includes("k")){cont++;}
    if(string1.includes("l")){cont++;}
    if(string1.includes("m")){cont++;}
    if(string1.includes("n")){cont++;}
    if(string1.includes("o")){cont++;}
    if(string1.includes("p")){cont++;}
    if(string1.includes("q")){cont++;}
    if(string1.includes("r")){cont++;}
    if(string1.includes("s")){cont++;}
    if(string1.includes("t")){cont++;}
    if(string1.includes("u")){cont++;}
    if(string1.includes("v")){cont++;}
    if(string1.includes("w")){cont++;}
    if(string1.includes("x")){cont++;}
    if(string1.includes("x")){cont++;}
    if(string1.includes("z")){cont++;}
    if(cont==26){
      console.log(true)
    }else{
      console.log(false)
    }
    
}

var string = "The quick brown fox jumps over the lazy dog."
isPangram(string)
/* Test.assertEquals(isPangram(string), true)
var string = "This is not a pangram."
Test.assertEquals(isPangram(string), false) */