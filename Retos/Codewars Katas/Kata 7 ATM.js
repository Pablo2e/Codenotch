/* https://www.codewars.com/kata/5635e7cb49adc7b54500001c
ATM
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
You are given money in nominal value of n with 1<=n<=1500.
Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible. */
function solve(n) {
    if(n%10!=0 /* || n>1500 */){
    return(-1)
    }
    var total=n;
    var contador=0;
    while(total>=500){
        total-=500;
        contador++
      }
      while(total>=200){
        total-=200;
        contador++
      }
      while(total>=100){
        total-=100;
        contador++
      }
      while(total>=50){
        total-=50;
        contador++
      }
      while(total>=20){
        total-=20;
        contador++
      }
      while(total>=10){
        total-=10;
        contador++
      }
    //console.log(contador)
    retun(contador)
  }
  solve(5000)