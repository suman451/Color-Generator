const getcolor = () => {
    // hex color
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode   = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode) //to copy i clipboard automatically
}

// evnt call
document.getElementById("btn").addEventListener (
    "click",
    getcolor
)

// initial Call
getcolor();