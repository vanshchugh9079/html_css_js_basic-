let url=fetch("https://api.github.com/users/vanshchugh")
const first=new Promise((respond,reject)=>{
setTimeout(()=>{
    console.log("true");
    respond(url);
},1000)
})
first.then((user)=>{
    return user.json()
}).then((user2)=>{
    console.log(user2);
})
.catch(()=>console.log(error));