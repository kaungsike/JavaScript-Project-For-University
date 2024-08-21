import { addedItemTemplate, itemGroup } from "../core/selectors.js";
import { storage } from "../data/localStore.js";

export const createAddedItem = (data) => {
  const template = addedItemTemplate.content.cloneNode(true);
  const itemCard = template.querySelector("#itemCard");

  template.querySelector(".item-img").src = data.product.img;
  template.querySelector(".name").innerText = data.product.name;
  template.querySelector(".item-code").innerText = Date.now();
  template.querySelector(".price").innerText = data.product.price;
  template.querySelector(".quantity").innerText = data.quantity;
  template.querySelector(".cost").innerText =
    data.quantity * data.product.price;
  template.querySelector(".del-btn").setAttribute("id", data.id);

  return template;
};

export const createAddedItemRender = (products) => {
  products.forEach((product) => {
    if (itemGroup != null) {
      itemGroup.append(createAddedItem(product));
    }
  });
};

// Handlers

export const handleAddedItems = (e) => {
  if (e.target.classList.contains("del-btn")) {
    const currentData = JSON.parse(localStorage.getItem("data"));

    const afterData = currentData.filter((el) => {
      if (el.id != e.target.getAttribute("id")) {
        
        return el;
      }
    });

    localStorage.setItem("data",JSON.stringify(afterData));

    createAddedItemRender(JSON.parse(localStorage.getItem("data")))


  }
};

// for localStorage.js
