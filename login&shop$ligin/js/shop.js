let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".view-all-btn").on("click", function () {
    window.location.href = "all-products.html";
  });

  var modal = document.getElementById("quick-view-modal");

  var btn = document.querySelectorAll(".quick-view-btn");

  var span = document.getElementsByClassName("close")[0];

  btn.forEach(function (button) {
    button.onclick = function () {
      var productDescription = $(this)
        .closest(".product")
        .find(".details .desck")
        .html();
      document.getElementById("product-description").innerHTML =
        productDescription;
      modal.style.display = "block";
    };
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});





document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cart');
  const cartDropdown = document.querySelector('.cart-dropdown');
  const counter = document.getElementById("counter");

  // Function to add product to cart
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      if (localStorage.getItem('loggedIn') === 'true') { // Check if user is logged in
        const item = this.closest('.product');
        let itemData = {
          image: item.querySelector('img').src,
          name: item.querySelector('h5').innerText,
          price: item.querySelector('h4').innerText,
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(itemData);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update item count in cart
        counter.textContent = cartItems.length;
      } else {
        alert("Please sign in to add items to the cart.");
        window.location.href = '../login&shop$ligin/login.html'; // Redirect to sign-in page
      }
    });
  });

  // Function to update cart dropdown and total price
  function updateCartDropdown() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartDropdown.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
      cartDropdown.innerHTML = '<p>No products in cart.</p>';
    } else {
      cartItems.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" width="50" height="50">
          <div>
            <p>${item.name}</p>
            <p>${item.price}</p>
          </div>
        `;
        cartDropdown.appendChild(cartItem);

        // Calculate total price
        let price = parseFloat(item.price.replace('LE ', '').replace(',', ''));
        total += price;
      });

      // Add total price to dropdown
      let totalDiv = document.createElement('div');
      totalDiv.classList.add('cart-summary');
      totalDiv.innerHTML = `
        <p>Total: <span id="cart-total">LE ${total.toFixed(2)}</span></p>
        <button id="clear-cart">Clear Cart</button>
      `;
      cartDropdown.appendChild(totalDiv);

      // Add clear cart functionality
      document.getElementById('clear-cart').addEventListener('click', function () {
        localStorage.removeItem('cartItems');
        updateCartDropdown(); // Update dropdown after clearing
        counter.textContent = 0; // Update item count
      });
    }
  }

  // Show dropdown on hover
  document.querySelector('.lg-bag').addEventListener('mouseenter', function () {
    updateCartDropdown(); // Update content before showing
    cartDropdown.style.display = 'block';
  });

  // Hide dropdown on mouse leave
  document.querySelector('.lg-bag').addEventListener('mouseleave', function () {
    cartDropdown.style.display = 'none';
  });
});
let disp=document.querySelector('.mynav');
let btn=document.querySelector('#respons');
btn.addEventListener('click',function(){
    if(btn.classList.contains('closit')){
        disp.style.animation="hide 3s forwards linear";
        btn.classList.remove('closit');
    }else{
        disp.style.display="flex";
        disp.style.animation="disp 3s forwards linear";
        btn.classList.add("closit")
    }
})