// VALIDATION USERNAME
const smallUserName = document.getElementById("errUserName");
let userName = document.getElementById("userName");

document.getElementById("contBtn").addEventListener("click", multi)


function errUserName(msg) {
    console.log("samllUserName", smallUserName);
    document.getElementById("userName").style.borderColor = "red";
    smallUserName.textContent = msg;
}



function userNameValidation() {
    if (userName.value == "") {
    errUserName("Input is empty!");
    }
    else if (userName.value.indexOf(" ") >= 0) {
    errUserName("Name has spaces");
    }
    else if (userName.value.length < 5) {
    errUserName("Username less then 5");
    } else if (userName.value.length > 20) {
    errUserName("Username more then 20");
    } else
    {
    userName.style.borderColor = "green";
    smallUserName.textContent = "";
    }
}



//RANKING Y DATA STORAGE
let button = document.querySelector("#contBtn");
let userObj = {
    userName:"",
    userAge:"",
    userRecord:"",
}

function dataStore()
{
        let name = document.getElementById("userName").value;
        let age = document.getElementById("userAge").value;
        userObj.userName = name;
        userObj.userAge= age;
        localStorage.setItem(name , JSON.stringify(userObj));

}
function show() {
    document.querySelector(".game").style.display = "flex";
    document.querySelector(".profile").style.display = "none";
}
function multi()
{
userNameValidation();

if ( userName.style.borderColor == "green")
    {
        dataStore();
        show();
    }
}



//TIMER
document.querySelector("#gameStart").addEventListener("click", randomTimer )
  function randomTimer (){
    let randomSeconds = Math.random()*10000;
    let intervalSeconds = setTimeout(function (){
        const gameStop = document.getElementById("gameStop");
        gameStop.style.display = "block";
        console.log("hello");
        }
    ,randomSeconds);}

