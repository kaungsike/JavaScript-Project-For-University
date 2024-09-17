import { handleSneakerType } from "./core/filter.js";
import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class FoodLocker{
    init(){
        console.log("App Start!")
        initialRender();
        listener();
    }
}

export default FoodLocker;