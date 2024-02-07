let obj={
    username:"vansh",
    age:18,
}
let fun=function(city,country){
console.log(this.username+city+country);
}
fun.apply(obj,["delhi","india"]);