let inputForm = document.querySelectorAll("#formProfile input")
let button = document.querySelector("#contBtn");
let userName = ""
let userAge = ""
const userObj = {
    username:"",
    userAge:"",
    userRecord:""
}

button.addEventListener("click", function dataStore()
{
     inputForm.forEach(element => {
         if (element.name == "userName"){

         }
         console.log(element.value);
        
    });

})
button.addEventListener("click",  show)
function show() {
    document.querySelector(".display-game").style.display = "block";
    document.querySelector(".profile").style.display = "none";
}

// addEventListener.button("click", )
// function 

document.querySelector("#gameStart").addEventListener("click", randomTimer )
  
function randomTimer (){
    let randomSeconds = Math.random()*10000;
    let intervalSeconds = setTimeout(function (){
        const gameStop = document.getElementById("gameStop");
        gameStop.style.display = "block";
        console.log("hello");
        }
    ,randomSeconds);}