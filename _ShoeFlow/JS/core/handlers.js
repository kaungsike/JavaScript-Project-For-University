import { contentTemplate, section2, section2Group } from "./selectors.js";
import { contentAPIs } from "./variables.js";

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
