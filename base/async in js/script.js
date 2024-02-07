// javascript is by default syncronous 
// it is single threading languge
// syncronus=code execute line by line when one task is execute than execute another task
// asynchronous=all task started at a same time jiska answer phele agya use execute kar dena
// requst in asyncronous
//1 set interval
//2 set timeout
//3 promises
//4 xml
//5 axious
// to genrate answer by the server
//1 awsync await
//2 callback
//then catch
                                  // promise and then catch example
let alpha=new Promise((respond,reject)=>{
let n=Math.floor(Math.random()*10)+1
if(n>=5){
    return respond()
}
else{
    return reject()
}
}) 
alpha.then(()=>{
    console.log("above");
}).catch(()=>{
    console.log("below");
})