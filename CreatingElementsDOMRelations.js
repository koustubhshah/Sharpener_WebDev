let headerDiv = document.getElementById("header");
let subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
headerDiv.appendChild(subHeading);

let secondDiv = document.querySelector("div:nth-child(2)");
let totalFruitsParagraph = document.createElement("p");
totalFruitsParagraph.textContent = "Total fruits: 4";
totalFruitsParagraph.id = "fruits-total";
secondDiv.insertBefore(totalFruitsParagraph, secondDiv.firstChild);
