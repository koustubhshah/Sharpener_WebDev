document.querySelector("#basket-heading").style.color = "brown";

let fruitList = document.querySelectorAll(".fruits .fruit");

fruitList.forEach((fruit, index) => {
  if (index % 2 === 1) {
    fruit.style.backgroundColor = "brown";
    fruit.style.color = "white";
  }
});

let allFruits = document.querySelectorAll(".fruits li");

document.querySelectorAll("li").forEach(li => {
  li.style.fontStyle = "italic";
});
