
function botonesMostarOcultar(){
    let divTextarea = document.getElementById("divTextarea");
    let imagenDesencriptar = document.getElementById("imagen-desencriptar");
    let divTextos = document.getElementById("textos");
    let btnCopiar = document.getElementById("boton-copiar");
    imagenDesencriptar.style.display = "none";
    divTextos.style.display = "none";
    btnCopiar.style.display = "block";
    divTextarea.style.display = "block";
    return;
}
function encriptar (){
    let textAreaDesencriptado = document.getElementById("texto-desencriptado");
    let textoEncriptado = "";
    let texto = document.getElementById("texto-encriptar").value;
    let validacion = /[A-ZÁÉÍÓÚÑ]/;
    if(texto != ""){
        if(validacion.test(texto)){
            document.getElementById("mensaje").textContent = "Por favor ingrese un texto que no contenga mayúsculas ni acentos";
        }else{
            botonesMostarOcultar();
            textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g,"imes")
            .replace(/a/g,"ai")
            .replace(/o/g,"ober")
            .replace(/u/g,"ufat");
            textAreaDesencriptado.innerText = textoEncriptado;
        }
    }else{
        document.getElementById("mensaje").textContent = "Por favor ingrese un texto para encriptar";
    }
}
function desencriptar (){
    let textAreaDesencriptado = document.getElementById("texto-desencriptado");
    let texto = document.getElementById("texto-encriptar").value;
    let validacion = /[A-ZÁÉÍÓÚÑ]/;
    if(texto != ""){
        if(validacion.test(texto)){
            textAreaDesencriptado.innerHTML = "Por favor ingrese un texto que no contenga mayúsculas ni acentos";
        }else{
            botonesMostarOcultar();
            let textoEncriptado = "";
            textoEncriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g,"i")
            .replace(/ai/g,"a")
            .replace(/ober/g,"o")
            .replace(/ufat/g,"u");
            textAreaDesencriptado.innerText = textoEncriptado;
        }
    }else{
        document.getElementById("mensaje").textContent = "Por favor ingrese un texto para desencriptar";
    }
}
function copiar(){
    let textAreaDesencriptado = document.getElementById("texto-desencriptado").value;
    navigator.clipboard.writeText(textAreaDesencriptado).then(function(){
        document.getElementById("mensaje-copiado").textContent = "Texto copiado al portapapeles exitosamente";
    }).catch(function(err){
        document.getElementById("mensaje").textContent = "Error al copiar el texto" + err;
    });
}
function seleccionar(){
    document.getElementById("texto-encriptar").addEventListener("click", function(){
        this.select();
    });
}
