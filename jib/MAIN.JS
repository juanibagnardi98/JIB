function verificarRespuesta(opcion, pregunta) {

    const resultado = document.getElementById("resultado" + pregunta);

    resultado.style.backgroundColor = "black";
    resultado.style.margin = "20px auto";
    resultado.style.padding = "10px";

    // PREGUNTA 1
    if (pregunta === 1) {
        if (opcion === 'a') {
            resultado.textContent = "¡Correcto! Nox es el contra hechizo de Lumos. ganas 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }

    // PREGUNTA 2
    if (pregunta === 2) {
        if (opcion === 'c') {
            resultado.textContent = "¡Excelente! El Caldero Chorreante es donde Hagrid llevó a Harry, obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
}
