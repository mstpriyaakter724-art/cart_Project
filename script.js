


async function getProducts() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        let products = data.products;
        let showProduct = document.querySelector(".showProduct");
        let html = "";
        products.forEach((product) => {
            console.log(product);

             let cartproduct = JSON.stringify({
                id: product.id,
                name: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                qty: 1
             })

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
                                    <li onclick = 'add_to_cart(${cartproduct})' ><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
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
    }catch (error) {
        console.log(error);

    }
}

getProducts();
item_count();
function add_to_cart(p){


JSON.parse(localStorage.getItem("product_cart"))?? localStorage.setItem("product_cart", JSON.stringify([]));

let cart = JSON.parse(localStorage.getItem("product_cart"))

let itemExists = cart.find ((item)=> item.id == p.id)
if (itemExists){
    itemExists.qty = itemExists.qty += 1
}else {
    cart.push(p)
}
localStorage.setItem("product_cart", JSON.stringify(cart))
item_count();
}

function item_count(){
    let cart = JSON.parse(localStorage.getItem("product_cart"));
    if (cart.length > 0){
        document.querySelector(".cart_items_count").innerHTML=`
        <span class= "position_absolute top-0 start-100 translate-middle badge badge-sm rounded-pill bg-danger">
        ${cart.length}
        </span>
        `;
    }
}