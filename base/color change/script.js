let color = document.querySelector("body");

let random = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomDigit = Math.floor(Math.random() * 16);
    hexColor += randomDigit.toString(16); // Convert the digit to a hexadecimal string
  }

//   console.log(hexColor);
  color.style.backgroundColor = hexColor; // Change the background color of the body
}
let intervel;
let start=document.querySelector(".start")
start.addEventListener("click",()=>{
   intervel=setInterval(random,1000)   
})
let u=document.querySelector(".stop")
u.addEventListener("click",()=>{
    clearInterval(intervel)
})

