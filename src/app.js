import converter from "./modules/utils.js"

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const hexa = document.querySelector("input").value;
    if(/^#[0-9A-F]{6}$/i.test(hexa)) {
        console.log(converter(hexa.toString()));
    } else {
        console.log("<<" + hexa + ">> is not a valid Hexadecimal color.");
    }

})