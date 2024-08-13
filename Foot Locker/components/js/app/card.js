import { cardTemplate, productCardGroup } from "../core/selectors.js"

export const createProductCard = (product) => {
    const template = cardTemplate.content.cloneNode(true);
    template.querySelector("#product-img").src = product.img

    return template;
}

export const createProductCardRender = (products) => {
    products.forEach((product) => {
        productCardGroup.append(createProductCard(product))
    })
}