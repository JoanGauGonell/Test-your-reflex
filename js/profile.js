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
    userRecord: ""
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

    if (userName.style.borderColor == "green" && userAge.style.borderColor == "green") {
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
function getName() {
    let name = document.getElementById("userName").value;
    let actualName = document.getElementById("playerName");
    actualName.textContent = name;

}

let buttonNewUser = document.querySelector("#btnNewUser");
buttonNewUser.addEventListener("click", showProfile);

function showProfile() {
    location.reload();
}

function multi() {
    userNameValidation();
    getName();
    if (userName.style.borderColor == "green") {
        // dataStore();
        show();
    }
}

// function dataStore() {
//     let name = document.getElementById("userName").value;
//     let age = document.getElementById("userAge").value;
//     userObj.userName = name;
//     userObj.userAge = age;
//     playerName = name;
//     localStorage.setItem(name, JSON.stringify(userObj));

//     let actualName = document.getElementById("playerName");
//     actualName.textContent = playerName;

//     if (localStorage.getItem("usersList") == null) {
//         userList.push(userObj);
//         localStorage.setItem("usersList", JSON.stringify(userList));
//     } else {
//         userList = JSON.parse(localStorage.getItem("usersList"));
//         userList.push(userObj);
//         console.log(userList);
//         localStorage.setItem("usersList", JSON.stringify(userList));
//     }
// }

//TIMER
let secondsElapsed = 0;
let milisecElapsed = 0;

const buttonStart = document.querySelector("#gameStart");
buttonStart.addEventListener("click", startButton);

function startButton() {
    hideTitle();
    randomTimer();
    buttonStop.style.marginLeft = getRandom(0, 400 - 200) + 'px'; // 👈🏼 Horizontally
    buttonStop.style.marginTop = getRandom(0, 400 - 200) + 'px'; // 👈🏼 Vertically
    document.getElementById("playerNameStyle").style.justifyContent = "space-between";
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
        let secondsElapsed = 0;
        function timeElapsed() {
            milisecElapsed++;


            // console.log(milisecElapsed +"miliseconds");
            // console.log (secondsElapsed + "seconds")
        }
        let milisecondsElapsed = setInterval(timeElapsed, 10);
        buttonStop.addEventListener("click", multiFunction);

        function multiFunction() {
            printTime();
            dataStore();

        }
        function printTime() {
            clearInterval(milisecondsElapsed);
            let secondsElapsed = milisecElapsed / 100;
            userObj.userRecord = secondsElapsed;
            // console.log(milisecElapsed +"miliseconds");
            console.log(secondsElapsed + "seconds")
            // buttonStop.style.display="none";
            document.getElementById("myScore").textContent = secondsElapsed;
            // userObj.userRecord = secondsElapsed;
            localStorage.setItem(playerName, JSON.stringify(userObj));
        }
    }, randomSeconds);
    function dataStore() {

        let name = document.getElementById("userName").value;
        let age = document.getElementById("userAge").value;
        userObj.userName = name;
        userObj.userAge = age;
        // userObj.userRecord = localStorage.getItem ("playerName", JSON.parse(userObj.userRecord));
        playerName = name;
        localStorage.setItem(name, JSON.stringify(userObj));

        let actualName = document.getElementById("playerName");
        actualName.textContent = playerName;

        if (localStorage.getItem("usersList") == null) {
            userList.push(userObj);
            console.log(userList)
            localStorage.setItem("usersList", JSON.stringify(userList));
        } else {
            userList = JSON.parse(localStorage.getItem("usersList"));
            userList.push(userObj);
            console.log(userList);
            localStorage.setItem("usersList", JSON.stringify(userList));
        }
    }


}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



buttonStop.addEventListener("click", showFinishPage);

function showFinishPage() {
    document.querySelector(".button-end").style.display = "none";
    document.getElementById("displayFinish").style.display = "flex";
}


buttonStartAgain.addEventListener("click", showGame);

function showGame() {
    document.getElementById("displayFinish").style.display = "none";
    document.getElementById("gameStart").style.display = "flex";
    milisecElapsed = 0;
}


//SORT ARRAY
function sortArray() {
    userArray = JSON.parse(localStorage.getItem("usersList"));

    userArray.sort((a, b) => {
        return a.userRecord - b.userRecord;
    });
    // userList = userArray;
    console.log(userArray);
    
}


    

function createLi() {
    for (let i = 0; i < 10; i++) {
        textcontent = userArray[i].name;
        textContent = userArray[i].userRecord
    }
}


sortArray();