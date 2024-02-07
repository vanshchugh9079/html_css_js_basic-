let x=document.querySelector("button")
let a=function(e){
    console.log(e); 
    x.style.backgroundColor="red"
    console.log(e.type,e.clientX,e.clientY);
}
x.addEventListener("click",a)
let user=prompt("enter a number")
user=user.toString()
if(user=="1")
{
    x.removeEventListener("click",a)
}

