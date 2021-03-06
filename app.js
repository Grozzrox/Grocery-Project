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
const total = document.querySelector('h4');

let counter = 0;
let newObj = {};
const itemArr = [];

function createObj(obj, i) {
    newObj.id = i;
    newObj.name = String(obj.dataset.name);
    newObj.price = String(obj.dataset.price);
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

function updateTotal(item) {
    counter = counter + (item.value * item.price);
    return counter;
}

function addItems() {
    for (let i = 0; i < itemArr.length; i++) {
        if (itemArr[i].value > 0) {
            const li = document.createElement("li");
            const spanOne = document.createElement("span");
            const spanTwo = document.createElement("span");
            const inputQty = document.createElement("input");
            inputQty.type = "text";
            li.classList.add("col-sm-4");
            spanOne.classList.add("col-sm-2");
            spanTwo.classList.add("col-sm-4");
            inputQty.classList.add("col-sm-2");
            inputQty.classList.add("text-center");
            li.textContent = itemArr[i].name;
            spanOne.textContent = 'Qty: ';
            inputQty.value = itemArr[i].value;
            spanTwo.textContent = `Price: $${itemArr[i].price}`;

            updateTotal(itemArr[i]);

            shoppingList.appendChild(li);
            shoppingList.appendChild(spanOne);
            shoppingList.appendChild(inputQty);
            shoppingList.appendChild(spanTwo);
            total.textContent = `Total : $${Math.round((counter + Number.EPSILON) * 100) / 100}`;

        }
    }
}

addToCart.addEventListener("click", addItems);