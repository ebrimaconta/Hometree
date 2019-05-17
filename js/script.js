export const basket = document.querySelectorAll('.items__toggles').length;
export const cart = document.querySelector('.sectionTwo__error');
export let products = document.querySelectorAll('.items__product');
window.onload = function() {

    products.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('items__toggles');
        });
    });

    function addToBasket() {


        if (basket === 0) {

            cart.innerHTML += "Please select one or more item.";
        } else {

            const cart = document.querySelector('#cart__circle');
            cart.className = "cart__number";
            cart.innerHTML = basket;
            if (basket >= 10) {
                cart.style.paddingLeft = "4px";
            } else {
                cart.style.paddingLeft = "7px";
            }
        }
    }
    document.getElementById("sectionTwo__button").addEventListener("click", addToBasket);
};