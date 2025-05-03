export const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

export function addToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(
  id,
  name,
  price,
  image,
  desc,
  shipping,
  tax,
  cartVal
) {
  let matching;
  cart.forEach((cartItem) => {
    if (cartItem.id === id) {
      matching = cartItem;
      console.log(cartItem.cartVal)
    }
  });

  if (matching) {
    matching.quantity += 1;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1,
      desc: desc,
      shipping: shipping,
      tax: tax,
      cartVal: cartVal,
    });
  }
  addToStorage();
  console.log(cart);
}
