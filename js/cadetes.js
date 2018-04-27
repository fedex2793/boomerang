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


  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function documentReady(){
    document.getElementsByClassName("cadetes-contacto")[0].addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("contact-form").scrollIntoView({block: 'start', behavior: 'smooth'});
    });

    $("#submit-cadete").click(function(e){
        e.preventDefault();

        $('#submit-cadete').addClass("sending");
        $('#name').removeClass("error");
        $('#phone').removeClass("error");
        $('#message').removeClass("error");
        $('#email').removeClass("error");
        
        var companyName=  $('#contact-form').find('input')[0].value;
        var companyEmail= $('#contact-form').find('input')[1].value;
        var companyPhone= $('#contact-form').find('input')[2].value;
        var companyMessage= $('#contact-form').find('textarea')[0].value;
        
        var error = false;
        if(!companyName){
          error = true;
          $('#name').addClass("error");
        }
        if(!companyPhone){
          error = true;
          $('#phone').addClass("error");
        }
        if(!companyMessage){
          error = true;
          $('#message').addClass("error");
        }
        if(companyEmail && !validateEmail(companyEmail)){
          error = true;
          $('#email').addClass("error");
        }

        if(!error){
          var mail = companyEmail ? companyEmail : "-";
          var body = "Nombre del cadete: "+companyName+"<br/>Telefono: "+companyPhone+"<br/>Email: "+mail+"<br/><br/>Mensaje: "+companyMessage;

          Email.send("clientes@bng.com.uy",
          "alexis.rodriguez.contreras@gmail.com",
          "Nuevo contacto de CADETE",
          body,
          "mail.bng.com.uy",
          "clientes@bng.com.uy",
          "ClientesBng_2018",
          function done(message) { 
            $('#submit-cadete').removeClass("sending");
            $('#contact-form').find('input')[0].value = "";
            $('#contact-form').find('input')[1].value= "";
            $('#contact-form').find('input')[2].value= "";
            $('#contact-form').find('textarea')[0].value= "";
            alert("Mensaje enviado con exito, nos contactaremos a la brevedad!.");
          });
        }else{
          $('#submit-cadete').removeClass("sending");
        }
    })

    $("#submit-every").click(function(e){
        e.preventDefault();

        $('#submit-every').addClass("sending");
        $('#name-every').removeClass("error");
        $('#phone-every').removeClass("error");
        $('#message-every').removeClass("error");
        $('#email-every').removeClass("error");
        
        var companyName=  $('#contact-everywhere').find('input')[0].value;
        var companyEmail= $('#contact-everywhere').find('input')[1].value;
        var companyPhone= $('#contact-everywhere').find('input')[2].value;
        var companyMessage= $('#contact-everywhere').find('textarea')[0].value;
        
        var error = false;
        if(!companyName){
          error = true;
          $('#name-every').addClass("error");
        }
        if(!companyPhone){
          error = true;
          $('#phone-every').addClass("error");
        }
        if(!companyMessage){
          error = true;
          $('#message-every').addClass("error");
        }
        if(companyEmail && !validateEmail(companyEmail)){
          error = true;
          $('#email-every').addClass("error");
        }

        if(!error){
          var mail = companyEmail ? companyEmail : "-";
          var body = "Nombre del cadete o empresa: "+companyName+"<br/>Telefono: "+companyPhone+"<br/>Email: "+mail+"<br/><br/>Mensaje: "+companyMessage;

          Email.send("clientes@bng.com.uy",
          "alexis.rodriguez.contreras@gmail.com",
          "Nuevo contacto de CADETE",
          body,
          "mail.bng.com.uy",
          "clientes@bng.com.uy",
          "ClientesBng_2018",
          function done(message) { 
            $('#submit-every').removeClass("sending");
            $('#contact-everywhere').find('input')[0].value = "";
            $('#contact-everywhere').find('input')[1].value= "";
            $('#contact-everywhere').find('input')[2].value= "";
            $('#contact-everywhere').find('textarea')[0].value= "";
            alert("Mensaje enviado con exito, nos contactaremos a la brevedad!.");
          });
        }else{
          $('#submit-every').removeClass("sending");
        }
    })

    var messengerOpen = false;
    $("#header-contact").click(function(e){
      debugger;
      e.preventDefault();
      if(messengerOpen){
        $('#contact-everywhere').addClass( "closed" );
      }else{
        $('#contact-everywhere').removeClass( "closed" );
      }
      messengerOpen = !messengerOpen;

    });

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
  