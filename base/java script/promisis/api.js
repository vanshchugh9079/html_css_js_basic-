// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(("poor data connection"))
//     },1000)
// })
// let p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("p2 runs successfully")
//     },2000)
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("p3 runs successfully")
//     },3000)
// })
// let p4=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("p4 runs successfully")
//     },4000)
// })
// // p1.then((value)=>{
// //     console.log(value);
// // })
// // p2.then((value)=>{
// //     console.log(value);
// // })
// // p3.then((value)=>{
// //     console.log(value);
// // })
// // p4.then((value)=>{
// //     console.log(value);
// // })
// // let promiseall=Promise.allSettled([p1,p2,p3,p4])
// // p1.catch((reson)=>{
// //     console.log(reson+"of your network");
// // })
// // promiseall.then((value)=>{
// // console.log(value)
// // p1.catch((reson)=>{
// //     console.log(reson+"of your network");
// // })
// // })
// let promiseall=Promise.race([p1,p2,p3,p4])
// p1.catch((value)=>{console.log(value);})
// promiseall.then((value)=>{
// console.log(value)
// })
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(new Error("poor data connection"));
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 runs successfully");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 runs successfully");
    }, 1000);
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4 runs successfully");
    }, 1000);
});

// Use Promise.catch to handle the rejection of p1
// p1.catch((reason) => {
//     console.log(reason + " of your network");
// });

// Use Promise.race to get the result of the first resolved promise
// let p=Promise<any>;
// let promiseRace = Promise.any([p1,p2, p3, p4]);
let promiseRace = Promise.reject(6)
promiseRace.catch((value) => {
    console.log(value);
});
