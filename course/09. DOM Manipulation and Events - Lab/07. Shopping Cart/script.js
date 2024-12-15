function solve() {
  const shoppingCart = document.querySelector('.shopping-cart');
  const outputEl = document.querySelector('textarea');

  const cart = [];

  function addToCart(e) {
    const row = e.target.closest('.product');

    const data = {
      name: row.querySelector('.product-details div').textContent,
      picture: row.querySelector('.product-image img'),
      price: Number(row.querySelector('.product-line-price').textContent),
    };

    cart.push(data);

    outputEl.value += `Added ${data.name} for ${data.price.toFixed(2)} to the cart.\n`;
  }

  function printResult() {
    const productNames = [];
    let totalPrice = 0;

    cart.forEach(el => {
      if (!productNames.includes(el.name)) {
        productNames.push(el.name);
      }

      totalPrice += el.price;
    });

    outputEl.value += `You bought ${productNames.join(', ')} for ${totalPrice.toFixed(2)}.`;
  }

  function manageEvent(e) {
    if (e.target.textContent.trim() === 'Add') {
      addToCart(e);
    } else if (e.target.textContent.trim() === 'Checkout') {
      printResult();

      shoppingCart.removeEventListener('click', manageEvent);
    }
  }

  shoppingCart.addEventListener('click', manageEvent);
}