// cart.service.js

var cartItems = [];

const getCartItems = () => cartItems;

const addToCart = item => {
  const itemInCart = cartItems.find(currentItem => item.id === currentItem.id);
    console.log('adding to cart/',item,'/', itemInCart);
  if( itemInCart ) {
    console.log('itemInCart', itemInCart);
    itemInCart.quantity++;
  } else {
    console.log('cartItems:', cartItems);
    item.quantity = 1;
    cartItems.push(item);
    console.log('cartItems:', cartItems);
  }
}

const substractFromCart = item => {
  const itemInCart = cartItems.find(currentItem => item.id === currentItem.id);
    console.log('adding to cart/',item,'/', itemInCart);
  if( itemInCart ) {
    if( itemInCart.quantity > 1 ) {
      itemInCart.quantity--;
    } else {
      cartItems.splice(itemInCart, 1);
    }
  }
}

const spliceFromCart = item => {
  alert('itemId/',item)
  const itemIndex = cartItems.findIndex(item => item.id === itemId);
      cartItems.splice(itemIndex, 1);
}//spliceFromCart

const clearItem = itemId => {
  const itemIndex = cartItems.findIndex(item => item.id === itemId);
  if( itemIndex > -1 ) {
    cartItems.splice(itemIndex, 1);
  }
}

const getCartTotal = () => {
  return cartItems.reduce(( acc, item ) => {
    return acc + (item.quantity * item.price);
  }, 0);
}

export default {
  substractFromCart,
  getCartItems,
  clearItem,
  addToCart,
  getCartTotal
}

