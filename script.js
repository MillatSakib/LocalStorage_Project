const addProduct = () => {
    const productFeild = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productFeild.value;
    const quantity = quantityField.value;
    displayProduct(product, quantity);

}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}