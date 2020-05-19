/*https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
1 
3     5 
7     9    11 
13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.: */

function rowSumOddNumbers(n) {
    var n2=((n-1)*n)-1;
    var contador=0;
    var resultado=n2;
    var resultado2=0;
    while(contador<n){
        resultado+=2
        resultado2+=resultado;
        contador++
        console.log(resultado)
    }
    console.log(resultado2)
}
//rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
//rowSumOddNumbers(1);// 1;
//rowSumOddNumbers(42);// 74088);
