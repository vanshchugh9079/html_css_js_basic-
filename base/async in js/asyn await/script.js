let chugh=async ()=>{
let delhi=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //   console.log("27 deg");
    resolve("27 deg")
    },5000)
})
let mumbai=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("21 deg")
    },1000)
})
console.log("fetching delhi weather plese wait");
let delw=await delhi;
console.log(delw);
console.log("fetching mumbai weather plese wait");
let mumw=await mumbai
console.log(mumw);
return[delhi,mumbai]
}
let a=chugh();
a.then((value)=>{
console.log(value);
})