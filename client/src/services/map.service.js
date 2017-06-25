// cart.service.js

var markers = [];
var currPos = {lat:30, lng:30}
// const getmarker = () => cartItems;

//=====================================================
  export default {
    getMarkers,
    getCenter
  }

//=====================================================
function getMarkers(){
return  [
            {position: {lat: 32.3, lng: 34.5},desc:'my home'},
            {position: {lat: 32.22, lng: 35.4},desc:'my work'}
        ]
}
//=====================================================
function getCenter(){
    return  {lat: 32.3, lng: 34.5}
}

