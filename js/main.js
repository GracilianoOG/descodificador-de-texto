var btnCriptografia = document.querySelector(".btn-criptografar");
var btnDescriptografia = document.querySelector(".btn-descriptografar");
var btnCopia = document.querySelector(".btn-copiar");

var mensagens = document.querySelector(".mensagens");

var txtInput = document.querySelector("#campo-input");
var txtOutput = document.querySelector("#campo-output");

btnCriptografia.addEventListener("click", criptografaTexto);
btnDescriptografia.addEventListener("click", descriptografaTexto);
btnCopia.addEventListener("click", copiaTexto);

limpaTexto();

function limpaTexto() {
    txtInput.value = "";
    txtOutput.value = "";
}

function formataTexto(texto) {
    return texto.trim().toLowerCase();
}

function escondeMensagem(mensagem, classe) {
    if(txtOutput.value.length > 0) {
        if(!mensagem.classList.contains(classe)) {mensagem.classList.add(classe);}
    } else {
        if(mensagem.classList.contains(classe)) {mensagem.classList.remove(classe);}
    }
}

function criptografaTexto() {
    var txtCriptografado = formataTexto(txtInput.value);

    txtCriptografado = txtCriptografado.replaceAll("e", "enter");
    txtCriptografado = txtCriptografado.replaceAll("i", "imes");
    txtCriptografado = txtCriptografado.replaceAll("a", "ai");
    txtCriptografado = txtCriptografado.replaceAll("o", "ober");
    txtCriptografado = txtCriptografado.replaceAll("u", "ufat");

    txtOutput.value = txtCriptografado;
    escondeMensagem(mensagens, "elemento-invisivel");
}

function descriptografaTexto() {
    var txtDescriptografado = formataTexto(txtInput.value);

    txtDescriptografado = txtDescriptografado.replaceAll("enter", "e");
    txtDescriptografado = txtDescriptografado.replaceAll("imes", "i");
    txtDescriptografado = txtDescriptografado.replaceAll("ai", "a");
    txtDescriptografado = txtDescriptografado.replaceAll("ober", "o");
    txtDescriptografado = txtDescriptografado.replaceAll("ufat", "u");

    txtOutput.value = txtDescriptografado;
    escondeMensagem(mensagens, "elemento-invisivel");
}

function copiaTexto() {
    // txtOutput.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(txtOutput.value);
}