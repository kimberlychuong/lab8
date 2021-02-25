function initMap() {
	// add your code here
	L.mapquest.key = 'hVQfzk5pVzhDeH4jKfuGtQqwt6TIUEkr';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.87895159458153, -117.23585797952958],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	// add a marker to the map
	L.marker([32.87895159458153, -117.23585797952958]).addTo(map);
}