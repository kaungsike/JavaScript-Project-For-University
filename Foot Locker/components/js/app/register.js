import { loginForm, registerForm } from "../core/selectors.js";

export const handleAccountRegister = (e) => {
    // e.preventDefault();

    const formData = new FormData(registerForm)
    if(formData.get("password")==formData.get("conformPassword")){
        const userDetail = {
            name : formData.get("name"),
            email : formData.get("email"),
            password : formData.get("password")
        }

    console.log(userDetail);
    localStorage.setItem("user",JSON.stringify(userDetail))
    }else{
        e.preventDefault();
        alert("Your conform password is incorrect!")
        location.href = "./index.html"
    }

    registerForm.reset();
}


// console.log(JSON.parse(localStorage.getItem("user")).email)

export const handleAccountLogin = (e) => {
    // e.preventDefault();


    if(localStorage.getItem("user")){
        const email = JSON.parse(localStorage.getItem("user")).email;
        const password = JSON.parse(localStorage.getItem("user")).password;
        const formData = new FormData(loginForm);
        if(formData.get("email") == email  &&  formData.get("password")== password){
            // e.preventDefault();
            console.log(localStorage.getItem("user"));
            console.log("correct")
        }else{
            e.preventDefault();
            alert("Try Again!")
        }
    }else{
        e.preventDefault();
        alert("Account not found!")
    }

    console.log(email,password)

    loginForm.reset(); 
}