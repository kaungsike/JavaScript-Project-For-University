import { contentRender, createChangeTitleRender } from "./handlers.js";
import { changeTitles, contentAPIs } from "./variables.js";

const initialRender = () => {
    contentRender(contentAPIs.filter((contentAPI) => contentAPI.num==1));
    createChangeTitleRender(changeTitles.filter((changeTitle) => changeTitle.id==1))
}

export default initialRender;