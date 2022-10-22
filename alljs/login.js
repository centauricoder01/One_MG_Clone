const codes = document.querySelectorAll(".num");

codes[0].focus()

codes.forEach((code,idx) =>{
    code.addEventListener("keydown",(e) =>{
        if(e.key >= 0 && e.key <= 9){
            codes[idx].value = "";
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 10);
        }
        else if(e.key === "Backspace"){
            setTimeout(() => {
                codes[idx -1].focus()
            }, 10);
        }
    })
})



document.querySelector("form").addEventListener("submit", callfirstfunc)

let values = document.querySelectorAll(".inputag .num");

function callfirstfunc(event) {
    event.preventDefault();

    for(let i = 0; i<values.length; i++){
        if(values[i].value === ""){
            return alert("Please enter Correct Value");
        }
        else{
            window.location.replace("items.html");
        }
    }
}
