import { contentRender } from "./handlers.js";
import { contentAPIs } from "./variables.js";

const initialRender = () => {
    contentRender(contentAPIs.filter((contentAPI) => contentAPI.num==1))
}

export default initialRender;