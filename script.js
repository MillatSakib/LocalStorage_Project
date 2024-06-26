const addProduct = () => {
    const productFeild = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productFeild.value;
    const quantity = quantityField.value;
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}

const clearData = () => {
    localStorage.clear();
    document.getElementById('product-container').innerHTML = ""
}

displayProductsFromLocalStorage();

*/ 
There has aslo some one another two localstorage methode. And that is remove and length. The syntax are given bellow

localStorage.removeItem('key')
localStorage.length();
*/