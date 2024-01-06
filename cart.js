let cart = [];

// Function to add items to the cart
function addToCart(image, price) {
  const newItem = {
    image: image,
    price: price,
  };
  cart.push(newItem);

  // Update the cart display (call a function or navigate to the cart page)
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  console.log("Updating cart display:", cart);
  // You can add logic here to update the cart display in the DOM
}

// cart.js
function updateCartDisplay() {
  // Get the cart items container element
  const cartItemsContainer = document.getElementById("cart-items");

  // Clear the existing content in the cart items container
  cartItemsContainer.innerHTML = "";

  // Iterate through each item in the cart
  cart.forEach((item) => {
    // Create a div element for the cart item
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    // Create an image element for the item
    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = "Item Image";
    cartItemDiv.appendChild(itemImage);

    // Create paragraphs for item details (you can customize this part)
    const itemName = document.createElement("p");
    itemName.textContent = "Item Name"; // Replace with actual item name
    const itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: $" + item.price.toFixed(2);

    // Append item details to the cart item div
    cartItemDiv.appendChild(itemName);
    cartItemDiv.appendChild(itemPrice);

    // Create a button to remove the item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-item");
    // Add a click event listener to remove the item from the cart
    removeButton.addEventListener("click", () => removeFromCart(item));
    cartItemDiv.appendChild(removeButton);

    // Append the cart item div to the cart items container
    cartItemsContainer.appendChild(cartItemDiv);
  });
}
