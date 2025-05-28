import { auxiliary } from "./auxiliary.js";

const DECRYPTION = Object.freeze([
  ["enter", "e"],
  ["imes", "i"],
  ["ai", "a"],
  ["ober", "o"],
  ["ufat", "u"],
]);

export function decryptText(input, output, decryption = DECRYPTION) {
  let text = auxiliary.formatText(input.value);

  for (let code of decryption) {
    text = text.replaceAll(code[0], code[1]);
  }
  output.value = text;
}
