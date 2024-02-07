while (true) {
    let age = prompt("Enter your age");
    age=Number.parseInt(age)
    if (age >= 18) {
      alert("You can drive");
      break;
    }
    if (age<18 && age>0 ) {
      alert("You cannot drive");
      let play = confirm("Do you want to play again?");
      
     if(play==false) {
        break;
      }
    }
    if(age<=0 || isNaN(age))
    {
        console.error("plese enter correct formate and enter bonly positive number");
        break;
    }
  }
  