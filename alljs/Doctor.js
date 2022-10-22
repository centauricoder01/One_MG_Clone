        // FUNCTION TO SHOW POPUP IN THE WEBSITE 

document.getElementById("callbutton").addEventListener("click",callme);

let butt = document.getElementById("popup");

function callme(){ 
    butt.classList.add("open-popup");
}
document.getElementById("clickbtn").addEventListener("click",closefunc);
function closefunc(){ 
    butt.classList.remove("open-popup");
}

// MAIN FUNCTION OF THE WEBSITE 

let values = document.querySelectorAll(".images div");

for(let i = 0; i<values.length; i++){
    values[i].addEventListener("click",function(){
        if(i === 0){
            window.open("https://www.healthline.com/nutrition/27-health-and-nutrition-tips","_blank")
        }
        else if(i=== 1){
            window.open("https://www.aad.org/public/everyday-care/hair-scalp-care/hair/healthy-hair-tips","_blank")
        }
        else if(i=== 2){
            window.open("https://www.helpguide.org/harvard/tips-to-improve-your-sex-life.htm","_blank")
        }
        else if(i=== 3){
            window.open("https://brighamhealthhub.org/12-ways-to-stay-healthy-during-pregnancy/","_blank")
        }
        else if(i=== 4){
            window.open("https://www.healthline.com/nutrition/build-healthy-bones","_blank")
        }
        else if(i=== 5){
            window.open("https://dermacareclinics.in/","_blank")
        }
    })
}



