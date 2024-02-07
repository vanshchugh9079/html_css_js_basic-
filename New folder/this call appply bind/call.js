// function setusername(username){
//  this.username=username;
//  console.log("called");
// }
// function create(username,email,password){
//     setusername.call(this,username)// me tereko apna username de rha ho 
//     this.email=email
//     this.password=password;
//     // setusername(user)// it send only refrence

// }
// const chai=new create("chai","chai@gmail.com","a1s1d1fg1")
// console.log(chai);
// // console.log(setusernames("vansh"));
let obj={
    username:"vansh",
    age:18,
}
let fun=function(city){
console.log(this.username+city);
}
fun.call(obj,"delhi");