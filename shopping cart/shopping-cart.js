import cart from '../data/cart.js';
import vacations from '../data/vacations.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';

const tbody = document. querySelector('tbody');
const orderTotalCell = document.getElementById ('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const 
}