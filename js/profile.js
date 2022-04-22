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


