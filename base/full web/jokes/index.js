let user=prompt("enter the joke number:-")
user=Number.parseInt(user)
let arr=[ "What falls but never needs a bandage? The rain.",
    `I was going to tell you a joke about boxing but I forgot the punch line`,
  `Im not a fan of spring cleaning. Lets be honest, Im not into summer, fall, or winter cleaning either.`
   , `Why did the egg hide? It was a little chicken.`
   ,` What did the dirt say to the rain? If you keep this up, my name will be mud!`
    ,`Why couldn't the sunflower ride its bike? It lost its petals.`
    ,`What's an egg's favorite vacation spot? New Yolk City.`
   , `I ate a sock yesterday. It was very time-consuming.`
   ,` What kind of candy do astronauts like? Mars bars.`
    ,`I wanted to buy some camo pants but couldn't find any.1`]
    document.querySelector("body").innerText=arr[user-1]