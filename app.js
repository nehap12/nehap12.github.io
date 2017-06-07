$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function myMap() {
var mapSantaClara = {
    center: new google.maps.LatLng(37.3541, -121.9552),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var mapSC = {
    center: new google.maps.LatLng(37.3541, -121.9552),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var mapVancouver = {
    center: new google.maps.LatLng(49.246292, -123.116226),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID 
}
var mapVan = {
    center: new google.maps.LatLng(49.246292, -123.116226),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID 
}
var mapVanc = {
    center: new google.maps.LatLng(49.246292, -123.116226),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID 
}
var mapSunny = {
    center: new google.maps.LatLng(37.3541, -121.9552),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID 
}
var mapSantaClaras = new google.maps.Map(document.getElementById("santaClara"), mapSantaClara);
var mapSCs = new google.maps.Map(document.getElementById("sc"), mapSC);
var mapVancouvers = new google.maps.Map(document.getElementById("vancouver"), mapVancouver); 
var mapVans = new google.maps.Map(document.getElementById("van"), mapVan); 
var mapVancs = new google.maps.Map(document.getElementById("vanc"), mapVanc); 
var mapSunnys = new google.maps.Map(document.getElementById("sunny"), mapSunny); 
}