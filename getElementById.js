const mainHeading = document.getElementById("main-heading");
mainHeading.innerHTML = "Fruit World";
mainHeading.style.color = "orange";

const header  = document.getElementById("header");
header.style.background = "green";
header.style.borderBottom = "5px solid orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanks  = document.getElementById("thanks"); 
const p = document.createElement("p");
const text = document.createTextNode("Please visit us again");
p.appendChild(text);
thanks.appendChild(p);
