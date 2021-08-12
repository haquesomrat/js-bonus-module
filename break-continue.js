const products = [
    { name: 'samsung a52', price: '120000' },
    { name: 'asus zenphone', price: '40000' },
    { name: 'redmi note 10', price: '2300' },
    { name: 'oneplus 7', price: '47000' },
    { name: 'apple macbook air', price: '120000' }
];
for (const product of products) {
    if (product.price < 15000) {
        break;
    }
    console.log(product);
}


// for (const product of products) {
//     if (product.price < 15000) {
//         continue;
//     }
//     console.log(product);
// }