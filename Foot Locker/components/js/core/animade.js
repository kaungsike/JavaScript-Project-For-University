export const toggleBorder = (e) => {
    if(e.target.classList.contains("category-img-btn")){
       if(e.target.classList.contains("border-b")){
        console.log("is contain")
       }else{
        console.log("is not")
        e.target.classList ="category-img-btn border-b"
       }
    }

}