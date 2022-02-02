
let userCoordinates =
{
    lat: 51.15356230667055,
    lng: -53.79519763212616,
};

const DEFAULT_COORDINATES = {
    lat: 35.68077,
    lng: 139.76678,
};

const ZOOM = 3;
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MAIN_ICON = {
    iconUrl: './img/icons/beer-icon.svg',
    iconSize: [58, 76],
    iconAnchor: [29, 76],
};


const getUserMapData = (dataArray) => {
    userCoordinates.lat = dataArray.address.coordinates.lat;
    userCoordinates.lng = dataArray.address.coordinates.lng;

    map.setView(userCoordinates, ZOOM);
    mainPinMarker.setLatLng(userCoordinates);

    return userCoordinates;
};

const mainPinIcon = L.icon(MAIN_ICON);

const map = L.map('map-canvas')
    .on('load', () => {

    })
    .setView(userCoordinates, ZOOM);

L.tileLayer(
    TILE_LAYER,
    {
        attribution: ATTRIBUTION,
    },
).addTo(map);

let mainPinMarker = L.marker(
    userCoordinates,
    {
        draggable: false,
        icon: mainPinIcon,
    },
);

mainPinMarker.addTo(map);

export { getUserMapData };