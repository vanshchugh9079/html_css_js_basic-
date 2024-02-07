let first=document.querySelectorAll("li")
first.forEach(element => {
    element.style.listStyle="none"
    element.style.border="2px solid black"
    element.style.textAlign="center"
});
first[0].addEventListener("click",()=>{
    first[0].style.backgroundColor="green"
})
first[1].addEventListener("click",()=>{
    first[1].style.backgroundColor="red"
})
first[2].addEventListener("click",()=>{
    first[2].style.backgroundColor="pink"
})
