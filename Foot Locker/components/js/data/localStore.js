
import products from "./productsData.js"

// console.log(localStorage.getItem("data"))
    
export let storage = [];
localStorage.getItem("data")? storage = JSON.parse(localStorage.getItem("data")) : ""
     

export const setDataToLocalStore = (id,index,quantity,size) => {
    const obj = {
        id,
        quantity,
        cost : 100,
        size :size,
        product : products[id].product[index],
        detail : products[id]
    }

    console.log("before set to localStorage!");
    storage.push(obj)
    console.log(storage)

    localStorage.setItem("data",JSON.stringify(storage));
    
    console.log("after localStorage!")
    console.log(JSON.parse(localStorage.getItem("data")))
}



