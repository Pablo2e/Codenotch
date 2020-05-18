function constructor(n,m,k){
    //        this.elements=new Array;
    let vector=[]
for (let i = 0; i < n; i++) {
    let vector2=[]
    for (let j = 0; j < m; j++) {
        let valor= Math.floor(Math.random()*k);
        vector2.push(valor)
    }
    vector.push(vector2)
    //console.log(vector[i])
}
//console.log(vector)
return(vector)
}
function constructor2(n,m,k){
    //        this.elements=new Array;
    let vector=[]
for (let i = 0; i < n; i++) {
    let vector2=[]
    for (let j = 0; j < m; j++) {
        let valor= Math.floor(Math.random()*k);
        vector2.push(valor)
    }
    vector.push(vector2)
    //console.log(vector[i])
}
//console.log(vector)
return(vector)
}
console.table(constructor(4,3,9))
console.table(constructor2(4,3,9))