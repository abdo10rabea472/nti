let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}

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













  document.addEventListener('DOMContentLoaded', () => {
    $(".view-all-btn").on("click", function () {
      window.location.href = "all-products.html";
    });
  
    var modal = document.getElementById("quick-view-modal");
  
    var quickViewBtns = document.querySelectorAll(".quick-view-btn");
  
    var span = document.getElementsByClassName("close")[0];
  
    quickViewBtns.forEach(function (button) {
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
  
    let header = document.querySelector(".header");
    window.onscroll = function () {
      if (window.scrollY != 0) {
        header.style.background = "#e3e6f3";
      } else {
        header.style.background = null;
      }
    };
  
    const cartButtons = document.querySelectorAll('.cart');
        
    cartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const item = this.closest('.product');
        let divcontent = item.innerHTML;
                
        let storedge = localStorage.getItem("divcontent");
        if (!storedge) {
          storedge = [];
        } else {
          storedge = JSON.parse(storedge);
        }
                
        storedge.push(divcontent);
        localStorage.setItem('divcontent', JSON.stringify(storedge));
  
        let count = document.getElementById("counter");
        function startCount(el) {
          el.textContent++;
        }
        startCount(count);
      });
    });
  
    let disp = document.querySelector('.mynav');
    let toggleBtn = document.querySelector('#respons');
    toggleBtn.addEventListener('click', function(){
      if (toggleBtn.classList.contains('closit')) {
        disp.style.animation = "hide 3s forwards linear";
        toggleBtn.classList.remove('closit');
      } else {
        disp.style.display = "flex";
        disp.style.animation = "disp 3s forwards linear";
        toggleBtn.classList.add("closit");
      }
    });
  
    function assignUniqueIds(className) {
      const elements = document.querySelectorAll(`.${className}`);
      if (elements.length === 0) return;
      elements.forEach((element, index) => {
        const uniqueId = `${className}-${index + 1}`;
        element.id = uniqueId;
      });
    }
  
    assignUniqueIds('pro');
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