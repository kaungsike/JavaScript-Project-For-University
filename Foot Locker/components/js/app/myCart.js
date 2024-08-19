import { addedItemTemplate, itemGroup } from "../core/selectors.js";
import products from "../data/productsData.js";


export const addedItems = [
    {
        id : 1,
        quantity : 1,
        cost : 75,
        product : products[0],
    }
];


export const add = (id,index) => {
    const data = {
        id,
        quantity : 1,
        product : products[id]
    }
    addedItems.push(data);
    createAddedItemRender(addedItems)
    console.log(addedItems)
}


export const createAddedItem = (data) => {
    const template = addedItemTemplate.content.cloneNode(true);
    const itemCard = template.querySelector("#itemCard");

    template.querySelector(".item-img").src = data.product.img;
    template.querySelector(".name").innerText = data.product.name;
    template.querySelector(".item-code").innerText = Date.now();
    template.querySelector(".price").innerText = data.product.price
    template.querySelector(".quantity").innerText = data.quantity;
    template.querySelector(".cost").innerText = data.quantity*data.product.price;

    return template;
}


export const createAddedItemRender = (products) => {
    products.forEach((product) => {
        if(itemGroup!=null){
            itemGroup.append(createAddedItem(product))
        }
    })
}