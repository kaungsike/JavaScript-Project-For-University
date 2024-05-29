import { headerAnimation1, headerAnimation2 } from "./core/animations.js";
import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class Shop{
    init(){
        initialRender()
        console.log("Your Shop App is Work!");
        listener();
        headerAnimation1()
        headerAnimation2()
    }
}

export default Shop;