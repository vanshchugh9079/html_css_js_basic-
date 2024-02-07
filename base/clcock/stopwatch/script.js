let fun = () => {
    let div = document.querySelector(".first");
    let headers = document.getElementsByClassName("header");
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    
    // Format the time as HH:MM:SS
    let formattedTime = `${hour}:${minute}:${second}`;
    
    // Update the content of all elements with class "header"
    for (let i = 0; i < headers.length; i++) {
      headers[i].textContent = formattedTime;
    }
  };
  
//   fun(); // Call the function initially
  setInterval(fun, 1000); // Call the function every second
  