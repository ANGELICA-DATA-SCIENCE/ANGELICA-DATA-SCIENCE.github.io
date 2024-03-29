document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para enviar el formulario
        alert("Mensaje enviado correctamente");
        // Puedes redirigir a una página de confirmación o realizar otras acciones después de enviar el formulario
    });
});

function initMap() {
    // Coordenadas de la ubicación
    var ubicacion = src=https//maps.app.goo.gl/pfbfD3wRDdarnZdH6;
    // Mapa centrado en la ubicación
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: ubicacion
    });
    // Marcador en la ubicación
    var marker = new google.maps.Marker({
        position: ubicacion,
        map: map
    });
}
