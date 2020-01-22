import vacations from './data/vacations.js';
import renderVacay from './products/render-vacation.js';

const list = document.getElementById('products');

for (let i = 0; i < vacations.length; i++){
    const vacation = vacations[i];
    const dom = renderVacay(vacation);
    list.appendChild(dom);
}
