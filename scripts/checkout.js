import { cart, addToStorage } from "../data/cart.js";
import { filterMoney } from "./utils/money.js";
const displaySubTotal = document.querySelector(".js-display-sub-total");
const displayTotalAmount = document.querySelector(".js-display-total");
const shipping = document.querySelector(".js-shipping");
const tax = document.querySelector(".js-tax");
const showEmptyMessage = document.querySelector(".js-show-emoty-message");

console.log(cart);

let loopCartItems = "";
let shippingVal = 0;
let taxVal = 0;
let subTotal = 0;
let totalAmount = 0;

cart.forEach((cartItem) => {
  shippingVal += Number(cartItem.shipping);
  taxVal += Number(cartItem.tax);
  subTotal += Number(cartItem.price);
  totalAmount = shippingVal + taxVal + subTotal;

  displayTotalAmount.innerHTML = `$${filterMoney(totalAmount)}`;
  shipping.innerHTML = `$${filterMoney(shippingVal)}`;
  tax.innerHTML = `$${filterMoney(taxVal)}`;
  displaySubTotal.innerHTML = `$${filterMoney(subTotal)}`;

  loopCartItems += `
      <div class="left-cart-container">
          <div class="sub-left">
            <div class="cart-image">
              <img src=${cartItem.image} />
            </div>
          </div>
          <div class="sub-right">
            <h1>${cartItem.name}</h1>
            <p>
              ${cartItem.desc}
            </p>
            <select class="js-select-size" name="" id="">
              <option value="Size">Size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select class="js-select-quantity" name="" id="">
              <option value="" disabled selected>Select Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
             
            </select>

            <div class="remove-button">
              <button class="js-remove-item">Remove Item</button>
            </div>
          </div>
        </div>
  `;
});

document.querySelector(".js-cart-container").innerHTML = loopCartItems;

document.querySelectorAll(".js-remove-item").forEach((cartItem, idx) => {
  cartItem.addEventListener("click", () => {
    cart.splice(idx, 1);
    addToStorage();
    location.reload();
  });
});

document.querySelectorAll(".js-select-size").forEach((size) => {
  size.addEventListener("change", () => {});
});

document.querySelectorAll(".js-select-quantity").forEach((quantity) => {
  quantity.addEventListener("change", () => {
    let quantityVal = Number(quantity.value);
    console.log(quantityVal);
    displaySubTotal.innerHTML = `$${subTotal * quantityVal}`;
  });
});

if (cart.length === 0) {
  showEmptyMessage.style.display = "flex";
} else {
  showEmptyMessage.style.display = "none";
}
