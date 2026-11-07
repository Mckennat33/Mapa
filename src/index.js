import {LeafletMap, TileLayer, Marker} from 'leaflet'; // CHANGED: added Marker to the imports
// import 'leaflet/styles.css'; // KEPT commented out: CSS is loaded by the <link> tag in index.html

// Initialize the map, setting its center and zoom level
const map = new LeafletMap('map').setView([41.878156, -87.629309], 12); // CHANGED: L.map() -> new LeafletMap() (Leaflet 2.0 has no global L)

// Add OpenStreetMap tile layer
new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // CHANGED: L.tileLayer() -> new TileLayer()
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker
const marker = new Marker([41.878156, -87.629309]).addTo(map); // CHANGED: L.marker() -> new Marker()
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
