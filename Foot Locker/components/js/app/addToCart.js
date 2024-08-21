// import { addToAddedItems } from "./myCart.js"
// import storage from "../data/localStore.js"
import { setDataToLocalStore } from "../data/localStore.js";

export const addToCartHandler = (e) => {
    if(e.target.classList.contains("add-to-cart-btn")){
        const id = window.location.href.split("#")[1]-1;
        const index = window.location.href.split("#")[2];

        setDataToLocalStore(id,index,1)
    }
}