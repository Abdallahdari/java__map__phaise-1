const form=document.getElementById("forom")
const inputdistance=document.getElementById("input-distance")
const inputDuration=document.getElementById("input-Duration")
const Cadence=document.getElementById("Cadence")
const cycling=document.getElementById("Cyclaing")
form.classList.add("hidden")
let map
let mapEvent
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        const coord = [latitude, longitude];
         map = L.map('map').setView(coord, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', function (mapE) {
            mapEvent =mapE

            form.classList.remove("hidden")
            inputdistance.focus()

        });

    }, function () {
        alert("Your location could not be found");
    });

    // form.addEventListener('submit',function(e){
    //     e.preventDefault()
    //     const { lat, lng } = mapEvent.latlng;  // Correct property is latlng
    //         L.marker([lat, lng]).addTo(map)
    //     .bindPopup(L.popup({
    //         maxWidth:250,
    //         minWidth:100,
    //         autoClose:false,
    //         closeOnClick:false,
    //         className:`running-popup`
    //     }))
    //     .setPopupContent("workout")
    //     .openPopup();
    //     console.log(`bismillah`) ;
    // })

    // form.addEventListener('submit',function(e) {
    //     console.log('bismillah');
    //     e.preventDefault()
    //         const { lat, lng } = mapEvent.latlng;  // Correct property is latlng
    //             L.marker([lat, lng]).addTo(map)
    //         .bindPopup(L.popup({
    //             maxWidth:250,
    //             minWidth:100,
    //             autoClose:false,
    //             closeOnClick:false,
    //             className:`running-popup`
    //         }))
    //         .setPopupContent("workout")
    //         .openPopup();
    //         console.log(`bismillah`) ;
    // });

    form.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault()
                const { lat, lng } = mapEvent.latlng;  // Correct property is latlng
                    L.marker([lat, lng]).addTo(map)
                .bindPopup(L.popup({
                    maxWidth:250,
                    minWidth:100,
                    autoClose:false,
                    closeOnClick:false,
                    className:`running-popup`
                }))
                .setPopupContent("workout")
                .openPopup();
                console.log(`bismillah`) ;
      }
    });
    