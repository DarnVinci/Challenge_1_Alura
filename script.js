function encriptar(){
    var texto = document.getElementById("textArea1").value.toLowerCase();
    var textoEncriptado = texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto-panel-derecho").style.display = "none";
    document.getElementById("textArea2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";    

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoEncriptado.value = textoEncriptado;

    document.getElementById("texto").value = '';
}

function desencriptar(){
    var texto = document.getElementById("textArea1").value.toLowerCase();
    var textoEncriptado = texto.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto-panel-derecho").style.display = "none";
    document.getElementById("textArea2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById("textArea2").value.toLowerCase());
    alert("Copiado");
}
