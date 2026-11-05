const dropdown = document.getElementById("dropdown");
const boton = document.getElementById("boton");
const textoBoton = document.getElementById("textoBoton");
const opciones = document.querySelectorAll("#lista li");

// Abrir el menú
function abrir() {
    dropdown.classList.add("abierto");
    boton.setAttribute("aria-expanded", "true");
}

// Cerrar el menú
function cerrar() {
    dropdown.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
}

// Elegir una opción
function seleccionar(opcion) {
    // Quitar el resaltado de las demás
    opciones.forEach((o) => {
        o.classList.remove("seleccionada");
        o.setAttribute("aria-selected", "false");
    });

    // Resaltar la elegida y mostrarla en el botón
    opcion.classList.add("seleccionada");
    opcion.setAttribute("aria-selected", "true");
    textoBoton.textContent = opcion.textContent;
    dropdown.classList.add("con-valor");

    cerrar();
    boton.focus();
}

// Clic en el botón: abre o cierra
boton.addEventListener("click", () => {
    if (dropdown.classList.contains("abierto")) {
        cerrar();
    } else {
        abrir();
    }
});

// Clic o teclado en cada opción
opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => seleccionar(opcion));

    opcion.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            seleccionar(opcion);
        }
    });
});

// Clic fuera del menú: se cierra
document.addEventListener("click", (evento) => {
    if (!dropdown.contains(evento.target)) {
        cerrar();
    }
});

// Tecla Escape: se cierra
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrar();
    }
});