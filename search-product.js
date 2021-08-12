const products = [
    { name: 'samsung a52', price: '12000' },
    { name: 'asus zenphone', price: '40000' },
    { name: 'redmi note 10', price: '23000' },
    { name: 'oneplus 7', price: '47000' },
    { name: 'apple macbook air', price: '120000' }
]
function searchProduct(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProduct(products, 'z');
console.log(matched);