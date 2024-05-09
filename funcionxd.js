// Función para abrir Google en una nueva pestaña
function AbrirGoogle() {
    window.open("https://www.google.com", "_blank");
  }
  
  // Manejar el evento de presionar F12 para abrir Google
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 123) {
      AbrirGoogle();
    }
  });
  
  // Manejar el evento de clic derecho para abrir Google
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    AbrirGoogle();
  });