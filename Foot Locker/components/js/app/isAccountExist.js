import { alreadyUserAccountTemplate, noUserAccountTemplate, searchBoxContainer } from "../core/selectors.js"

export const createNoUserAccount = () => {
    const template = noUserAccountTemplate.content.cloneNode(true);
    return template;
}

export const createNoUserAccountRender = () => {
    document.querySelector(".profile-container")?.remove();
    searchBoxContainer?.append(createNoUserAccount());
}

export const createAlreadyUserAccount = () => {
    const template = alreadyUserAccountTemplate.content.cloneNode(true);
    return template;
}

export const createAlreadyUserAccountRender = () => {
    document.querySelector(".profile-container")?.remove();
    searchBoxContainer?.append(createAlreadyUserAccount());
}

export const isAccountExist = (e) => {
    console.log(e.target)
}
