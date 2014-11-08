$(document).ready(function() {
  // Load the SVG into the #map div
  $('#map').usmap({
    click: function(event, data) {
    },

    // Map styling
    stateHoverAnimation: 0,
    stateStyles: {fill: '#3E484F', stroke: '#7A7A7A'},
    labelBackingStyles: {fill: '#3E484F', stroke: '#7A7A7A'},
    labelBackingHoverStyles: {fill: '#DCDF8A'},
    stateHoverStyles: {fill: '#DCDF8A'},
    stateClickStyles: {fill: '#B9BF15', persistent: false}
  });
});