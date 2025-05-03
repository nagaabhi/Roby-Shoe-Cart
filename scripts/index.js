import {
  nikeShoes,
  womenNikeShoes,
  nikeShoeCollections,
  allProducts,
} from "../data/products.js";
import { addToCart, cart } from "../data/cart.js";
const scrollToTop = document.querySelector(".js-scroll");

const notyf = new Notyf();

let loopNikeShoe = "";
let loopAllProducts = "";
let loopWomenShoe = "";
let loopNewCollections = "";
//Looping the products

nikeShoes.forEach((nikeShoe) => {
  loopNikeShoe += `

    <div class="products-container">
          <img src=${nikeShoe.image} alt="" />
          <h1>${nikeShoe.name}</h1>
          <p class="price">$${nikeShoe.price}</p>
          <button 
          data-product-name="${nikeShoe.name}"
          data-product-price="${nikeShoe.price}"
          data-product-image="${nikeShoe.image}"
          data-id="${nikeShoe.id}"
          data-desc="${nikeShoe.description}"
          data-ship="${nikeShoe.shipping}"
          data-tax="${nikeShoe.tax}"

          class="js-add-to-cart-button">Add to Cart &#x2192;</button>
          <p class="sale">Sale</p>
        </div>
  `;
});
document.querySelector(".products-container-one").innerHTML = loopNikeShoe;

womenNikeShoes.forEach((nikeShoe) => {
  loopWomenShoe += `
   <div class="products-container">
          <img src=${nikeShoe.image} alt="" />
          <h1>${nikeShoe.name}</h1>
          <p class="price">$${nikeShoe.price}</p>
          <button   
          data-product-name="${nikeShoe.name}"
          data-product-price="${nikeShoe.price}"
          data-product-image="${nikeShoe.image}"
          data-id="${nikeShoe.id}"
          data-desc="${nikeShoe.description}"
          data-ship="${nikeShoe.shipping}"
          data-tax="${nikeShoe.tax}"

          
          class="js-add-to-cart-button">Add to Cart &#x2192;</button>
          <p class="sale">Sale</p>
        </div>
  `;
});
document.querySelector(".women-products-container").innerHTML = loopWomenShoe;

nikeShoeCollections.forEach((nikeShoe) => {
  loopNewCollections += `
  <div class="new-collection-product">
          <img class="js-new-collection" src=${nikeShoe.image} alt="">
          <div class="add-to-cart-container">
          <button class="js-add-to-cart-button"
           data-product-name="${nikeShoe.name}"
          data-product-price="${nikeShoe.price}"
          data-product-image="${nikeShoe.image}"
          data-id="${nikeShoe.id}"
          data-desc="${nikeShoe.description}"
          data-ship="${nikeShoe.shipping}"
          data-tax="${nikeShoe.tax}"

          >Add to Cart</button>
          </div>
       
        </div>
   
  `;
});
document.querySelector(".collections-grid").innerHTML = loopNewCollections;

allProducts.forEach((product) => {
  loopAllProducts += `
    <div class="shoe-card">
          <img src="${product.image}" alt="Nike Air Max 90">
          <div class="shoe-info">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart js-add-to-cart-button"
               data-product-name="${product.name}"
              data-product-price="${product.price}"
              data-product-image="${product.image}"
              data-id="${product.id}"
              data-desc="${product.description}"
              data-ship="${product.shipping}"
              data-tax="${product.tax}"

            >
              Add to Cart
              <span class="arrow">→</span>
            </button>
          </div>
        </div>
  `;
});
document.querySelector(".all-products-container").innerHTML = loopAllProducts;

//Making products opacity dopwn
document.querySelectorAll(".js-new-collection").forEach((newCont) => {
  newCont.addEventListener("mouseover", () => {
    newCont.style.opacity = "0.2";
    newCont.style.transition = "all 0.5s ease-in-out";
  });
});

document.querySelectorAll(".js-new-collection").forEach((newCont) => {
  newCont.addEventListener("mouseleave", () => {
    newCont.style.opacity = "";
    newCont.style.transition = "all 0.5s ease-in-out";
  });
});

function handleCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    document.querySelector(".js-cart-Quantity").innerHTML = cartQuantity;
  });

  return cartQuantity;
}

document.querySelectorAll(".js-add-to-cart-button").forEach((button, idx) => {
  button.addEventListener("click", () => {
    const name = button.dataset.productName;
    const price = button.dataset.productPrice;
    const image = button.dataset.productImage;
    const desc = button.dataset.desc;
    const shipping = button.dataset.ship;
    const tax = button.dataset.tax;
    const id = button.dataset.id;
    let quantityVal = handleCartQuantity();
    console.log(quantityVal);
    addToCart(id, name, price, image, desc, shipping, tax, quantityVal);
    handleCartQuantity();
    notyf.success(`Id : ${id} Added to cart...`);
  });
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTop.style.visibility = "visible";
  } else {
    scrollToTop.style.visibility = "hidden";
  }
});
