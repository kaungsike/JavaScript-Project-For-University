import { section4CardGroup, section_4_card } from "../core/selectors.js"

export const create_section_4_card = (s4Cards) => {
    const template = section_4_card.content.cloneNode(true);
    template.querySelector(".card-name").innerText = s4Cards.name;
    template.querySelector(".card-img").src = s4Cards.img;
    template.querySelector(".card-price").innerText = s4Cards.price;

    return template;
}

export const section_4_card_render = (s4Cards) => {
    s4Cards.forEach((s4Card) => {
        section4CardGroup.append(create_section_4_card(s4Card))
    })
}