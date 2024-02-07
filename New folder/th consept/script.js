// this 
// console.log(this.name);// it show undefind
// function fun(name){
//     let obj={
//         name:name
//     }
//     console.log(this.name);
// }
// let fun=(name)=>{
//     let obj={
//         name:this.name
//     }
//     console.log(obj.name)
// }
// fun("vansh")
// fun("chugh")
// let obj={
//     name:"vansh",
//     fun:function(){
//         console.log(this.name+"hlo how are you")
//     }
// }
// let ob2={
//    print:function(){
//     console.log(this.obj.name);
//    },
//    __proto__:obj
// }
// ob2.print()
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  console.log(Car());
  const myCar = new Car("Toyota", "Camry");
  console.log(myCar.make); // Output: Toyota
//   console.log(this instanceof Car);  