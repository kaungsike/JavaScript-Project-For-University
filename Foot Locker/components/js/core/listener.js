import { addToCartHandler } from "../app/addToCart.js";
import { handleLogOut, handleProductCardMinImg, handleProfile } from "../app/card.js";
import { handleProductDetailCategoryImg, handleProductDetailMainCategoryImg, handleSizeChoosing } from "../app/detail.js";
import { isAccountExist } from "../app/isAccountExist.js";
import { handleAddSubBtn, handleDelBtn, handleOrderBtn } from "../app/myCart.js";
import { handleIsSelected, handlePayment } from "../app/paymentMethod.js";
import { handleAccountLogin, handleAccountRegister } from "../app/register.js";
import { appendBorder } from "./animate.js";
import { handleSneakerType } from "./filter.js";
import { categories, loginForm, myCart, paymentForm, productCardGroup, productDetailGroup, registerForm, searchBoxContainer } from "./selectors.js";


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
   else if(myCart!=null){
      myCart.addEventListener("click",handleDelBtn)
      myCart.addEventListener("click",handleAddSubBtn)
      myCart.addEventListener("click",handleOrderBtn)
   }else if(registerForm!=null){
      registerForm.addEventListener("submit",handleAccountRegister)
   }else if(loginForm!=null){
      loginForm.addEventListener("submit",handleAccountLogin)
   }else if(searchBoxContainer!=null){
      searchBoxContainer.addEventListener("click",isAccountExist)
   }else if(paymentForm!=null){
      paymentForm.addEventListener("click",appendBorder)
      paymentForm.addEventListener("click",handleIsSelected)
      paymentForm.addEventListener("submit",handlePayment)
   }
   searchBoxContainer?.addEventListener("click",handleProfile)
   searchBoxContainer?.addEventListener("click",handleLogOut)
   categories? categories.addEventListener("click",handleSneakerType) : '';

   
   
   
}

export default listener;