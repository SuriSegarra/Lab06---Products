import { findById } from '../common/utils.js';

function renderVacay(vacay) {

    const li = document.createElement('li');
    li.className = vacay.category;
    li.title = vacay.description;
    
    const img = document.createElement('img');
    img.src = vacay.image;
    img.className = 'image-style';
    img.alt = vacay.name + ' image';
    
    const imgDiv = document.createElement('div');
    imgDiv.className = 'image-div';
    li.appendChild(imgDiv);
    imgDiv.appendChild(img);    

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    li.appendChild(cardBody);

    const h2 = document.createElement('h2');
    h2.textContent = vacay.name;
    cardBody.appendChild(h2);
    
    const p = document.createElement('p');
    p.className = 'price';
    const usd = '$' + vacay.price.toFixed(2);
    p.textContent = usd;
    cardBody.appendChild(p);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = vacay.id;
    cardBody.appendChild(button);
   
    button.addEventListener('click', () => {

        let json = localStorage.getItem('theCart');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }  
        else{
            cart = [];
        }
        let lineItem = findById(cart, vacay.id);

        if (!lineItem) {
            lineItem = {
                id: vacay.id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }
        json = JSON.stringify(cart);
        localStorage.setItem('theCart', json);
        
        alert('1 ' + vacay.name + 'added to cart');

    });

    p.appendChild(button);
    li.appendChild(p);
    
    return li;
}

export default renderVacay;
