export const appendBorder = (e) => {
    if(e.target.classList.contains("category-img-btn")){
        document.querySelector(".border-active")?.classList.remove("border-active")
        e.target.classList.add("border-active")
    }else if(e.target.classList.contains("min-category-img-btn")){
        document.querySelector(".border-active")?.classList.remove("border-active");
        e.target.classList.add("border-active")
    }
}