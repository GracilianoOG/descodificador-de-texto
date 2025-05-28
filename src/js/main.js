import { encryptText } from "./encrypt.js";
import { decryptText } from "./decrypt.js";
import { auxiliary } from "./auxiliary.js";
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
  encryptText(txtInput, txtOutput);
  const validity = auxiliary.outputMessage(txtInput, {
    message: messageContainer,
    output: txtOutputContainer,
  });
  if (validity) {
    ariaRegion.textContent = "Criptografia realizada com sucesso!";
  } else {
    ariaRegion.textContent = "Nenhuma mensagem encontrada para criptografar!";
  }
});

btnDecrypt.addEventListener("click", () => {
  decryptText(txtInput, txtOutput);
  const validity = auxiliary.outputMessage(txtInput, {
    message: messageContainer,
    output: txtOutputContainer,
  });
  if (validity) {
    ariaRegion.textContent = "Descriptografia realizada com sucesso!";
  } else {
    ariaRegion.textContent =
      "Nenhuma mensagem encontrada para descriptografar!";
  }
});

btnCopy.addEventListener("click", () => {
  auxiliary.copyTextToClipboard(txtOutput.value);
  auxiliary.animateButtonState(btnCopy, "Copiado");
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
