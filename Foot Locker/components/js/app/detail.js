import { categoryImgTemplate, productDetailGroup, productDetailTemplate } from "../core/selectors.js";


export const createProductDetail = (data) => {
    const template = productDetailTemplate.content.cloneNode(true);
    template.querySelector("#mainImg").src = data.product[0].productDetailInfo.img
    const categoryImgGroup = template.querySelector("#categoryImgGroup");

    data.product[0].productDetailInfo.categoryImg.forEach((img) => {
        categoryImgGroup.append(createCategoryImg(img))
    })
    

    return template
}

export const createCategoryImg = (product) => {
    const template = categoryImgTemplate.content.cloneNode(true);
    template.querySelector("#categoryImg").src = product.img;

    return template;

}

export const createProductDetailRender = (products) => {
    products.forEach((product) => {
        if(productDetailGroup!=null){
            productDetailGroup.append(createProductDetail(product));
        }
    })
}