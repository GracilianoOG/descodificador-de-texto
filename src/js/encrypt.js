import { auxiliary } from "./auxiliary.js";

const encryption = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encryptText(input, output, encryption) {
    let text = auxiliary.formatText(input.value);

    for(let code of encryption) { text = text.replaceAll(code[0], code[1]); }
    output.value = text;
}

export const encrypt = {
    encryption,
    encryptText
}