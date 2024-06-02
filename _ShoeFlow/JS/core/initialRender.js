import { section_4_card_render } from "../app/product.js";
import { contentRender, createChangeTitleRender, createReviewUserProfileRender } from "./handlers.js";
import { changeTitles, contentAPIs, section4BodyCards, userReviews } from "./variables.js";

const initialRender = () => {
    contentRender(contentAPIs.filter((contentAPI) => contentAPI.num==1));
    createChangeTitleRender(changeTitles.filter((changeTitle) => changeTitle.id==1));
    section_4_card_render(section4BodyCards);
    createReviewUserProfileRender(userReviews)
}

export default initialRender;