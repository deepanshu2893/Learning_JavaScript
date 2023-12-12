const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})