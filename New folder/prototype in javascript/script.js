let obj1={
name:"vansh",
fun:function(){
    // console.log(this);
    return this.name+" my name is vansh"
}

}
// let obj2={
// rollno:10,
// name:"bandar",
// __proto__:obj1,
// }
// // use __proto__ to get properties of another object
// console.log(obj2);
// // it send in prototype
// obj1.name="chor"
// console.log(obj2.fun());

// Object.prototype.show=function(){
//     // this.push("my name is vansh")
//     // this.shift()
//     //  return this;
//     return "my name is chughv9079"
// }
// // let arr=["vansh","chugh"]
// // console.log(arr.show());
// let func=new function(){
//     console.log(this.show());
// }
// func();
// Array.prototype.aoconverter=function(){
//    let obj={}
//    for(let key in this)
//    {
//     obj[key]=this[key]
//    }
//    return obj;
// }
// let arr=["vansh","chugh","ganganagar"]
// console.log(arr.aoconverter());
function MyPrototype(name,id){
    this.name=name;
    this.id=id;
}
MyPrototype.prototype=obj1;
// const myproto=new MyPrototype("vansh");
// console.log(myproto);
// console.log(myproto.fun());
console.log(new MyPrototype("vansh",10));