$(document).ready(function() {
    $('.header').height($(window).height());
});

const loginButton = document.getElementById('loginButton');
const shoppingCart = document.getElementById('shoppingCart');

loginButton.addEventListener("click", function() {
    $('#loginModal').modal('show');
})

shoppingCart.addEventListener("click", function() {
    $('#cartModal').modal('show');
})