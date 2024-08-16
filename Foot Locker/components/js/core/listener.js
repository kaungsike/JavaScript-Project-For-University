import { handleProductCardMinImg } from "../app/card.js";
import { handleProductDetailCategoryImg } from "../app/detail.js";
import { productCardGroup, productDetailGroup } from "./selectors.js";


const listener = () => {
   if(productCardGroup!=null){
    productCardGroup.addEventListener("click",handleProductCardMinImg);
   }
   //  for product detail 1st side category img
   else if(productDetailGroup!=null){
      productDetailGroup.addEventListener("click",handleProductDetailCategoryImg)
   }
   
   
   
}

export default listener;