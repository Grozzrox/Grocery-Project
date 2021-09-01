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
const addToCart = document.querySelector('.addToCart');
const shoppingList = document.querySelector('.shoppingList');


let newObj = {};
const itemArr = [];

function createObj(obj, i) {
    newObj.id = i;
    newObj.name = String(obj.id);
    newObj.value = Number(obj.value);
    itemArr.push(newObj);
    newObj = {};
}

for (let i=0; i < itemFields.length; i++) {
    createObj(itemFields[i], i);
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

        itemArr[i].value = itemArr[i].value + 1;
            itemFields[i].value = itemArr[i].value;
    });
}

function isZero(obj) {
    if (!obj.value) {
        obj.value ++;
        return obj;
    }
}

for (let i = 0; i < itemFields.length; i++) {
    minusBtns[i].addEventListener("click", function() {
        isZero(itemArr[i]);
        itemArr[i].value = itemArr[i].value - 1;
        itemFields[i].value = itemArr[i].value;
    });
}

function updateValue() {
    
    for (let i = 0; i < itemFields.length; i++) {
        if (itemFields[i] === event.target) {
            itemFields[i].setAttribute('value', event.target.value);
            itemArr[i].value = Number(itemFields[i].value);
        }
    }
}

for (let i = 0; i < itemArr.length; i++) {
    itemFields[i].addEventListener("input", updateValue);
}

function addItems() {
    for (let i = 0; i < itemArr.length; i++) {
        if (itemArr[i].value > 0) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            li.classList.add("col-sm-6");
            span.classList.add("col-sm-6");
            li.textContent = "Tomatoes";
            span.textContent = `Qty: ${itemArr[i].value} Price: $2.99`;

            shoppingList.appendChild(li);
            shoppingList.appendChild(span);

        }
    }
}

addToCart.addEventListener("click", addItems);