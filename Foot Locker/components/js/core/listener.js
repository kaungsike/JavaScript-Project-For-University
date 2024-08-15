import { handleProductCardMinImg } from "../app/card.js";
import { productCardGroup } from "./selectors.js";


const listener = () => {
   if(productCardGroup!=null){
    productCardGroup.addEventListener("click",handleProductCardMinImg)
   }
}

export default listener;