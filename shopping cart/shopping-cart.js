import cart from '../data/cart.js';
import vacations from '../data/vacations.js';
import { findById, calcLOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tableBody = document. querySelector('tbody');
const orderTotalCell = document.getElementById ('order-total-cell');
const placeOrderBUtton = document.getElementById('place-order-button');

const json = localStorage.getItem('theCart');
let Thecart;
if(json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

cart.forEach(lineItem => {
    const foundVacation = findById(vacations, lineItem.id);
    //updateing the dom//
    const dom = renderLineItem(lineItem, foundVacation);
    
    tablebody.appendChild(dom);
    
});

const orderTotal = calcLOrderTotal (cart, vacations);
orderTotalCell.textContent = (orderTotal);

if (cart.length === 0){
    placeOrderBUtton.disable = true;
}
else{
    placeOrderBUtton.addEventListener('click' () => {
        localStorage.removeItem('theCart');
        alert('Order Places:\n' + JSON.stringify(cart, true, 2));
        window.location  '../';
    });
}