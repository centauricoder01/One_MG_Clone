document.querySelector("form").addEventListener("submit", callfirstfunc)

function callfirstfunc(event) {
    event.preventDefault()
    let mobile = document.getElementById("name").value
    if(mobile.length > 10 || mobile.length < 10 ){
        return alert("Please Enter Correct Number")
    }
    else{
        window.location.replace("login.html")
    }

} 