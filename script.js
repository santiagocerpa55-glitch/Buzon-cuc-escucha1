
const formulario = document.getElementById("sugerenciaForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const categoria = document.getElementById("categoria").value;
    const asunto = document.getElementById("asunto").value.trim();
    const sugerencia = document.getElementById("sugerencia").value.trim();

    if (!nombre || !correo || !categoria || !asunto || !sugerencia) {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "#c0392b";
        return;
    }

    mensaje.textContent =
        "¡Gracias por tu sugerencia! Tu opinión ha sido recibida.";
    mensaje.style.color = "#218739";

    formulario.reset();
});