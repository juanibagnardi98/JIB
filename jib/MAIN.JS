const http = require("http");

const servidor = http.createServer((req, res) => {
  res.write("hola este es mi video juego");
  res.end();
});

servidor.listen(2808, () => {
  console.log("Servidor corriendo en http://localhost:2808");
});

function verificarRespuesta(opcion, pregunta) {

    const resultado = document.getElementById("resultado" + pregunta);

    resultado.style.backgroundColor = "black";
    resultado.style.margin = "20px auto";
    resultado.style.padding = "10px";

    // PREGUNTA 1
    if (pregunta === 1) {
        if (opcion === 'a') {
            resultado.textContent = "¡Correcto! Nox es el contra hechizo de Lumos, ganas 50 puntos";
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
        // PREGUNTA 3
    else if (pregunta === 3) {
        if (opcion === 'B') {
            resultado.textContent = "CORRECTO SU TIO ES SIRIUS, EL GRIM, obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 4
   else if (pregunta === 4) {
        if (opcion === 'C') {
            resultado.textContent = "CORRECTO ES BUCKBEAK, obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto . pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 5
    else if (pregunta === 5) {
        if (opcion === 'B') {
            resultado.textContent = "EXELENTE RON TIENE 6, obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 6
    if (pregunta === 6) {
        if (opcion === 'B') {
            resultado.textContent = ", obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 7
    if (pregunta === 7) {
        if (opcion === 'A') {
            resultado.textContent = ", obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 8
    if (pregunta === 8) {
        if (opcion === 'C') {
            resultado.textContent = " ,obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 9
    if (pregunta === 9) {
        if (opcion === 'B') {
            resultado.textContent = ",obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    }
        // PREGUNTA 10
    else if (pregunta === 10) {
        if (opcion === 'A') {
            resultado.textContent = ",obtienes 50 puntos";
            resultado.style.color = "yellow";
        } else {
            resultado.textContent = "Es Incorrecto. pierdes 50 puntos.";
            resultado.style.color = "red";
        }
    } 
}