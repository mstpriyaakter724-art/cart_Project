


async function getProducts() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        let products = data.products;
        let showProduct = document.querySelector(".showProduct");
        let html = "";
        products.forEach((product) => {
            console.log(product);
            html += `
            <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#" class="image">
                                    <img class="pic-1" src="${product.thumbnail}">
                                    <img class="pic-2" src="${product.images}">
                                </a>
                                <a href="#" class="product-like-icon" data-tip="Add to Wishlist">
                                    <i class="far fa-heart"></i>
                                </a>
                                <ul class="product-links">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">${product.title}</a></h3>
                                <div class="price">$${product.price}</div>
                            </div>
                        </div>
                    </div>
            
            
            `;
        })
        showProduct.innerHTML  = html;
    }
    
    catch (error) {
        console.log(error);

    }
}
getProducts();