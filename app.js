let listItems = document.querySelectorAll(".list-group-item");

listItems[2].style.backgroundColor = "green";

listItems.forEach((element) => {
  element.style.fontWeight = "bold";
});
