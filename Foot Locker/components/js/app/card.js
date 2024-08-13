import {
  cardTemplate,
  minImgTemplate,
  productCardGroup,
} from "../core/selectors.js";

export const createProductCard = (data) => {
  const template = cardTemplate.content.cloneNode(true);
  template.querySelector("#product-img").src = data.img;
  const group = template.querySelector("#minImgGroup");

  data.product.forEach((el) => {
    group.append(createMinImg(el));
  });

  return template;

  
};

export const createMinImg = (product) => {
  const template = minImgTemplate.content.cloneNode(true);
  template.querySelector(".min-img").src = product.img;

  return template;
};

// export const createMinImgRender = (product) => {
//     product.forEach((el) => {
//         minImgGroup.append(createMinImg(el))
//     })
// }

export const createProductCardRender = (products) => {
  products.forEach((product) => {
    productCardGroup.append(createProductCard(product));
  });
};


// ++++++++++++++++++++++++++

// Handlers

export const handleProductCardMinImg = (e) => {
    if(e.target.classList.contains("min-img")){
        const card = e.target.closest(".product-card")
        const img = card.querySelector("#product-img");
        img.src = e.target.closest(".min-img").src
    }
}