$(document).ready(function() {
    $('.header').height($(window).height());
});

const loginButton = document.getElementById('loginButton');
const shoppingCart = document.getElementById('shoppingCart');
const carouselItems = document.querySelectorAll('.carousel-item');
const foodCards = document.querySelectorAll('.foodCard');
const foodModals = document.querySelectorAll('.foodModal');
const produceModal = document.querySelector('#produceModal');
const itemFields = document.querySelectorAll('.itemField');
const addBtns = document.querySelectorAll('#button-addon2');
const minusBtns = document.querySelectorAll('#button-addon1');

let itemCount = 0;

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

for (let i = 0; i < itemFields.length; i++) {
    addBtns[i].addEventListener("click", function() {
        itemCount++;
        itemFields[i].value = itemCount;
    });
}

for (let i = 0; i < itemFields.length; i++) {
    minusBtns[i].addEventListener("click", function() {
        itemCount --;
        itemFields[i].value = itemCount;
    });
}