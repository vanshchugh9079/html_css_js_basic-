// bind
let obj={
    username:"vansh",
    age:18,
}
let fun=function(city,country){
console.log(this.username+city+country);
}
let bind=fun.bind(obj,"delhi","india");
bind();  
// we can create a copy of a funtion and stor in new varriable and use it if you require