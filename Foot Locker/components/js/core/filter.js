
import initialRender from "./initialRender.js";

export const handleSneakerType = (e) => {
  if (e.target.getAttribute("value") == "Men's") {
    window.location.href = "./menSneakers.html#Men's";
  } else if (e.target.getAttribute("value") == "All") {
    window.location.href = "./menSneakers.html#All";
  } else if (e.target.getAttribute("value") == "Women's") {
    window.location.href = "./menSneakers.html#Women's";
  } else if (e.target.getAttribute("value") == "Boys' Preschool") {
    window.location.href = "./menSneakers.html#Boys' Preschool";
  } else if (e.target.getAttribute("value") == "Girls' Preschool") {
    window.location.href = "./menSneakers.html#Girls' Preschool";
  }
  initialRender();
  console.log(decodeURIComponent(window.location.href.split("#")[1]));
};
