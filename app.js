const textoUsuario = document.getElementById('textoUsuario');

textoUsuario.addEventListener('focus', function() {
    this.placeholder = '';
});

textoUsuario.addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Ingrese el texto aqui';
    }
});

function remplazaVocales() {
    let text = textoUsuario.value;
    let regex = /^[a-z\s]+$/;
    let regex2 = /^\d+$/;
    if (regex.test(text) && !regex2.test(text.trim())) {
        let textoEncriptado = text.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
        limpiarCaja();
        document.getElementById('result').innerText = textoEncriptado;
        document.getElementById('imagen').style.display = 'none';
    } else {
        document.getElementById("result").innerText = "El texto no es válido.";
        limpiarCaja();
    }
}

function textoOriginal() {
    let text = textoUsuario.value;
    let regex = /^[a-z\s]+$/;
    let regex2 = /^\d+$/;
    if (regex.test(text) && !regex2.test(text.trim())) {
        let textoNoEncriptado = text.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
        document.getElementById('result').innerText = textoNoEncriptado;
        limpiarCaja();
        document.getElementById('imagen').style.display = 'none';
    } else {
        document.getElementById("result").innerText = "El texto no es válido.";
        limpiarCaja();
    }
}

function limpiarCaja() {
    textoUsuario.value = '';
}

function clearParagraph() {
    document.getElementById("result").innerText = '';
}

function copyText() {
    let text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text).then(() => {
        let copyButton = document.getElementById("boton_copiado");
        copyButton.innerText = "Copiado!";
        setTimeout(() => {
            copyButton.innerText = "Copiar Texto";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
