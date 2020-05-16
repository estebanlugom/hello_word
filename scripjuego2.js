
    // Da un numero al azar entre 0 y valor
    var numeroAzar = function (valor) {
        return Math.floor(Math.random() * valor);
   };
   
   // Calcule distancia entre click event y tesoro
   var traedistancia = function (event, tesoro) {
     var diffX = event.offsetX - tesoro.x;
     var diffY = event.offsetY - tesoro.y;
     return Math.sqrt((diffX * diffX) + (diffY * diffY));
   };
   
   // Genere un string representando la diferencia
   var traeAyuda = function (distancia) {
     if (distancia < 18) {
       return "Quemando!";
   
       } else if (distancia < 20) {
         return "Muy caliente";
       } else if (distancia < 40) {
         return "Caliente";
       } else if (distancia < 80) {
         return "Tibio";
       } else if (distancia < 160) {
         return "Frio";
       } else if (distancia < 320) {
         return "Muy frio";
       } else {
         return "Cogelado!";
       }
     };
   
     // Crea variables
    var ancho = 400;
     var alto = 400;
     var clicks = 0;
   
     // Crea la ubicación del tesoro
    var tesoro = {
       x: numeroAzar(ancho),
       y: numeroAzar(alto)
     };
   
     // Agrega el menejo de clicks
    $("#mapa").click(function (event) {
       clicks++;
   
       // Calcula distancia entre el click y el tesoro
      var distancia = traedistancia(event, tesoro);
       // Convierte la distancia en ayuda
      var ayuda = traeAyuda(distancia);
   
       // Actualizar el elemento #distancia
      $("#distancia").text(ayuda);
   
       // Si está muy cerca dile que ganó, encontró el tesoro!
      if (distancia < 15) {
         alert("Encontraste el tesoro en " + clicks + " clicks!");
       }
     });
            
         