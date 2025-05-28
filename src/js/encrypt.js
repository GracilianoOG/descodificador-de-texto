import { auxiliary } from "./auxiliary.js";

const ENCRYPTION = Object.freeze([
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
]);

export function encryptText(input, output, encryption = ENCRYPTION) {
  let text = auxiliary.formatText(input.value);

  for (let code of encryption) {
    text = text.replaceAll(code[0], code[1]);
  }
  output.value = text;
}
