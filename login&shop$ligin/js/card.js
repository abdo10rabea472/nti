document.addEventListener('DOMContentLoaded', function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartTableBody = document.getElementById('cart-items');
    let cartSubtotalElement = document.getElementById('cart-subtotal');
    let cartTotalElement = document.getElementById('cart-total');

    function parsePrice(price) {
        return parseFloat(price.replace(/[^0-9.-]+/g,""));
    }

    function renderCart() {
        cartTableBody.innerHTML = '';
        let cartSubtotal = 0;

        cartItems.forEach((item, index) => {
            let row = document.createElement('tr');
            let itemPrice = parsePrice(item.price);
            row.innerHTML = `
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
                <td><img src="${item.image}" alt="${item.name}" width="50" height="50"></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><input type="number" value="1" class="quantity-input" data-index="${index}"></td>
                <td class="item-subtotal">${itemPrice.toFixed(2)}</td>
            `;
            cartTableBody.appendChild(row);
            cartSubtotal += itemPrice;
        });

        cartSubtotalElement.innerText = `$${cartSubtotal.toFixed(2)}`;
        cartTotalElement.innerText = `$${cartSubtotal.toFixed(2)}`;
    }

    function updateCartTotal() {
        let subtotals = document.querySelectorAll('.item-subtotal');
        let newSubtotal = 0;

        subtotals.forEach(subtotal => {
            newSubtotal += parseFloat(subtotal.innerText);
        });

        cartSubtotalElement.innerText = `$${newSubtotal.toFixed(2)}`;
        cartTotalElement.innerText = `$${newSubtotal.toFixed(2)}`;
    }

    function applyCoupon() {
        let couponCode = document.getElementById('coupon-code').value;
        let storedCouponCode = localStorage.getItem('couponCode');
        let discountPercentage = parseFloat(localStorage.getItem('discountPercentage')) || 0;

        if (couponCode === storedCouponCode) {
            let subtotal = parseFloat(cartSubtotalElement.innerText.replace('$', ''));
            let discount = (discountPercentage / 100) * subtotal;
            let newTotal = subtotal - discount;

            cartTotalElement.innerText = `$${newTotal.toFixed(2)}`;
            document.getElementById('cart-discount').innerText = `$${discount.toFixed(2)}`;
        } else {
            alert('Invalid coupon code');
        }
    }

    cartTableBody.addEventListener('change', function(event) {
        if (event.target.classList.contains('quantity-input')) {
            let index = event.target.getAttribute('data-index');
            let quantity = parseInt(event.target.value);
            let price = parsePrice(cartItems[index].price);
            let subtotal = price * quantity;

            event.target.closest('tr').querySelector('.item-subtotal').innerText = subtotal.toFixed(2);
            updateCartTotal();
        }
    });

    cartTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            let index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCart();
        }
    });

    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);

    document.getElementById('print-button').addEventListener('click', function() {
        window.print();
    });

    renderCart();
});
