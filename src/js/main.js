import { encryptText, decryptText } from "./encryption.js";
import * as utils from "./auxiliary.js";
import { changeTheme, getCurrentTheme } from "./theme.js";

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");
const switcher = document.querySelector("#theme-switcher");
const ariaRegion = document.querySelector("#aria-region");

const messageContainer = document.querySelector(".message");
const txtOutputContainer = document.querySelector(".message-result");

const txtInput = document.querySelector("#message-input");
const txtOutput = document.querySelector("#message-output");

btnEncrypt.addEventListener("click", () => {
  try {
    encryptText(txtInput, txtOutput);
    utils.showElement(txtOutputContainer);
    utils.hideElement(messageContainer);
    ariaRegion.textContent = "Criptografia realizada com sucesso!";
  } catch {
    utils.showElement(messageContainer);
    utils.hideElement(txtOutputContainer);
    ariaRegion.textContent = "Nenhuma mensagem encontrada para criptografar!";
  }
});

btnDecrypt.addEventListener("click", () => {
  try {
    decryptText(txtInput, txtOutput);
    utils.showElement(txtOutputContainer);
    utils.hideElement(messageContainer);
    ariaRegion.textContent = "Descriptografia realizada com sucesso!";
  } catch {
    utils.showElement(messageContainer);
    utils.hideElement(txtOutputContainer);
    ariaRegion.textContent =
      "Nenhuma mensagem encontrada para descriptografar!";
  }
});

btnCopy.addEventListener("click", () => {
  utils.copyTextToClipboard(txtOutput.value);
  utils.animateButtonState(btnCopy, "Copiar", "Copiado");
  ariaRegion.textContent = "Texto copiado com sucesso!";
});

switcher.addEventListener("click", () => {
  changeTheme();
  switcher.setAttribute("aria-checked", getCurrentTheme() === "dark");
});

(() => {
  txtInput.value = "";
  txtOutput.value = "";
  switcher.setAttribute("aria-checked", getCurrentTheme() === "dark");
})();
