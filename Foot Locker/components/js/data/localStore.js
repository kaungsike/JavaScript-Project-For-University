
import products from "./productsData.js"

// console.log(localStorage.getItem("data"))
    
export let storage = [];
localStorage.getItem("data")? storage = JSON.parse(localStorage.getItem("data")) : ""
     

export const setDataToLocalStore = (id,index,quantity) => {
    const obj = {
        id : id,
        quantity : quantity,
        cost : 100,
        product : products[id]
    }

    console.log("before set to localStorage!");
    storage.push(obj)
    console.log(storage)

    localStorage.setItem("data",JSON.stringify(storage));
    
    console.log("after localStorage!")
    console.log(JSON.parse(localStorage.getItem("data")))
}



