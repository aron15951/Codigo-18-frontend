async function renderCategories(){
    const response= await   fetch('https://fakestoreapi.com/products/categories')
    const categories = await    response.json()  
    console.log(categories);
    const categoriesDiv = document.querySelector('.categories')
    let categoryButtons = ''

    categories.forEach(category => {
        categoryButtons = categoryButtons +`<button>${category}</button>`
    })
    
    //console.log(categoryButtons);

    categoriesDiv.innerHTML = categoryButtons

    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            console.log(event.target.textContent);
            fetchProductsByCategory(event.target.textContent)
        })
    })

}

renderCategories()

async function fetchProductsByCategory(categoryName){
    const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    const products = await response.json()
    console.log(products)

    const productsDiv = document.querySelector('.products')
    let productElements = ''

    products.forEach(product => {
        productElements = productElements + 
        `
        <article class="product">
        <img class="product-img" src=${product.image} alt=${product.title}/>
        <div class="product-description">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">${product.price}</p>
        </div>
        </article>
        `
        console.log(productElements)

        productsDiv.innerHTML = productElements

    })
}


