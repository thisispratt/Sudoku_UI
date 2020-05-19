var tds = document.querySelectorAll(".cell input");
var clearButton = document.querySelector("#clear");
var solveButton = document.querySelector("#solve");

for(let i = 0; i < tds.length; i++){
    
    tds[i].addEventListener("click", function(){
         
         tds.forEach((td) => td.classList.remove("highlighted-cell"));
         
         tds[i].classList.add("highlighted-cell"); 
    });
    
}    

clearButton.addEventListener("click", () => {
    tds.forEach((td)=> td.value = "");
});

solveButton.addEventListener("click", ()=> {
    console.log("solve function to be called, value of all the inputs to set after successful return.");
});