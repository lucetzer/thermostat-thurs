

// Optional map function 
//
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: lat, lng: long},
//     zoom: 10
//   });
// }
//     var infoWindow = new google.maps.InfoWindow({map: map});
//
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//
//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         map.setCenter(pos);
//       }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//       });
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   }
//
//
//
