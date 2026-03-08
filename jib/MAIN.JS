const http = require("http");
const fs = require("fs");
const path = require("path");

const servidor = http.createServer((req, res) => {
  const rutaArchivo = path.join(__dirname, "HP.html");

  fs.readFile(rutaArchivo, (error, data) => {
    if (error) {
      res.writeHead(500);
      res.end("Error cargando la página");
      return;
    }
  
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const PORT = process.env.PORT || 2808;

servidor.listen(PORT, () => {
  console.log("Servidor corriendo");
}); {
  console.log("Servidor en http://localhost:2808");
};

let barra = document.getElementById("barra");

barra.style.width = progreso + "%";

if(progreso < 40){
    barra.style.backgroundColor = "red";
}
else if(progreso < 80){
    barra.style.backgroundColor = "orange";
}
else{
    barra.style.backgroundColor = "limegreen";
}

function verificarRespuesta(opcion, pregunta) {
    const resultado = document.getElementById("resultado" + pregunta);
    let cambio = 0;

    resultado.style.backgroundColor = "black";
    resultado.style.margin = "20px auto";
    resultado.style.padding = "10px";

    // PREGUNTA 1
    if (pregunta === 1) {
        if (opcion === 'a') {
            resultado.textContent = "¡CORRECTO! NOX ES EL CONTRA HECHIZO DE LUMOS, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "MUY MAL, REPRUEBAS ENCANTAMIENTOS, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 2
    if (pregunta === 2) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, FUE EN EL CALDERO CHORREANTE, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "ES EN SERIO? VUELVE A VER LA PELICULA, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 3
    if (pregunta === 3) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, SU TIO ES SIRIUS BLACK, CONOCIDO COMO CANUTO O GRIM, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "NO CONOCES DE FAMILIAS DE MAG@S NOBLES...PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 4
    if (pregunta === 4) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, ES BUCKBEAK, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "VUELVE A VER LA PELICULA MUGGLE, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 5
    if (pregunta === 5) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, RON WEASLY, TIENE 6 HERMANOS WEASLY, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "TE OLVIDASTE CUANTOS HERMANOS TIENE?, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 6
    if (pregunta === 6) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, SIGUE ESTUDIANDO, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 7
    if (pregunta === 7) {
        if (opcion === 'a') {
            resultado.textContent = "CORRECTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, ACASO ERES UN MUGGLE?, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 8
    if (pregunta === 8) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, DEBES ESTUDIAR MAS, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 9
    if (pregunta === 9) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, Y ASI TE HACES LLAMAR MAG@, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    // PREGUNTA 10
    if (pregunta === 10) {
        if (opcion === 'a') {
            resultado.textContent = "CORRECTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, ERES UN SANGRE SUCIA E INMUNDA, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }
// SUMAR PUNTOS
puntos += cambio;

document.getElementById("puntos").textContent = puntos;

// ANIMACION
resultado.style.transform = "scale(1.1)";
setTimeout(() => {
    resultado.style.transform = "scale(1)";
}, 300);

// PROGRESO
respondidas++;

let progreso = (respondidas / 10) * 100;
document.getElementById("barra").style.width = progreso + "%";

// MENSAJE FINAL
if (respondidas === 10) {

    let mensajeFinal = "";

    if (puntos >= 400) {
        mensajeFinal = "¡ERES UN VERDADERO MAG@ DE HOGWARTS!";
    } 
    else if (puntos >= 200) {
        mensajeFinal = "SABES BASTANTE DEL MUNDO MAGICO";
    } 
    else {
        mensajeFinal = "NECESITAS ESTUDIAR MAS MAGIA";
    }

    document.getElementById("resultadoFinal").textContent =
    "Juego terminado. Puntos: " + puntos + " - " + mensajeFinal;
}
}