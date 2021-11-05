export const calculateTotal = (cart, itemNames, currencyFilter) => {
    let total = 0;

    const items = itemNames.map(name => {
        return cart[name]
    })

    const itemPrice = items.map(element => {
        return element.price * element.quantity
    });

    if (itemPrice.length > 0) {
        total = itemPrice.reduce((a, b) => a + b)
        total = total.toFixed(2)
    }
    total = convertToOtherCurrency(total, currencyFilter)

    return total
}

export const convertToOtherCurrency = (price, currencyFilter) => {
    switch (currencyFilter) {
        case 'CAD': {
            if(price>0){
                price = (price * 1.33).toFixed(2);
                return price;
            }
            return price
        }
            break;
        case 'EUR': {
            if(price>0){
                price = (price * 0.86).toFixed(2);
                return price;
            }
            return price
        }
            break;

        default:
            break;
    }
    return price
}

export const currencySymbol = (currencyFilter) => {
    switch (currencyFilter) {
        case 'EUR':
            return '€'

            break;

        default: return '$'
            break;
    }
}