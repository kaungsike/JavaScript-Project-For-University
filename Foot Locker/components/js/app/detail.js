import { categoryImgTemplate, mainCategoryImgTemplate, productDetailGroup, productDetailTemplate } from "../core/selectors.js";

// console.log(window.location.href.split("#")[1])

// const productId = window.location.href.split("#").pop;
// console.log(productId)


export const createProductDetail = (data) => {
    const template = productDetailTemplate.content.cloneNode(true);
    template.querySelector("#mainImg").src = data.product[window.location.href.split("#")[2]].main_img
    const categoryImgGroup = template.querySelector("#categoryImgGroup");
    const mainCategoryImgGroup = template.querySelector("#mainCategoryImgGroup");

    // for 1st side of product detail category img
    data.product[window.location.href.split("#")[2]].productInfo.forEach((img) => {
        categoryImgGroup.append(createCategoryImg(img))
    })

    // for 2nd side of product detail category img
    data.product.forEach((el) => {
        mainCategoryImgGroup.append(createMainCategoryImg(el))
    })
    

    return template
}

export const createProductDetailRender = (products) => {
    products.forEach((product) => {
        if(productDetailGroup!=null){
            if(product.id==window.location.href.split("#")[1])
            productDetailGroup.append(createProductDetail(product));
        }
    })
}


export const createCategoryImg = (product) => {
    const template = categoryImgTemplate.content.cloneNode(true);
    template.querySelector("#categoryImg").src = product.img;

    return template;

}

export const createMainCategoryImg = (product) => {
    const template = mainCategoryImgTemplate.content.cloneNode(true);
    template.querySelector(".mainCategoryImg").src = product.img;

    return template;
}

