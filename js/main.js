var btnCriptografia = document.querySelector(".btn-criptografar");
var btnDescriptografia = document.querySelector(".btn-descriptografar");
var mensagens = document.querySelector(".mensagens");

var txtInput = document.querySelector("#campo-input");
var txtOutput = document.querySelector("#campo-output");

btnCriptografia.addEventListener("click", criptografaTexto);
btnDescriptografia.addEventListener("click", descriptografaTexto);

function formataTexto(texto) {
    return texto.trim().toLowerCase();
}

function escondeMensagem(mensagem) {
    if(txtOutput.value.length > 0) {
        mensagem.style.visibility = "hidden";
    } else {
        mensagem.style.visibility = "visible";
    }
    console.log(txtOutput.value.length);
}

function criptografaTexto() {
    var txtCriptografado = formataTexto(txtInput.value);

    txtCriptografado = txtCriptografado.replaceAll("e", "enter");
    txtCriptografado = txtCriptografado.replaceAll("i", "imes");
    txtCriptografado = txtCriptografado.replaceAll("a", "ai");
    txtCriptografado = txtCriptografado.replaceAll("o", "ober");
    txtCriptografado = txtCriptografado.replaceAll("u", "ufat");

    txtOutput.value = txtCriptografado;
    escondeMensagem(mensagens);
}

function descriptografaTexto() {
    var txtDescriptografado = formataTexto(txtInput.value);

    txtDescriptografado = txtDescriptografado.replaceAll("enter", "e");
    txtDescriptografado = txtDescriptografado.replaceAll("imes", "i");
    txtDescriptografado = txtDescriptografado.replaceAll("ai", "a");
    txtDescriptografado = txtDescriptografado.replaceAll("ober", "o");
    txtDescriptografado = txtDescriptografado.replaceAll("ufat", "u");

    txtOutput.value = txtDescriptografado;
}