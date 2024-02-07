document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const body = document.querySelector("body");
    let originalBackgroundColor = getComputedStyle(body).backgroundColor;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let color;

            if (e.target.id === "red") {
                color = "red";
            } else if (e.target.id === "grey") {
                color = "grey";
            } else if (e.target.id === "yellow") {
                color = "yellow";
            } else if (e.target.id === "pink") {
                color = "pink";
            } else if (e.target.id === "green") {
                color = "green";
            }

            body.style.backgroundColor = color;
            setTimeout(() => {
                body.style.backgroundColor = originalBackgroundColor;
            }, 10000); // Reset background color after 10 seconds (10000 milliseconds)
        });
    });
});
