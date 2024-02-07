let Fun=(str)=>{

console.log(str.split(" ").map((item)=>{
    return item.split("").reverse().join("")
  }).join(" "))
}
Fun(15)
// export default Fun();