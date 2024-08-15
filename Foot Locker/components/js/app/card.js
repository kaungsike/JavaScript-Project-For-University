import {
  cardTemplate,
  minImgTemplate,
  productCardGroup,
} from "../core/selectors.js";

export const createProductCard = (data) => {
  const template = cardTemplate.content.cloneNode(true);
  template.querySelector("#product-img").src = data.img;
  template.querySelector("#gender").innerText = data.gender;
  template.querySelector("#name").innerText = data.name;
  template.querySelector("#color").innerText = data.color;
  template.querySelector("#price").innerText = data.price;

  template.querySelector("#productCard").setAttribute("href","../pages/productDetail.html#"+data.id+"#"+data.id)

  const group = template.querySelector("#minImgGroup");

  data.product.forEach((el) => {
    group.append(createMinImg(el));
  });

  return template;

  
};

export const createMinImg = (product) => {
  const template = minImgTemplate.content.cloneNode(true);
  template.querySelector(".min-img").src = product.img;
  template.querySelector(".min-img").setAttribute("price",product.price);
  template.querySelector(".min-img").setAttribute("color",product.color);

  return template;
};


export const createProductCardRender = (products) => {
  products.forEach((product) => {
    if(productCardGroup!=null){
      productCardGroup.append(createProductCard(product));
    }
  });
};


// ++++++++++++++++++++++++++

// Handlers

export const handleProductCardMinImg = (e) => {
    if(e.target.classList.contains("min-img")){
        const card = e.target.closest(".product-card");

        const img = card.querySelector("#product-img");
        const color = card.querySelector(".color");
        const price = card.querySelector(".price");

        img.src = e.target.closest(".min-img").src;
        color.innerText = e.target.closest(".min-img").getAttribute("color");
        price.innerText = e.target.closest(".min-img").getAttribute("price");

    }
}