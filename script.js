


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
           
               <div class="col-md-4 product-card reveal-item active">
          <div class="product-card-inner">

            <div class="product-image">
              <img src="${product.thumbnail}" alt="Smart TV QLED 65">
            </div>

            <h5>${product.title}</h5>
            <p class="price">$${product.price}</p>
            <p onclick='add_to_cart(${cartproduct})' class="btn btn-outline-dark btn-sm">Ver producto</p>

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