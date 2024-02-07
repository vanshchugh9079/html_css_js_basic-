const updateClock = () => {
  const now = new Date();

  const elements = {
    first: document.querySelector("#item1"),
    second: document.querySelector("#item2"),
    third: document.querySelector("#item3"),
    fourth: document.querySelector("#item4"),
    fiveth: document.querySelector("#item5"),
    sixth: document.querySelector("#item6"),
    seventh: document.querySelector("#item7"),
  };

  // Function to update individual clock elements
  const updateElement = (elementId, value, fontSize) => {
    const element = elements[elementId];
    element.innerHTML = `<h1>${value}</h1>`;
    element.firstElementChild.style.marginTop = "10px";
    element.firstElementChild.style.fontSize = fontSize;
  };

  // Add a colon separator element
  const addColon = () => {
    const colonElement = document.createElement("span");
    colonElement.textContent = ":";
    elements["fourth"].appendChild(colonElement);
  };

  updateElement("first", now.getDate(), "80px");
  updateElement("second", now.getMonth() + 1, "80px");
  updateElement("third", now.getFullYear(), "80px");

  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  updateElement("fourth", hours, "90px");

  // Call addColon to add the colon separator
  addColon();

  updateElement("fiveth", now.getMinutes(), "80px");

  // Call addColon again to add another colon separator
  addColon();

  updateElement("sixth", now.getSeconds(), "80px");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  updateElement("seventh", dayOfWeek, "80px");
};

updateClock();
setInterval(updateClock, 1000);
