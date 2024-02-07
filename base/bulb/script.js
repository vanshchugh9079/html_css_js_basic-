let img=document.querySelector("img")
let btnon=document.querySelector(".turnon")
let btnoff=document.querySelector(".turnoff")
let on=()=>{
    img.setAttribute("src","bulbon.jpg")
}
let off=()=>{
    img.setAttribute("src","bulboff.jpg")
}
btnon.addEventListener("click",()=>{
    on();
}
)
btnoff.addEventListener("click",()=>{
    off();
})