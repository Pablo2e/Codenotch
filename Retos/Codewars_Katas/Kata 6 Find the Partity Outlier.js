/* https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
Find The Parity Outlier
You are given an array (which will have a length of at least 3,but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a method that takes the array as an argument and returns this "outlier" N. */
function findOutlier(integers){
    var sal1=0;
    var sal2=0;
    var cont1=0;
    var cont2=0;
    for (let i = 0; i < integers.length; i++) {
        if(integers[i]%2===0){
          sal1+=parseInt(integers[i])
          cont1++
        }else{
          sal2+=parseInt(integers[i])
          cont2++
        }
    }
    if(cont1<cont2){
        console.log(sal1);
        //return(arr1);
      }else{
        console.log(sal2);
        //return(sal2);
      }
    //console.log(salida)
    //return(salida)
  }



//var array=[2, 4, 0, 100, 4, 11, 2602, 36]
findOutlier([0,0,3,0,0])
/* Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */
/* Test.assertEquals(findOutlier([0, 1, 2]), 1)
Test.assertEquals(findOutlier([1, 2, 3]), 2)
Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
Examples */