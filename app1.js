// Adding a new li element without the same class name using getElementsByClassName
let items1 = document.getElementsByClassName("list-group-item")[0];
let newItem1 = document.createElement("li");
newItem1.textContent = "New Item";
items1.appendChild(newItem1);

// Adding a new li element without the same class name using getElementsByTagName
let items2 = document.getElementsByTagName("ul")[0];
let newItem2 = document.createElement("li");
newItem2.textContent = "New Item";
items2.appendChild(newItem2);
