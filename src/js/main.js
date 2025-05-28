import { encrypt } from "./encrypt.js";
import { decrypt } from "./decrypt.js";
import { auxiliary } from "./auxiliary.js";
import { changeTheme, getCurrentTheme } from "./theme.js";

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");
const switcher = document.querySelector("#theme-switcher");

const messageContainer = document.querySelector(".message");
const txtOutputContainer = document.querySelector(".message-result");

const txtInput = document.querySelector("#message-input");
const txtOutput = document.querySelector("#message-output");

btnEncrypt.addEventListener("click", () => {
  encrypt.encryptText(txtInput, txtOutput, encrypt.encryption);
  auxiliary.outputMessage(txtInput, {
    message: messageContainer,
    output: txtOutputContainer,
  });
});

btnDecrypt.addEventListener("click", () => {
  decrypt.decryptText(txtInput, txtOutput, decrypt.decryption);
  auxiliary.outputMessage(txtInput, {
    message: messageContainer,
    output: txtOutputContainer,
  });
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
