import vacations from './data/vacations.js';
import renderVacay from './render-vacation.js';

const list = document.getElementById('products');

const vacation = vacations[0];
console.log(vacation)
const dom = renderVacay(vacation);
list.appendChild(dom);