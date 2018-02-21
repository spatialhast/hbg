var map = L.map('map', {
    center: [18.02293544106174, -76.74713015556337],
    zoom: 18,
    maxZoom: 22
});
var hash = new L.Hash(map);

var measureControl = new L.Control.Measure({
    position: 'topright',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'feet',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'sqfeet',
    decPoint: '.',
    thousandsSep: ''
});

var layerOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 22,
    maxNativeZoom: 18
});

var layerMapboxImagery = new L.tileLayer(
    'http://{s}.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJhNVlHd29ZIn0.ti6wATGDWOmCnCYen-Ip7Q', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
        maxZoom: 22,
        maxNativeZoom: 17
    });

var layerGoogleRoads = L.gridLayer.googleMutant({
    type: 'roadmap', // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    maxZoom: 22,
    maxNativeZoom: 18
});

var layerGoogleSatellite = L.gridLayer.googleMutant({
    type: 'satellite',
    maxZoom: 22,
    maxNativeZoom: 18
});

layerGoogleSatellite.addTo(map);

var orthomosaic = L.tileLayer('tiles/{z}/{x}/{y}.png', {
    tms: true,
    maxZoom: 22
});
orthomosaic.addTo(map);

var baseLayers = {
    "Google Satellite": layerGoogleSatellite,
    "Mapbox Imagery": layerMapboxImagery,
    "OpenStreetMap": layerOSM,
    "Google Roads": layerGoogleRoads
};

var overlayLayers = {
    "Orthomosaic": orthomosaic
};

L.control.layers(baseLayers, overlayLayers, {
    collapsed: false
}).addTo(map);

measureControl.addTo(map);