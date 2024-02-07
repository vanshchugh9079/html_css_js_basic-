let user={
    name:"vansh",
    id:10,
    welcome:function(){
        console.log(this.name+"  welcome to our website");
        console.log(this);
    }
}
// this send in arrow function global
user.welcome();
user.name="pagal"
user.welcome();
let arr=()=>{
    let username="vansh"
    console.log(this);
    console.log(this.username);
}
// it send current context in object 
// let arr=function(){
//     console.log(this);
// }
arr();