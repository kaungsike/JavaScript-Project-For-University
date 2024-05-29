import { headerLines, headerLines_ } from "./selectors.js"

export const headerAnimation1 = () => {
    window.addEventListener("scroll", () => {
        const animationHeight = window.innerHeight - 100 +"px"
        headerLines.forEach((headerLine) => {
            const headerLineTop = headerLine.getBoundingClientRect().top +"px"
            if(headerLineTop<animationHeight){
                headerLine.classList.add("left_to_right")
                headerLine.style.width = "100%"
            }
        })
    })
}

export const headerAnimation2 = () => {
    window.addEventListener("scroll", () => {
        const animationHeight = window.innerHeight - 100 +"px"
        headerLines_.forEach((headerLine_) => {
            const headerLine_Top = headerLine_.getBoundingClientRect().top + "px";
            if(headerLine_Top<animationHeight){
                headerLine_.classList.add("left_to_right")
                headerLine_.style.width = "100%"
            }
        })
    })
}