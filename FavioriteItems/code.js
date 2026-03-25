let favoriteItems = [
    "Phone",
    "Games",
    "Music",
    "Baseball",
    "PC",
    "Dogs",
    "Headphones",
    "Shoes",
    "Cars",
    "Food"
];


let list = document.getElementById("itemList");

for (let i = 0; i < favoriteItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = favoriteItems[i];
    list.appendChild(li);
}