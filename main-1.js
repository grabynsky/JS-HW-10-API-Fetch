// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
//

const cartInfo = document.getElementById('cartInfo');

const url = 'https://dummyjson.com/carts';

fetch(url)
    .then(response => response.json())
    .then(({carts}) => {
        
        carts.map(({products}) => {
            for (const product of products) {
                const div = document.createElement('div');
                
                const imgProduct = document.createElement('img');
                imgProduct.src = product.thumbnail;
                imgProduct.style.cssText = `
                    width: 200px;
                `;
                
                div.innerHTML = `
                <h3>Name: ${product.title}</h3>
                <p>Price: ${product.price}</p>                
                `;
                div.appendChild(imgProduct);
                cartInfo.appendChild(div)
            }
        })
    })