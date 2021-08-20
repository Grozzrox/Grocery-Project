$(document).ready(function() {
    $('.header').height($(window).height());
});

const loginButton = document.getElementById('loginButton');
const shoppingCart = document.getElementById('shoppingCart');
const carouselItems = document.querySelectorAll('.carousel-item');
const foodCards = document.querySelectorAll('.foodCard');
const foodModals = document.querySelectorAll('.foodModal');
const produceModal = document.querySelector('#produceModal');

loginButton.addEventListener("click", function() {
    $('#loginModal').modal('show');
})

shoppingCart.addEventListener("click", function() {
    $('#cartModal').modal('show');
})

for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].addEventListener("click", () => $('.carousel').carousel('pause') );
}

$('.carousel').carousel({
    interval: 5000
});

for (let i = 0; i < foodCards.length; i++) {
    foodCards[i].addEventListener("click", function() {
        $(foodModals[i]).modal('show');
    });
}
