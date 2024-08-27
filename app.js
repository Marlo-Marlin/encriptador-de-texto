function encriptar() {
    let texto = document.getElementById("texto").value.trim();

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("titulo_mensaje").textContent = "Texto encriptado con éxito";
        document.getElementById("parrafo").textContent = "";
    } else {
        document.getElementById("figura").src = "./img/Muñeco.png";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("titulo_mensaje").textContent = "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent = "";
    } else {
        document.getElementById("figura").src = "./img/Muñeco.png";
        alert("Debes ingresar algún texto");
    }
}

function copiarTexto() {
    let mensaje = document.getElementById("mensaje").value;

    navigator.clipboard.writeText(mensaje).then(() => {
        alert("Texto copiado: " + mensaje);
    }).catch(err => {
        alert("Error al copiar el texto: ", err);
    });
}

