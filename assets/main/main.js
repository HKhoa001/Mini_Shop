  AOS.init();
// Quantity
document.addEventListener('DOMContentLoaded', () => {
  const minusButton = document.querySelector('.minus');
  const plusButton = document.querySelector('.plus');
  const valueDisplay = document.querySelector('.value-display');

  const min = 1;
  const max = 10;

  const updateButtons = () => {
      const value = parseInt(valueDisplay.textContent, 10);
      minusButton.disabled = value <= min;
      plusButton.disabled = value >= max;
  };

  minusButton.addEventListener('click', () => {
      const currentValue = parseInt(valueDisplay.textContent, 10);
      if (!isNaN(currentValue) && currentValue > min) {
          valueDisplay.textContent = currentValue - 1;
          updateButtons();
      }
  });

  plusButton.addEventListener('click', () => {
      const currentValue = parseInt(valueDisplay.textContent, 10);
      if (!isNaN(currentValue) && currentValue < max) {
          valueDisplay.textContent = currentValue + 1;
          updateButtons();
      }
  });

  updateButtons(); // Initialize buttons state
});


//Cart-shopping
const closeCart = document.getElementById("close-cart");
const shoppingCart = document.getElementById("cart-shoppping-as");
const countNumber = document.getElementById("countnum");

// Close the shopping cart
closeCart.addEventListener("click", () => {
    shoppingCart.classList.remove("visible");
});

// Toggle the shopping cart visibility
countNumber.addEventListener("click", () => {
    shoppingCart.classList.toggle("visible");
});