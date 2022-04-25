





document.querySelector("#gameStart").addEventListener("click", randomTimer )
  
function randomTimer (){
    let randomSeconds = Math.random()*10000;
    let intervalSeconds = setTimeout(function (){
        const gameStop = document.getElementById("gameStop");
        gameStop.style.display = "block";
        console.log("hello");
        }
    ,randomSeconds);

}