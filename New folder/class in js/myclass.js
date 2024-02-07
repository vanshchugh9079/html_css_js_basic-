// // this is after es 6
// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//      return`${this.password}abc `
//     }
// }
// const chai=new user("vansh","chughv9079@gmail.com","a1s1d1f1g1");
// console.log(chai.encryptPassword());

// if does not use class how to solve it
function user(username,email,password){
    this.username=username
            this.email=email
            this.password=password
}
user.prototype.encryptPassword=function(){
    return` ${this.password}abc`
}
const chai=new user("vansh","chughv9079@gmail.com","a1s1d1f1g1")
// console.log(chai.encryptPassword());     // that is create using function or protortytpe not a class
console.log(chai);
console.log(chai.encryptPassword());