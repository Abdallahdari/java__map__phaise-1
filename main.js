document.addEventListener('DOMContentLoaded', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        const coord = [latitude, longitude];
        const map = L.map('map').setView(coord, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', function (e) {
            const { lat, lng } = e.latlng;
            L.marker([lat, lng]).addTo(map)
                .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 200,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'workout-popup'
                }))
                .setPopupContent("Workout")
                .openPopup();
        });

    }, function () {
        alert("Your location could not be found");
    });
});
