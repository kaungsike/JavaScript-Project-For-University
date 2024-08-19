import { add } from "./myCart.js"

export const addToCartHandler = (e) => {
    if(e.target.classList.contains("add-to-cart-btn")){
        const id = window.location.href.split("#")[1]-1;
        const indx = window.location.href.split("#")[2];
        console.log(id)
        add(id,indx)
    }
}