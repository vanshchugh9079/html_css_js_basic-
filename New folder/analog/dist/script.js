// Get references to clock hands elements
let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");
let alramhand=document.querySelector(".alarm")
let time=document.querySelector("#alarm")
secondHand.style.transform="rotate(90deg)"
minuteHand.style.transform="rotate(90deg)"
hourHand.style.transform="rotate(270deg)"
let arr;
setInterval(()=>{
   arr=time.value.split(":")
},1000)
function updateClockHands() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let set=now.setHours(arr[0])
  let newminutes=minutes*6+90;
  let newhours=hours*30+minutes*0.5+90;
  let newsecond=seconds*6;
secondHand.style.transform=`rotate(${newsecond}deg)`
minuteHand.style.transform=`rotate(${newminutes}deg)`
hourHand.style.transform=`rotate(${newhours}deg)`
alramhand.style.transform=`rotate(${newset}deg)`
}
setInterval(updateClockHands, 1000);
updateClockHands();
