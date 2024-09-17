import { createProductCardRender } from "../app/card.js"
import products from "../data/productsData.js"

export const handleSneakerType = (e) => {
        if(e.target.getAttribute("value")=="Men's"){
        createProductCardRender(products.filter((product) => product.gender=="Men's"))
        }else if(e.target.getAttribute("value") == "All"){
        createProductCardRender(products)
        }else if(e.target.getAttribute("value") == "Women's"){
        createProductCardRender(products.filter((product) => product.gender=="Women's"))
        }else if(e.target.getAttribute("value") == "Boys' Preschool"){
        createProductCardRender(products.filter((product) => product.gender=="Boys' Preschool"))
        }else if(e.target.getAttribute("value") == "Girls' Preschool"){
        createProductCardRender(products.filter((product) => product.gender=="Girls' Preschool"))
        }
}