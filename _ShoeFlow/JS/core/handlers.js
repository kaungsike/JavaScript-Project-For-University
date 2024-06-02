import {
  changeTitleTemplate,
  contentTemplate,
  headerMidGroup,
  reviewUserProfileTemplate,
  section2Group,
  userReviewGroup,
  userReviewProfilesGroup,
  userReviewTemplate,
} from "./selectors.js";
import { contentAPIs, userReviews } from "./variables.js";

export const createContent = (api) => {
  const template = contentTemplate.content.cloneNode(true);
  // template.querySelector(".section-2-container").classList.add("animate__animated" ,"animate__bounce")
  template.querySelector(".content-title").innerText = api.title;
  template.querySelector(".content-type").innerText = api.type;
  template.querySelector(".content-img").src = api.img;

  return template;
};

export const contentRender = (contentAPIs) => {
  section2Group.innerHTML = ``;
  contentAPIs.forEach((content) => {
    section2Group.append(createContent(content));
  });
};

// let x = 2;

export const fiveBtnGroupHandler = (e) => {
  if (e.target.classList.contains("num")) {
    const btn = e.target;
    const number = parseInt(btn.getAttribute("num"));
    contentRender(
      contentAPIs.filter((contentAPI) => contentAPI.num === number)
    );
    document.querySelector(".num.active")?.classList.remove("active");
    btn.classList.add("active");
    // clearInterval(autoChange);
    // setInterval(() => {
    //   contentRender(contentAPIs.filter((contentAPI) => contentAPI.num == x));
    //   x++;
    //   if (x == 6) {
    //     x = 1;
    //   }
    //   console.log(x);
    // }, 5000);
  }
};

// export const autoChange = setInterval(() => {
//   contentRender(contentAPIs.filter((contentAPI) => contentAPI.num == x));
//   x++;
//   if (x == 6) {
//     x = 1;
//   }
//   console.log(x);
// }, 5000);

// export const autoChangeRender = () => {
//   autoChange;
// };

export const createChangeTitle = (titles) => {
  const template = changeTitleTemplate.content.cloneNode(true);
  template.querySelector(".changeTitle").innerText = titles.title;
  template.querySelector(".changeTitle").setAttribute("vai", titles.id);

  return template;
};

export const createChangeTitleRender = (titles) => {
  titles.forEach((title) => {
    headerMidGroup.append(createChangeTitle(title));
  });
};

export const createReviewUserProfile = (user) => {
  const template = reviewUserProfileTemplate.content.cloneNode(true);
  template.querySelector("img").src = user.img;
  template.querySelector("button").setAttribute("number", user.id);

  return template;
};

export const createReviewUserProfileRender = (users) => {
  users.forEach((user) => {
    userReviewProfilesGroup.append(createReviewUserProfile(user));
  });
};

export const createUserReview = (userReviews) => {
  const template = userReviewTemplate.content.cloneNode(true);
  template.querySelector("div").setAttribute("number", userReviews.id);
  template.querySelector("img").src = userReviews.img2;
  template.querySelector("h6").innerText = userReviews.name;
  template.querySelector(".user-job").innerText = userReviews.job;
  template.querySelector(".user-reviews").innerText = userReviews.review;

  return template;
};

export const createUserReviewRender = (userReviews) => {
  userReviewGroup.innerHTML = ``;
  userReviews.forEach((userReview) => {
    userReviewGroup.append(createUserReview(userReview));
  });
};

export const userReviewProfilesGroupHandler = (e) => {
  if (e.target.classList.contains("user-profile")) {
    const number = parseInt(e.target.getAttribute("number"));
    createUserReviewRender(
      userReviews.filter((userReview) => 
        userReview.id === number
    ))
  }
};
