import { encrypt } from "./encrypt.js";
import { decrypt } from "./decrypt.js";
import { auxiliary } from "./auxiliary.js";

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");

const messageContainer = document.querySelector(".message");
const txtOutputContainer = document.querySelector(".message-result");

const txtInput = document.querySelector("#message-input");
const txtOutput = document.querySelector("#message-output");

btnEncrypt.addEventListener("click", () => { encrypt.encryptText(txtInput, txtOutput, encrypt.encryption) });
btnDecrypt.addEventListener("click", () => { decrypt.decryptText(txtInput, txtOutput, decrypt.decryption) });
btnCopy.addEventListener("click", () => { auxiliary.copyTextToClipboard(txtOutput.value) });

btnCopy.addEventListener("click", () => {
    btnCopy.textContent = "Copiado";
    btnCopy.animate([
        { borderColor: "green", color: "green", pointerEvents: "none", offset: 0 },
        { color: "transparent", offset: 0.75 }
    ], 1800);
    setTimeout(() => { btnCopy.textContent = "Copiar" }, 1200);
});

txtInput.addEventListener("focus", () => {
    if(txtOutput.value.length > 0) {
        auxiliary.hideElement(messageContainer);
        auxiliary.showElement(txtOutputContainer);
        return;
    }
    auxiliary.showElement(messageContainer);
    auxiliary.hideElement(txtOutputContainer);
});

(() => {
    txtInput.value = "";
    txtOutput.value = "";
})();