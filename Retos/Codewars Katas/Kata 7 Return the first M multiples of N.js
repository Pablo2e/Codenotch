/* https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
Return the first M multiples of N
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. 
Assume that m is a positive integer. */
function multiples(m, n){
    //var mult=m.toString();
    var array=[];
    var total=0;
    for (let i = 0; i < m; i++) {
        total += n;
        array.push(total)
    }
  }


multiples(3, 5.0)
/* should return

[5.0, 10.0, 15.0] */