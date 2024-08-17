import { categoryImgTemplate, mainCategoryImgTemplate, productDetailGroup, productDetailTemplate } from "../core/selectors.js";
import products from "../data/productsData.js";


export const createProductDetail = (data) => {
    const template = productDetailTemplate.content.cloneNode(true);
    template.querySelector("#mainImg").src = data.product[window.location.href.split("#")[2]].main_img
    template.querySelector("#productName").innerText = data.name;
    template.querySelector("#gender").innerText = data.gender;
    template.querySelector("#brand").innerText = data.brand;
    template.querySelector("#price").innerText = data.price;
    template.querySelector("#color").innerText = data.color;
    
    const categoryImgGroup = template.querySelector("#categoryImgGroup");
    const mainCategoryImgGroup = template.querySelector("#mainCategoryImgGroup");

    // for 1st side of product detail category img
    data.product[window.location.href.split("#")[2]].productInfo.forEach((img) => {
        categoryImgGroup.append(createCategoryImg(img))
    })

    // for 2nd side of product detail category img
    data.product.forEach((el,index) => {
        mainCategoryImgGroup.append(createMainCategoryImg(el,index))
        console.log(index)
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

// for 1st side of product detail category img
export const createCategoryImg = (product) => {
    const template = categoryImgTemplate.content.cloneNode(true);
    template.querySelector("#categoryImg").src = product.img;

    return template;

}

// for 2nd side of product detail category img
export const createMainCategoryImg = (product,index) => {
    const template = mainCategoryImgTemplate.content.cloneNode(true);
    template.querySelector(".mainCategoryImg").src = product.img;
    template.querySelector(".min-category-img-btn").setAttribute("index",index)

    return template;
}



// handler

// for 1st side of product detail category img
export const handleProductDetailCategoryImg = (e) => {
    if(e.target.classList.contains("category-img-btn")){
        const productDetail = e.target.closest("#productDetail");
        
        productDetail.querySelector("#mainImg").src = e.target.children[0].src
    }
}

// fro 2nd side of product detail img
export const handleProductDetailMainCategoryImg = (e) => {
    if(e.target.classList.contains("min-category-img-btn")){
        const card = e.target.closest("#productDetail");

        // the data that the user click tha img that need from productData.js array object for 1st side of product detail 
        const product = products[window.location.href.split("#")[1]-1].product[e.target.getAttribute("index")]

        card.querySelector("#mainImg").src = product.main_img;

        card.querySelector("#price").innerText = product.price;
        card.querySelector("#color").innerText = product.color;

        // to clear all old data in categoryImgGroup
        card.querySelector("#categoryImgGroup").innerText = ""

        // for 1st side of category img in product detail
        product.productInfo.forEach((el) => {
            categoryImgGroup.append(createCategoryImg(el,e.target.getAttribute("index")))
        })
    }
}