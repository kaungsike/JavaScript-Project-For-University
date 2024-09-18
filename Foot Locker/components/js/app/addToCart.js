// import { addToAddedItems } from "./myCart.js"
// import storage from "../data/localStore.js"
import { setDataToLocalStore } from "../data/localStore.js";

export const addToCartHandler = (e) => {
    if(e.target.classList.contains("add-to-cart-btn")){
        const id = window.location.href.split("#")[1]-1;
        const index = document.querySelector(".add-to-cart-btn").getAttribute("index")
        const size  = e.target.getAttribute("size");
        const color  = document.querySelector(".color").innerText;

        console.log(JSON.parse(localStorage.getItem("data")))

        if(JSON.parse(localStorage.getItem("data")) == null){
            if(JSON.parse(localStorage.getItem("user"))==null){
                alert("Please login first!")
                window.location.href = "./login.html";
            }else{
                setDataToLocalStore(id,index,1,size)
                console.log("is null")
                alert("Item added!")
            }    
        }
        else if(JSON.parse(localStorage.getItem("data"))!=null){
            console.log("not null")
            const isExist  = JSON.parse(localStorage.getItem("data")).find((el) => el.id == id && el.product.color == color && el.size==size)

            if(isExist){
                
                alert("This item is  already exist!");
            }
            else{
                alert("Added!");
                setDataToLocalStore(id,index,1,size)
            }
        }      
    }
}