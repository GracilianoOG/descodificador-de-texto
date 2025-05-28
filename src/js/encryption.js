import { auxiliary } from "./auxiliary.js";

export const ENCRYPTION = Object.freeze([
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
]);

export const DECRYPTION = Object.freeze([
  ["enter", "e"],
  ["imes", "i"],
  ["ai", "a"],
  ["ober", "o"],
  ["ufat", "u"],
]);

function applyAlgorithm(input, output, algorithm) {
  let text = auxiliary.formatText(input.value);

  for (let code of algorithm) {
    text = text.replaceAll(code[0], code[1]);
  }
  output.value = text;
}

export function encryptText(input, output, encryption = ENCRYPTION) {
  applyAlgorithm(input, output, encryption);
}

export function decryptText(input, output, decryption = DECRYPTION) {
  applyAlgorithm(input, output, decryption);
}
