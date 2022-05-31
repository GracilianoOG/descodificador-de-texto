var btnCriptografia = document.querySelector(".btn-criptografar");
var btnDescriptografia = document.querySelector(".btn-descriptografar");

var txtInput = document.querySelector("#campo-input");
var txtOutput = document.querySelector("#campo-output");

btnCriptografia.addEventListener("click", criptografaTexto);
btnDescriptografia.addEventListener("click", descriptografaTexto);

function criptografaTexto() {
    var txtCriptografado = txtInput.value;

    txtCriptografado = txtCriptografado.replace(/e/g, "enter");
    txtCriptografado = txtCriptografado.replace(/i/g, "imes");
    txtCriptografado = txtCriptografado.replace(/a/g, "ai");
    txtCriptografado = txtCriptografado.replace(/o/g, "ober");
    txtCriptografado = txtCriptografado.replace(/u/g, "ufat");

    txtOutput.value = txtCriptografado.trim();
}

function descriptografaTexto() {
    var txtDescriptografado = txtInput.value;

    txtDescriptografado = txtDescriptografado.replace(/enter/g, "e");
    txtDescriptografado = txtDescriptografado.replace(/imes/g, "i");
    txtDescriptografado = txtDescriptografado.replace(/ai/g, "a");
    txtDescriptografado = txtDescriptografado.replace(/ober/g, "o");
    txtDescriptografado = txtDescriptografado.replace(/ufat/g, "u");

    txtOutput.value = txtDescriptografado.trim();
}