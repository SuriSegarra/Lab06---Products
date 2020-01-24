export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
} 

export function calcLineItem(quantity, price) {
    const amount = quantity * price;

    return amount;

}
export const roundResult = (amount) => {
    return Math.round(amount * 100) / 100;
};

export function calcLOrderTotal(cart, vacations) {
    let ordertotal = 0;
console.log(cart);
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i]; 
        const vacation = findById(vacations, lineItem.id);
        console.log(lineItem.id);

        const theTotal = calcLineItem(lineItem.quantity, vacation.price);
        ordertotal += theTotal;
    }
    return roundResult(ordertotal);
}