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
const itemArr = {};

for (let i = 0; i < itemFields.length; i++) {
    itemArr[itemFields[i].id] = itemFields[i].value;
}

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
        //itemCount++;
        //itemFields[i].value = itemCount;

        if (i === 0) {
            itemArr.tomatoField = Number(itemArr.tomatoField) + 1;
            itemFields[i].value = itemArr.tomatoField;
        }
        else if (i === 1) {
            itemArr.cornField = Number(itemArr.cornField) + 1;
            itemFields[i].value = itemArr.cornField;
        }
        else if (i === 2) {
            itemArr.broccoliField = Number(itemArr.broccoliField) + 1;
            itemFields[i].value = itemArr.broccoliField;
        }
        else if (i === 3) {
            itemArr.potatoField = Number(itemArr.potatoField) + 1;
            itemFields[i].value = itemArr.potatoField;
        }
        else if (i === 4) {
            itemArr.lettuceField = Number(itemArr.lettuceField) + 1;
            itemFields[i].value = itemArr.lettuceField;
        }
    });
}

for (let i = 0; i < itemFields.length; i++) {
    minusBtns[i].addEventListener("click", function() {
        if (i === 0) {
            itemArr.tomatoField = Number(itemArr.tomatoField) - 1;
            itemFields[i].value = itemArr.tomatoField;
        }
        else if (i === 1) {
            itemArr.cornField = Number(itemArr.cornField) - 1;
            itemFields[i].value = itemArr.cornField;
        }
        else if (i === 2) {
            itemArr.broccoliField = Number(itemArr.broccoliField) - 1;
            itemFields[i].value = itemArr.broccoliField;
        }
        else if (i === 3) {
            itemArr.potatoField = Number(itemArr.potatoField) - 1;
            itemFields[i].value = itemArr.potatoField;
        }
        else if (i === 4) {
            itemArr.lettuceField = Number(itemArr.lettuceField) - 1;
            itemFields[i].value = itemArr.lettuceField;
        }
    });
}