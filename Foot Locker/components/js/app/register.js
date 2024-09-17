import { loginForm, registerForm } from "../core/selectors.js";

export const handleAccountRegister = (e) => {
    // e.preventDefault();
    const formData = new FormData(registerForm)
    const userDetail = {
        name : formData.get("name"),
        email : formData.get("email"),
        password : formData.get("password")
    }

    console.log(userDetail);
    localStorage.setItem("user",JSON.stringify(userDetail))

    registerForm.reset();
}


// console.log(JSON.parse(localStorage.getItem("user")).email)

export const handleAccountLogin = (e) => {
    // e.preventDefault();

    const email = JSON.parse(localStorage.getItem("user")).email;
    const password = JSON.parse(localStorage.getItem("user")).password;

    console.log(email,password)

    const formData = new FormData(loginForm);
    if(formData.get("email") == email  &&  formData.get("password")== password){
        console.log("correct")
        // window.location.href = "./home.html"
    }else{
        alert("Try Again!")
    }
}