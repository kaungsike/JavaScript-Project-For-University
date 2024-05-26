import { fiveBtnGroupHandler } from "./handlers.js";
import { section2 } from "./selectors.js";




const listener = () => {
    section2.addEventListener("click",fiveBtnGroupHandler)
}

export default listener;