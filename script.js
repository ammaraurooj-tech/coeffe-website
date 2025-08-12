document.getElementById("hamburger").addEventListener("click", function(){
    document.querySelector("nav").classList.toggle("active");
});



let buttons = document.querySelectorAll('.add-to-cart');
let cartBadge = document.getElementById('cart-badge');
let cart = [];

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    cart.push('item'); // You can add product info here
    cartBadge.textContent = cart.length;
  });
});

