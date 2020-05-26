var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoianNtaXRoMzEyIiwiYSI6ImNrYWl2aW00MzA1cWwyeG42azJhM283dG8ifQ.1y1YZAEknlOOrB_fCkTXXQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-87.6298, 41.8781],
    zoom: 17,
    bearing: -12,
    pitch: 0,
    interactive: false
});

// pixels the map pans when the up or down arrow is clicked
var deltaDistance = 100;
 
// degrees the map rotates when the left or right arrow is clicked
var deltaDegrees = 25;
 
function easing(t) {
    return t * (2 - t);
}

map.on('load', function() {
    map.getCanvas().focus();
    map.getCanvas().addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.which === 38) {
            // up
                map.panBy([0, -deltaDistance], {
                easing: easing
            });
        } else if (e.which === 40) {
            // down
            map.panBy([0, deltaDistance], {
                easing: easing
            });
        } else if (e.which === 37) {
            // left
            map.easeTo({
                bearing: map.getBearing() - deltaDegrees,
                easing: easing
            });
        } else if (e.which === 39) {
            // right
            map.easeTo({
                bearing: map.getBearing() + deltaDegrees,
                easing: easing
            });
        }
    },
    true);
});
