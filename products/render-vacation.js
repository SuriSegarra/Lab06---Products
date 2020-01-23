function renderVacay(vacay) {
    const li = document.createElement('li');
    li.className = vacay.category;
    

    const h3 = document.createElement('h3');
    h3.textContent = vacay.name;
    li.appendChild(h3);

    const descriptions = document.createElement('description');
    descriptions.textContent = vacay.description;
    li.appendChild(descriptions);
    

    const img = document.createElement('img');
    img.src = vacay.image;
    img.alt = vacay.name + ' image';
    li.appendChild(img);



    const p = document.createElement('p');
    p.className = 'price';
    const usd = '$' + vacay.price.toFixed(2);
    p.textContent = usd;

 
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = vacay.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderVacay;
