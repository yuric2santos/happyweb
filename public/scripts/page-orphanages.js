// create map
const map = L.map('mapid').setView([-22.9228183,-43.2384269], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <image src="./public/images/arrow-white.svg" </a>')

// create and add marker

L.marker([-22.9228183,-43.2384269], { icon })
.addTo(map)
.bindPopup(popup)