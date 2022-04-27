// VALIDATION USERNAME
let playerName = "";
let smallUserName = document.getElementById("errUserName");
let userName = document.getElementById("userName");
let userAge = document.getElementById("userAge");
let smallUserAge = document.getElementById("errUserAge");
let buttonStop = document.querySelector("#gameEnd");
let buttonStartAgain = document.getElementById("buttonStartAgain");
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

function errUserAge(msg) {
    document.getElementById("userAge").style.borderColor = "red";
    smallUserAge.textContent = msg;
}

function userAgeValidation() {
    if (userAge.value == "") {
        errUserAge("Input is empty!");
    } else if (userAge.value.indexOf(" ") >= 0) {
        errUserAge("Age has spaces");
    } else if (userAge.value.length < 2) {
        errUserAge("UserAge less than 2");
    } else if (userAge.value.length > 2) {
        errUserAge("UserAge more then 2");
    } else {
        userAge.style.borderColor = "green";
        smallUserAge.textContent = "";
    }
}

function multi() {
    userNameValidation();
    userAgeValidation();

    if (userName.style.borderColor == "green" && userAge.style.borderColor == "green" ) {
        dataStore();
        show();
    }
}
//RANKING Y DATA STORAGE
let button = document.querySelector("#contBtn");

function show() {
    document.querySelector(".game").style.display = "flex";
    document.querySelector(".profile").style.display = "none";
}

let buttonNewUser = document.querySelector("#btnNewUser");
buttonNewUser.addEventListener("click", showProfile);

function showProfile() {
    location.reload();
}



function dataStore() {
    let name = document.getElementById("userName").value;
    let age = document.getElementById("userAge").value;
    userObj.userName = name;
    userObj.userAge = age;
    playerName = name;


    if (localStorage.getItem("usersList") == null) {
        userList.push(userObj);
        localStorage.setItem("usersList", JSON.stringify(userList));
    } else if (!localStorage.getItem(name)) {
        userList = JSON.parse(localStorage.getItem("usersList"));
        userList.push(userObj);
        localStorage.setItem("usersList", JSON.stringify(userList));
    }

    localStorage.setItem(name, JSON.stringify(userObj));

    let actualName = document.getElementById("playerName");
    actualName.textContent = playerName;
}

//TIMER
let secondsElapsed = 0;
let milisecElapsed = 0;

const buttonStart = document.querySelector("#gameStart");
buttonStart.addEventListener("click", startButton);

function startButton() {
    hideTitle();
    randomTimer();
    buttonStop.style.marginLeft= getRandom(0, 400 - 800)+'px'; // 👈🏼 Horizontally
    buttonStop.style.marginTop = getRandom(0, 300 - 600)+'px'; // 👈🏼 Vertically
    document.getElementById("playerNameStyle").style.justifyContent= "space-between";
}

function hideTitle() {
    document.getElementById("getReady").style.display = "none";
    document.getElementById("btnNewUser").style.display = "flex";
}

function randomTimer() {
    buttonStart.style.display = "none";
    let randomSeconds = Math.random() * 10000;
    let gameStop = document.querySelector(".button-end");
    let timeOutSeconds = setTimeout(function () {
        gameStop.style.display = "flex";

        function timeElapsed() {
            milisecElapsed++;
            let secondsElapsed = 0;
            if (milisecElapsed > 99) {
                secondsElapsed++;
                milisecElapsed = 0;
            }
        }
        let milisecondsElapsed = setInterval(timeElapsed, 10);
        buttonStop.addEventListener("click", printTime);

        function printTime() {
            clearInterval(milisecondsElapsed);
            console.log(milisecElapsed);
            console.log(secondsElapsed)

            userObj.userRecord = milisecElapsed;
            localStorage.setItem(playerName, JSON.stringify(userObj));
        }
    }, randomSeconds);
}

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);



buttonStop.addEventListener("click", showFinishPage);

function showFinishPage(){
    document.querySelector(".button-end").style.display= "none";
    document.getElementById("displayFinish").style.display= "flex";
}


buttonStartAgain.addEventListener("click", showGame);

function showGame(){
    document.getElementById("displayFinish").style.display= "none";
    document.getElementById("gameStart").style.display= "flex";
}

document.getElementById("muteSound").addEventListener("click", soundMute);

function soundMute(){
    document.getElementById("soundIntro").mute = true;
}
