function sum(a,b){
    return a+b
}
console.log(sum(1,2))
let sum= new Function('a','b','return a+b')
console.log(sum(1,2))