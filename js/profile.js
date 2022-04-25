let button = document.querySelector("#contBtn");
let userObj = {
    userName: "",
    userAge: "",
    userRecord: ""
}

button.addEventListener("click", function dataStore() {
    let name = document.getElementById("userName").value;
    let age = document.getElementById("userAge").value;
    userObj.userName = name;
    userObj.userAge = age;
    localStorage.setItem(name, JSON.stringify(userObj));
})

button.addEventListener("click", show)

function show() {
    document.querySelector(".display-game").style.display = "block";
    document.querySelector(".profile").style.display = "none";
}

document.querySelector("#gameStart").addEventListener("click", randomTimer)

function randomTimer() {
    let randomSeconds = Math.random() * 10000;
    let intervalSeconds = setTimeout(function () {
        const gameStop = document.getElementById("gameStop");
        gameStop.style.display = "block";
        console.log("hello");
    }, randomSeconds);
}