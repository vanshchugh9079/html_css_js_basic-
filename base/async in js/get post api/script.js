let form=document.querySelector("#form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.querySelector("#name")
    let id=document.querySelector("#id")
   let url=`https://jsonplaceholder.typicode.com/todos/1`
   fetch(url,{
    method:`post`,
    body:JSON.stringify({
        title:name,
        id:id
    }),
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
   })
   .then((data)=>{
console.log(data);
   })

})