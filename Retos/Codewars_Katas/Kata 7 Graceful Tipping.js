/* https://www.codewars.com/kata/5eb27d81077a7400171c6820/train/javascript
Adding tip to a restaurant bill in a graceful way can be tricky, 
thats why you need make a function for it.
The function will receive the restaurant bill (always a positive number) as an argument. 
You need to 1) add at least 15% in tip, 
2) round that number up to an elegant value and 
3) return it.
What is an elegant number? It depends on the magnitude of the number to be rounded. 
Numbers below 10 should simply be rounded to whole numbers. 
Numbers 10 and above should be rounded like this:
10 - 99.99... ---> Round to number divisible by 5
100 - 999.99... ---> Round to number divisible by 50
1000 - 9999.99... ---> Round to number divisible by 500 */

function gracefulTipping(bill) {
  bill += ((bill*15)/100);
  var tot=(Math.ceil(bill))
  if(tot<10){
    return(tot)
  }
  var num = tot;
  var n = num.toString();
  var div=5
  console.log(n)
  for (i=0; i<n.length-2; i++){
       div+="0"
       div=parseInt(div)
  }
  while(tot>=n.length && tot%div!=0){
      tot+=1
  }
  return((tot))
}
  //console.log(tot)
  gracefulTipping(11.99)


/*  1  -->    2
 7  -->    9
12  -->   15
86  -->  100 */