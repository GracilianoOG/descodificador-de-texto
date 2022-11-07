import { auxiliary } from "./auxiliary.js";

const decryption = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

function decryptText(input, output, decryption) {
    let text = auxiliary.formatText(input.value);

    for(let code of decryption) { text = text.replaceAll(code[0], code[1]); }
    output.value = text;
    input.focus();
}

export const decrypt = {
    decryption,
    decryptText
}