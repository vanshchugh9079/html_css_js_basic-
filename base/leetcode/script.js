let removeDuplicate=(s)=>{
let arr=Array.from(s)
let arr1=arr.filter((item,
    index) => arr.indexOf(item) === index)
    let arr2=arr1.join("")
     return arr2.toString();
     
}
console.log(removeDuplicate("abcdb"));