  // Google Maps Scripts
  var map = null;
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(-34.915364, -56.159267));
  });
  
  function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


  document.addEventListener('DOMContentLoaded', documentReady, false);

  function documentReady(){
    document.getElementsByClassName("empresa-ecommerse")[0].addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("ecommerse").scrollIntoView({block: 'start', behavior: 'smooth'});
    });
    document.getElementsByClassName("cadetes")[0].addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("delivery").scrollIntoView({block: 'start', behavior: 'smooth'});
    });
    document.getElementsByClassName("nuestra-empresa")[0].addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("company").scrollIntoView({block: 'start', behavior: 'smooth'});
    });
    document.getElementsByClassName("contactarnos")[0].addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("map").scrollIntoView({block: 'start', behavior: 'smooth'});
    });

    var messengerOpen = false;
    $("#header-contact").click(function(e){
      e.preventDefault();
      if(messengerOpen){
        $('#contact-everywhere').addClass( "closed" );
      }else{
        $('#contact-everywhere').removeClass( "closed" );
      }
      messengerOpen = !messengerOpen;
  })

  $(".main-contacto").click(function(e){
    e.preventDefault();
    if(messengerOpen){
      $('#contact-everywhere').addClass( "closed" );
    }else{
      $('#contact-everywhere').removeClass( "closed" );
    }
    messengerOpen = !messengerOpen;
  });
}

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 15,
  
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(-34.915364, -56.159267), // New York
  
      // Disables the default Google Maps UI components
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: false,
  
      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#000000"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };
  
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
  
    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);
  
    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'images/map-marker.svg';
    var myLatLng = new google.maps.LatLng(-34.915364, -56.159267);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  