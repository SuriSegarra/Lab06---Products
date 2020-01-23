import roundResult from '../common/utils.js';

function renderLineItem (lineItem, vacations) {
    const tr = document.createElement ('tr');

    const nameCell = document.createElement('td');
    nameCell.className = ('align-left');
    nameCell.textContent = vacations.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;

    tr.appendChild(quantityCell);
  
  
    const priceCell = document.createElement('td');
    priceCell.textContent = `$${roundResult(amount)}.00`;
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * vacations.price;
    totalCell.textContent = total;
    tr.appendChild(totalCell);

    return tr;
}
export default renderLineItem;