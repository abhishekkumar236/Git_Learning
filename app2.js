// Change font color to green for the 2nd item in the item list
let secondItem = document.querySelectorAll("#items li")[1];
secondItem.style.color = "green";

// Choose all odd elements and change their background to green
let oddItems = document.querySelectorAll("#items li:nth-child(odd)");
oddItems.forEach((item) => {
  item.style.backgroundColor = "green";
});
