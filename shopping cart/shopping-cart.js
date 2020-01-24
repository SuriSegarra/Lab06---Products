import cart from '../data/cart.js';
import vacations from '../data/vacations.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document. querySelector('tbody');
const orderTotalCell = document.getElementById ('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const vacation = findById(vacations, lineItem.id);
    const dom = renderLineItem(lineItem, vacation);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, vacation);
orderTotalCell.textContent = toUSD(orderTotalCell);