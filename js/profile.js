// VALIDATION USERNAME
let playerName = "";
let smallUserName = document.getElementById("errUserName");
let userName = document.getElementById("userName");
let userList = [];

let userObj = {
    userName: "",
    userAge: "",
    userRecord: "",
};

document.getElementById("contBtn").addEventListener("click", multi);

function errUserName(msg) {
    document.getElementById("userName").style.borderColor = "red";
    smallUserName.textContent = msg;
}

function userNameValidation() {
    if (userName.value == "") {
        errUserName("Input is empty!");
    } else if (userName.value.indexOf(" ") >= 0) {
        errUserName("Name has spaces");
    } else if (userName.value.length < 5) {
        errUserName("Username less then 5");
    } else if (userName.value.length > 20) {
        errUserName("Username more then 20");
    } else {
        userName.style.borderColor = "green";
        smallUserName.textContent = "";
    }
}

//RANKING Y DATA STORAGE
let button = document.querySelector("#contBtn");
function show() {
    document.querySelector(".game").style.display = "flex";
    document.querySelector(".profile").style.display = "none";
}

let buttonNewUser = document.querySelector("#btnNewUser");
buttonNewUser.addEventListener("click",showProfile);
function showProfile(){
    document.querySelector(".game").style.display = "none";
    document.querySelector(".profile").style.display = "flex";
    document.querySelector("#userName").value= "";
    document.querySelector("#userAge").value= "";

}

function multi() {
    userNameValidation();

    if (userName.style.borderColor == "green") {
        dataStore();
        show();
    }
}

function dataStore() {
    let name = document.getElementById("userName").value;
    let age = document.getElementById("userAge").value;
    userObj.userName = name;
    userObj.userAge = age;
    playerName = name;
    localStorage.setItem(name, JSON.stringify(userObj));

    let actualName = document.getElementById("playerName");
    actualName.textContent = playerName;

    if (localStorage.getItem("usersList") == null) {
        userList.push(userObj);
        localStorage.setItem("usersList", JSON.stringify(userList));
    } else {
        userList = JSON.parse(localStorage.getItem("usersList"));
        userList.push(userObj);
        console.log(userList);
        localStorage.setItem("usersList", JSON.stringify(userList));
    }
}

//TIMER
let secondsElapsed = 0;
let milisecElapsed = 0;

const buttonStart = document.querySelector("#gameStart");
buttonStart.addEventListener("click", startButton);

function startButton() {
    hideTitle();
    randomTimer();
}

function hideTitle() {
    document.getElementById("titleGetReady").style.display = "none";
}

function randomTimer() {
    buttonStart.style.display = "none";
    let randomSeconds = Math.random() * 10000;
    let gameStop = document.querySelector(".button-end");
    let timeOutSeconds = setTimeout(function () {
        gameStop.style.display = "flex";

        function timeElapsed() {
            milisecElapsed++;
        }
        let milisecondsElapsed = setInterval(timeElapsed, 1000);
        let buttonStop = document.querySelector("#gameEnd");
        buttonStop.addEventListener("click", printTime);

        function printTime() {
            clearInterval(milisecondsElapsed);
            console.log(milisecElapsed);
            // userObj.userRecord=milisecElapsed;
            // console.log(milisecElapsed);
            // console.log(secondsElapsed)
            userObj.userRecord = milisecElapsed;
            // let name = userObj.userName;
            localStorage.setItem(playerName, JSON.stringify(userObj));
        }
    }, randomSeconds);
}