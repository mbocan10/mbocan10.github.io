// JavaScript Object
let store = {
  name: "GameHub",
  category: "Gaming",
  display: function() {
    return this.name + " - " + this.category;
  }
};
console.log(store.display());

// CART (Session Storage)
function addToCart(name, price) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push({name, price});
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
}

// LOAD CART
function loadCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let list = document.getElementById("cartList");

  if (!list) return;

  list.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
  });
}

// CLEAR CART
function clearCart() {
  sessionStorage.removeItem("cart");
  loadCart();
}

// FORM VALIDATION
function validateForm() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Enter your name");
    return false;
  }
  return true;
}

// LOGIN (no saving)
function loginUser() {
  alert("Login submitted (not saved)");
}

// LOAD CART ON PAGE OPEN
window.onload = loadCart;