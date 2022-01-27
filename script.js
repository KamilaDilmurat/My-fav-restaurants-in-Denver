
var STLfood = L.map('STLfood').setView([38.6270,-90.1994], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(STLfood);


var marker1 = L.marker([38.649, -90.261]).addTo(STLfood);
var marker2 = L.marker([38.640, -90.260]).addTo(STLfood);
var marker3 = L.marker([38.599, -90.237]).addTo(STLfood);
var marker4 = L.marker([38.646, -90.262]).addTo(STLfood);
var marker5 = L.marker([38.560, -90.252]).addTo(STLfood);

marker1.bindPopup("<b>Resturant 1</b><br>Jeni's Splendid Ice Creams").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>PokeDoke").openPopup();
marker3.bindPopup("<b>Resturant 1</b><br>Sheesh").openPopup();
marker4.bindPopup("<b>Resturant 2</b><br>Taste Of Lebanon").openPopup();
marker5.bindPopup("<b>Resturant 1</b><br>Pho Grand").openPopup();
