document.write(`<ul>`)
for (let i = 0; i < 10; i++) {
    document.write(`<li>block</li>`)
}
document.write(`</ul>`);

document.write(`<ul>`)
for (let i = 0; i < 10; i++) {
    document.write(`<li>block ${i} </li>`)
}
document.write(`</ul>`);


let i = 0;
while (i < 20) {
    document.write(`<h1>hello</h1>`)
    i++;
}


let с = 0;
while (с < 20) {
    document.write(`<h1>hello: ${с}</h1>`)
    с++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)

for (let i = 0; i < listOfItems.length; i++) {

    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)



let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`<div class = "product-card">`)
    document.write(`<h3 class ="product-title">${product.title} - ${product.price} UAH </h3>`)
    document.write(`<img src="${product.image}" alt="" class = "product-image">`)
    document.write(`</div>`)

}