navigator.geolocation.getCurrentPosition(function(position){
const {latitude}=position.coords
const {longitude}=position.coords
console.log(latitude,longitude) ;




},function(){
    alert("your location couldnot findit")
})