let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}

// ================
function assignUniqueIds(className) {
    // الحصول على جميع العناصر التي تحتوي على الكلاس المحدد
    const elements = document.querySelectorAll(`.${className}`);

    // التأكد من وجود عناصر
    if (elements.length === 0) {
        console.log(`No elements found with class: ${className}`);
        return;
    }

    // تعيين معرّف فريد لكل عنصر
    elements.forEach((element, index) => {
        // إنشاء معرّف فريد بناءً على الفهرس
        const uniqueId = `${className}-${index + 1}`;
        
        // تعيين المعرّف للعنصر
        element.id = uniqueId;
    });

    console.log(`Assigned IDs to elements with class: ${className}`);
}

// مثال على استخدام الدالة
assignUniqueIds('pro');
// ================


// ====================
let port=document.querySelectorAll(".banner-box");
let imgArray=[`url('./img/banner/b2.jpg')`,
    `url('./img/banner/b3.jpg')`,
    `url('./img/banner/b4.jpg')`,
    `url('./img/banner/b5.jpg')`,
    `url('./img/banner/b6.jpg')`,
    `url('./img/banner/b7.jpg')`
]
let currentindex=0;
port.forEach((item)=>{
    item.style.backgroundImage=imgArray[currentindex];
    currentindex=(currentindex+1)%imgArray.length
})

// ===================













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
          window.location.href = './login&shop$ligin/login.html'; // Redirect to sign-in page
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








