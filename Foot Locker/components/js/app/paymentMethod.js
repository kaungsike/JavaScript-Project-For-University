import { paymentTemplate, QRContainer } from "../core/selectors.js";

export const handlePayment = (e) => {
    e.preventDefault();

    if(document.querySelector(".border-active")!=null){
        alert("Order Successful!")
        window.location.href = "./myCart.html"
    }else{
        alert("Select Payment Method")
    }
}

export const createPayment = () => {
    const template = paymentTemplate.content.cloneNode(true);
    return template;
} 

export const createPaymentRender = () => {
    QRContainer? QRContainer.innerHTML="" : ''
    QRContainer?.append(createPayment())
}


export const handleIsSelected = (e) => {
    if(e.target.classList.contains("payment")){
        console.log("u pay")
        createPaymentRender();
        window.localStorage.removeItem("data");
    }
}

