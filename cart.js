const shoppingCart = [
    { name: 'Áo thun', price: 15, quantity: 2 },
    { name: 'Quần Jeans', price: 50, quantity: 1 },
    { name: 'Giày thể thao', price: 80, quantity: 1 },
];


function calculateCartTotal(cartItems) {
    return cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

console.log(calculateCartTotal(shoppingCart));


function getCartSummary(cartItems) {
    return cartItems.map(item => `${item.quantity} x ${item.name} - $${item.price * item.quantity}`);
}

console.log(getCartSummary(shoppingCart));