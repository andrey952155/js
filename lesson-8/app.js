'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});




let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

// 5. Поставил в js обработчик на открытие/закрытие окна корзины (ставлю/снимаю)
// класс hidden у элемента с классом basket при клике на элемент с классом
// cartIconWrap.
const basketImg = document.querySelector('.cartIcon');
const basketEl = document.querySelector('.basket')
basketImg.addEventListener('click', function() {
    if (basketEl.classList.contains('hidden')) {
        basketEl.classList.remove('hidden');
        renderNewProductInBasket(productId)
    } else {
        basketEl.classList.add('hidden')
    }
});

// 6. Создал пустой объект, который в памяти страницы будет хранить добавленные
// товары:
/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это товар в корзине - объект, содержащий
 * id, название товара, цену, и количество штук, например:
 * {
 *    1: {id: 1, name: "product 1", price: 30, count: 2},
 *    3: {id: 3, name: "product 3", price: 25, count: 1},
 * }
 */
const basket = {};

const allCart = document.querySelector('.featuredItems');
allCart.addEventListener('click', function (event) {
    if (event.target.closest('button')) {
        const cartEl = event.target.closest('.featuredItem');
        const id = cartEl.dataset.id;
        const name = cartEl.dataset.name;
        const price = cartEl.dataset.price;
        addCard(id, name, price);
    } 
});

function addCard(id, name, price) {
    basket[id] = {id: id, name: name, price: price, count: 0};
    console.log(basket)
}

function renderNewProductInBasket(productId) {
    const productRow = `
      <div class="basketRow" data-id="${productId}">
        <div>${basket[productId].name}</div>
        <div>
          <span class="productCount">${basket[productId].count}</span> шт.
        </div>
        <div>$${basket[productId].price}</div>
        <div>
          $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
        </div>
      </div>
      `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
  }