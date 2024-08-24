import { addedItemTemplate, itemGroup } from "../core/selectors.js";
import { storage } from "../data/localStore.js";

export const createAddedItem = (data) => {
  const template = addedItemTemplate.content.cloneNode(true);
  console.log(data)

  template.querySelector(".item-img").src = data.product.img;
  template.querySelector(".name").innerText = data.detail.name;
  template.querySelector(".item-code").innerText = data.product.color;
  template.querySelector(".price").innerText = data.product.price;
  template.querySelector(".size").innerText = data.size;
  template.querySelector(".quantity").innerText = data.quantity;
  template.querySelector(".cost").innerText = data.quantity * data.product.price;
  template.querySelector(".del-btn").setAttribute("id", data.id);
  template.querySelector(".del-btn").setAttribute("color", data.product.color);
  template.querySelector(".sub-btn").setAttribute("id", data.id);
  template.querySelector(".add-btn").setAttribute("id", data.id);

  return template;
};

export const createAddedItemRender = (products) => {
  if(itemGroup!=null){
    itemGroup.innerHTML = "";
    products.forEach((product) => {
        itemGroup.append(createAddedItem(product));
    });
  }
};

// Handlers

export const handleDelBtn = (e) => {
  if (e.target.classList.contains("del-btn")) {
    if(confirm("Atr you sure you want to delete?")){
      const currentData = JSON.parse(localStorage.getItem("data"));

      console.log("currant data",currentData);

      console.log(e.target.getAttribute("color"))

      const afterData = currentData.filter((el) => {
        if (el.id != e.target.getAttribute("id") || el.product.color != e.target.getAttribute("color")) {
        
         return el;
        }
      });

      console.log("after data",afterData);

      localStorage.setItem("data",JSON.stringify(afterData));

      createAddedItemRender(JSON.parse(localStorage.getItem("data")))

      }
    }
};


// for quantity
export const handleAddSubBtn = (e) => {
  if(e.target.classList.contains("add-btn")){
    const currentData = JSON.parse(localStorage.getItem("data"))
    
    const afterData = currentData.map((el) => {
      if(el.id==e.target.getAttribute("id")){
        el.quantity +=1;
      }
      return el
    })

    localStorage.setItem("data",JSON.stringify(afterData));

    createAddedItemRender(JSON.parse(localStorage.getItem("data")))

  }
  else if(e.target.classList.contains("sub-btn")){
    const currentData = JSON.parse(localStorage.getItem("data"))
    
    const afterData = currentData.map((el) => {
      if(el.id==e.target.getAttribute("id")){
        if(el.quantity==1){
          alert("Can't reduce more!")
        }
        else{
          el.quantity -=1;
        }
      }
      return el
    })

    localStorage.setItem("data",JSON.stringify(afterData));

    createAddedItemRender(JSON.parse(localStorage.getItem("data")))
  }
}

// for localStorage.js
