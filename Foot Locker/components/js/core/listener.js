import { handleProductCardMinImg } from "../app/card.js";
import { productCardGroup } from "./selectors.js";


const listener = () => {
    productCardGroup.addEventListener('click',handleProductCardMinImg)
}

export default listener;