import { addToCartHandler } from "../app/addToCart.js";
import { handleProductCardMinImg } from "../app/card.js";
import { handleProductDetailCategoryImg, handleProductDetailMainCategoryImg, handleSizeChoosing } from "../app/detail.js";
import { handleAddSubBtn, handleDelBtn } from "../app/myCart.js";
import { handleAccountLogin, handleAccountRegister } from "../app/register.js";
import { appendBorder } from "./animate.js";
import { handleSneakerType } from "./filter.js";
import { categories, itemGroup, loginForm, productCardGroup, productDetailGroup, registerForm } from "./selectors.js";


const listener = () => {
   if(productCardGroup!=null){
    productCardGroup.addEventListener("click",handleProductCardMinImg);
   }
   //  for product detail 1st side category img
   else if(productDetailGroup!=null){
      productDetailGroup.addEventListener("click",handleProductDetailCategoryImg)

      productDetailGroup.addEventListener("click",handleProductDetailMainCategoryImg)

      productDetailGroup.addEventListener("click",addToCartHandler)

      productDetailGroup.addEventListener("click",handleSizeChoosing)

      productDetailGroup.addEventListener("click",appendBorder)

   }
   else if(itemGroup!=null){
      itemGroup.addEventListener("click",handleDelBtn)
      itemGroup.addEventListener("click",handleAddSubBtn)
   }else if(registerForm!=null){
      registerForm.addEventListener("submit",handleAccountRegister)
   }else if(loginForm!=null){
      loginForm.addEventListener("submit",handleAccountLogin)
   }
   categories? categories.addEventListener("click",handleSneakerType) : '';

   
   
   
   
}

export default listener;