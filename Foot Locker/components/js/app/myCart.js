import { addedItemTemplate, costTotal, itemGroup, orderListGroup, orderListTemplate } from "../core/selectors.js";
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
  template.querySelector(".del-btn").setAttribute("size", data.size);
  template.querySelector(".del-btn").setAttribute("color", data.product.color);
  template.querySelector(".sub-btn").setAttribute("color", data.product.color);
  template.querySelector(".add-btn").setAttribute("color", data.product.color);
  template.querySelector(".add-btn").setAttribute("size", data.size);
  template.querySelector(".sub-btn").setAttribute("size", data.size);
  template.querySelector(".sub-btn").setAttribute("id", data.id);
  template.querySelector(".add-btn").setAttribute("id", data.id);

  return template;
};

export const createAddedItemRender = (products) => {
  if(itemGroup!=null){
    itemGroup.innerHTML = "";
    products?.forEach((product) => {
        itemGroup.append(createAddedItem(product));
    });
  }
};

export const createOrderList = (data) => {
  const template = orderListTemplate.content.cloneNode(true);

  template.querySelector(".item-name").innerText = data.detail.name;
  template.querySelector(".item-size").innerText = data.size;
  template.querySelector(".item-quantity").innerText = data.quantity;
  template.querySelector(".item-price").innerText = data.product.price;
  template.querySelector(".costs").innerText = data.quantity * data.product.price;

  return template;
}
export const createOrderListRender = (products) => {
  orderListGroup? orderListGroup.innerHTML = "" : ''
  products?     products.forEach((product) => {
    orderListGroup? orderListGroup.append(createOrderList(product)) : "";
  }) : ''
  updateTotalCost()
}

// Handlers

export const handleDelBtn = (e) => {
  if (e.target.classList.contains("del-btn")) {
    if(confirm("Atr you sure you want to delete?")){
      const currentData = JSON.parse(localStorage.getItem("data"));

      console.log("currant data",currentData);

      console.log(e.target.getAttribute("color"))
      console.log(e.target.getAttribute("size"))

      const afterData = currentData.filter((el) => {
        if (el.id != e.target.getAttribute("id") || el.product.color != e.target.getAttribute("color") || el.size!=e.target.getAttribute("size")) {
        
         return el;
        }
      });

      console.log("after data",afterData);

      localStorage.setItem("data",JSON.stringify(afterData));

      createAddedItemRender(JSON.parse(localStorage.getItem("data")))


      }
    }
    updateTotalCost()
};

export const handleOrderBtn = (e) => {
  if (e.target.classList.contains("order-btn")) {

    localStorage.getItem("data") ?     JSON.parse(localStorage.getItem("data")).length>0  ? location.href="./payment.html" : alert("No item in cart!") : alert("No item in cart!")

  }
}




// for quantity
export const handleAddSubBtn = (e) => {
  if(e.target.classList.contains("add-btn")){
    const currentData = JSON.parse(localStorage.getItem("data"))
    
    const afterData = currentData.map((el) => {
      if(el.id==e.target.getAttribute("id") && el.product.color==e.target.getAttribute("color") && el.size == e.target.getAttribute("size")){
        el.quantity +=1;
        console.log(e.target)
      }
      return el
    })

    localStorage.setItem("data",JSON.stringify(afterData));

    createAddedItemRender(JSON.parse(localStorage.getItem("data")))

  }
  else if(e.target.classList.contains("sub-btn")){
    const currentData = JSON.parse(localStorage.getItem("data"))
    
    const afterData = currentData.map((el) => {
      if(el.id==e.target.getAttribute("id") && el.product.color==e.target.getAttribute("color")  && el.size == e.target.getAttribute("size")){
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
  createOrderListRender(JSON.parse(localStorage.getItem("data")))
  updateTotalCost();
}

// for localStorage.js


// cost total
export const updateTotalCost = () => {
   costTotal? costTotal.innerText = [...document.querySelectorAll(".cost")].reduce((cv,pv) => cv + parseFloat(pv.innerHTML),0) : '';
}


