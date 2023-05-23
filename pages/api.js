// Maps API CONTACTANOS
// Función para inicializar el mapa
function initMap() {
    
    var latitud = -34.6158238;
    var longitud = -58.4356803;
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: latitud, lng: longitud },
      zoom: 12
    });
  
    // Marcador
    var marker = new google.maps.Marker({
      position: { lat: latitud, lng: longitud },
      map: map,
      title: 'Ubicación'
    });
  
    // Evento marcador
    marker.addListener('click', function() {
      // Realiza una solicitud a la API de Geocodificación para obtener la dirección
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'location': { lat: latitud, lng: longitud } }, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            // Muestra la dirección en una ventana de información
            var infowindow = new google.maps.InfoWindow({
              content: 'Dirección: ' + results[0].formatted_address
            });
            infowindow.open(map, marker);
          } else {
            window.alert('No se encontraron resultados de geocodificación.');
          }
        } else {
          window.alert('Error en la solicitud de geocodificación. Estado: ' + status);
        }
      });
    });
}
  