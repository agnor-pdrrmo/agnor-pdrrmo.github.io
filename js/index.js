
    function myFunction(x) {
        if (x.matches) { // If media query matches
            var el = document.querySelector(".leaflet-control-layers");
            el.classList.remove("leaflet-control-layers-expanded");
        } else {
            var el = document.querySelector(".leaflet-control-layers");
            el.classList.add("leaflet-control-layers-expanded");
        }
    }
    
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


