function old() {
    console.log("Your suit is made.");
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src=url

    script.onload = function () {
        console.log("Script loaded successfully.");
        callback();
    };

    script.onerror = function () {
        console.log("There was an error loading the script.");
    };

    document.body.appendChild(script);
}

// Example usage:
loadScript("https://youtube.com", old);
