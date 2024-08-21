import { addToCartHandler } from "../app/addToCart.js";
import { handleProductCardMinImg } from "../app/card.js";
import { handleProductDetailCategoryImg, handleProductDetailMainCategoryImg } from "../app/detail.js";
import { handleAddedItems } from "../app/myCart.js";
import { itemGroup, productCardGroup, productDetailGroup } from "./selectors.js";


const listener = () => {
   if(productCardGroup!=null){
    productCardGroup.addEventListener("click",handleProductCardMinImg);
   }
   //  for product detail 1st side category img
   else if(productDetailGroup!=null){
      productDetailGroup.addEventListener("click",handleProductDetailCategoryImg)

      productDetailGroup.addEventListener("click",handleProductDetailMainCategoryImg)

      productDetailGroup.addEventListener("click",addToCartHandler)
   }
   else if(itemGroup!=null){
      itemGroup.addEventListener("click",handleAddedItems)
   }

   
   
   
   
}

export default listener;