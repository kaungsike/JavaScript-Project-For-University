import { fiveBtnGroupHandler, userReviewProfilesGroupHandler } from "./handlers.js";
import { section2, userReviewProfilesGroup } from "./selectors.js";




const listener = () => {
    section2.addEventListener("click",fiveBtnGroupHandler);
    userReviewProfilesGroup.addEventListener("click",userReviewProfilesGroupHandler)
}

export default listener;