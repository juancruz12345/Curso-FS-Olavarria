async function traerProductos(){
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

async function renderizarProductos(){
    const divMain = document.getElementById('main')
    divMain.setAttribute('class',"products-list")
    const products = await traerProductos()
    products.forEach(element => {
        divMain.innerHTML += `<div class='product'>
            <h4 class="title">${element.title}</h4>
            <img src=${element.image}></img>
            <h4>Price: $${element.price}</h4>
            <h4>Category: ${element.category}</h4>
            <h4>Rate: ${element.rating.rate}</h4>
           
           
        </div>`
    });
}

renderizarProductos()

