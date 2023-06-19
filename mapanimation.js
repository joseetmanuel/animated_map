const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

mapboxgl.accessToken =   'aquí va la clave';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

let counter = 0;
new mapboxgl.Marker().setLngLat(busStops[counter]).addTo(map);

function move() {

  setTimeout(() => {
    if (counter >= busStops.length) return;
    new mapboxgl.Marker().setLngLat(busStops[counter]).addTo(map);
    counter++;
    move();
  }, 1000);
}

