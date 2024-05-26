import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class Shop{
    init(){
        initialRender()
        console.log("Your Shop App is Work!");
        listener()
    }
}

export default Shop;