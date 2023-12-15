// Crea los copos de nieve con JavaScript

  // Función para generar un número aleatorio entre dos valores
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para crear los copos de nieve
  function createSnowflakes() {
    // Obtener el ancho y alto de la pantalla
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    // Crear varios copos de nieve
    for (var i = 0; i < 500; i++) {
      // Crear un nuevo elemento div para el copo de nieve
      var snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      // Establecer el tamaño y la posición aleatoria del copo de nieve
      var size = random(5, 15);
      snowflake.style.width = size + "px";
      snowflake.style.height = size + "px";
      snowflake.style.left = random(0, screenWidth) + "px";
      snowflake.style.top = random(-screenHeight, 0) + "px";

      // Establecer la velocidad de caída del copo de nieve
      var speed = random(3, 9); // Modificado de 2-8 a 3-9
      snowflake.style.animationDuration = speed + "s";

      // Añadir el copo de nieve al cuerpo del documento
      document.body.appendChild(snowflake);
    }
  }

  // Llamar a la función para crear los copos de nieve al cargar la página
  window.onload = createSnowflakes;
