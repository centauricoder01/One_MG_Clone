let slideIndexs = 1;
showSlides(slideIndexs);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndexs += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexs = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexs = 1
  }
  if (n < 1) {
    slideIndexs = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs - 1].style.display = "block";
  dots[slideIndexs - 1].className += " active";
}

// MAIN FUNCTION HAS BEEN STARTED FROM HERE.... 

let item = document.querySelectorAll(".products .healthshoping");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    switch (i) {
      case (0):
        window.open("https://www.1mg.com/categories/diabetes-1", "_blank");
        break;
      case (1):
        window.open("https://www.1mg.com/categories/health-conditions/cardiac-care-35", "_blank");
        break;
      case (2):
        window.open("https://www.1mg.com/categories/health-conditions/stomach-care-30", "_blank");
        break;
      case (3):
        window.open("https://www.1mg.com/categories/health-conditions/liver-care-39", "_blank");
        break;
      case (4):
        window.open("https://www.1mg.com/categories/health-conditions/kidney-care-40", "_blank");
        break;
      case (5):
        window.open("https://www.1mg.com/categories/health-conditions/bone-joint-muscle-care-34", "_blank");
        break;
      case (6):
        window.open("https://www.1mg.com/categories/health-conditions/pain-relief-32", "_blank");
        break;
    }
  })
}

let products = document.querySelectorAll(".featured div");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function () {
    window.open("./allhtml/items.html")
  })
}

let popular = document.querySelectorAll(".popular div");
for (let i = 0; i < popular.length; i++) {
  popular[i].addEventListener("click", function () {
    window.open("./allhtml/items.html")
  })
}

let monsoon = document.querySelectorAll(".monsoon div");
for (let i = 0; i < monsoon.length; i++) {
  monsoon[i].addEventListener("click", function () {
    window.open("./allhtml/items.html")
  })
}


let arr_obj = ['Health Resource Center',"Vitamins & Nutrition","Healthcare Devices","Personal Care","Health Conditions","Ayurveda Products","Homeopathy",'Featured',"Covid Essentials"]
let cate = ["oxygen","Hydrogen","Uranium"]
for(let i = 0; i<9; i++){
    let first = document.createElement("div");
    first.setAttribute("class","dropdown")

    let one = document.createElement("button");
    one.setAttribute("class","dropbtn")
    one.innerText = arr_obj[i];

    let two = document.createElement("div");
    two.setAttribute("class","dropdown-content")

    let three = document.createElement("a");
    three.innerText = cate[0];
    three.href = "#";

    let four = document.createElement("a");
    four.innerText = cate[1];
    four.href = "#";

    let five = document.createElement("a");
    five.innerText = cate[2];
    five.href = "#";

    two.append(three,four,five)
    first.append(one, two);
    document.getElementById("dropdownpart").append(first);
}