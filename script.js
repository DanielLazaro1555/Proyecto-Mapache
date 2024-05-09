// Obtener el elemento de audio
var audio = document.getElementById("audio");

// Obtener la barra de progreso
var progress = document.querySelector(".progress");

// Variable para controlar el estado de reproducción del audio
var isPlaying = true;

// Función para pausar o reanudar la reproducción del audio y la animación del spinner
function togglePlayPause() {
  if (isPlaying) {
    audio.pause(); // Pausar la reproducción del audio
    isPlaying = false;
    document.querySelector(".spinner").classList.add("paused"); // Agregar clase para detener la animación
  } else {
    audio.play(); // Reanudar la reproducción del audio
    isPlaying = true;
    document.querySelector(".spinner").classList.remove("paused"); // Eliminar clase para reanudar la animación
  }
}

// Obtener el botón de pausa
var pauseButton = document.getElementById("pauseButton");

// Agregar evento de clic al botón de pausa
pauseButton.addEventListener("click", togglePlayPause);

// Actualizar la barra de progreso cuando cambia el tiempo de reproducción del audio
audio.addEventListener("timeupdate", function () {
  // Calcular el progreso como un porcentaje del tiempo transcurrido respecto a la duración total
  var progressPercentage = (audio.currentTime / audio.duration) * 100;
  // Actualizar la anchura de la barra de progreso
  progress.style.width = progressPercentage + "%";
});

// Obtener el botón de pausa y el icono de pausa
var pauseButton = document.getElementById("pauseButton");
var pauseIcon = document.getElementById("pauseIcon");

// Variable para controlar el estado del botón
var isPaused = true;

// Función para alternar entre las imágenes de pausa y reproducción
function toggleIcon() {
  if (isPaused) {
    pauseIcon.src = "Play.png"; // Cambiar a la imagen de pausa
  } else {
    pauseIcon.src = "Pause.png"; // Cambiar a la imagen de reproducción
  }
  isPaused = !isPaused; // Alternar el estado del botón
}

// Agregar evento de clic al botón de pausa
pauseButton.addEventListener("click", toggleIcon);

// Reproducir la música automáticamente cuando la página se carga
window.addEventListener("load", function () {
  // Mostrar mensaje de notificación
  alert("Por favor, presiona Play para comenzar la reproducción.");

  // Reproducir la música automáticamente al hacer clic en "Aceptar"
  togglePlayPause();
});


// Documentacion por Daniel Huaman - 2024
