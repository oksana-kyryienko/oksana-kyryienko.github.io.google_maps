/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const knopka = document.getElementById('push');
knopka.addEventListener('click', toggleSelect);
function toggleSelect() {
  const shadow = document.getElementById('select');
  shadow.style.display = shadow.style.display === 'none' ? 'block' : 'none';
}
const button = document.querySelector('[data-target="#collapseExample"]');
function initMap() {
  const element = document.getElementById('map');
  const options = {
    zoom: 10,
    center: {
      lat: 50.4501,
      lng: 30.5234
    },
    myMapId: 'e57115ac55518495'
  };
  map = new google.maps.Map(element, options);
  setMarkers();
}
button.addEventListener('click', function () {
  button.innerText = button.innerText.toLowerCase() === 'hide filters' ? 'Show filters' : 'Hide filters';
});
let map,
  googleMarkers = {};
const radios = document.querySelectorAll('input[type=radio][data-marker]');
const myMarkers = {
  office: {
    options: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    'Title 1': {
      coordinates: [50.4446, 30.5288],
      info: 'Office of the President of Ukraine'
    },
    'Title 2': {
      coordinates: [50.4879, 30.1789],
      info: 'Office Smart'
    },
    'Title 3': {
      coordinates: [50.4594, 30.3948],
      info: 'Office 4 you'
    }
  },
  warehouse: {
    options: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    },
    'Title 4': {
      coordinates: [50.4415, 30.5219],
      info: 'Warehouse EspressoHolic'
    },
    'Title 5': {
      coordinates: [50.442, 30.5229],
      info: 'Warehouse Dot Coffee'
    },
    'Title 6': {
      coordinates: [50.4452, 30.5217],
      info: 'Warehouse Brown Cup'
    }
  }
};
radios.forEach(radio => radio.addEventListener('click', toggleMarkers));
function setMarkers() {
  for (let group in myMarkers) {
    for (let title in myMarkers[group]) {
      if (title === 'options') continue;
      const markerData = myMarkers[group][title];
      const visible = document.querySelector(`input[type=radio][data-marker=${group}]`).checked;
      const coordinates = markerData.coordinates;
      const info = markerData.info;
      const marker = new google.maps.Marker({
        title,
        position: {
          lat: coordinates[0],
          lng: coordinates[1]
        },
        map,
        visible,
        ...myMarkers[group].options
      });
      if (info) addInfoWindow(marker, info);
      googleMarkers[group] = googleMarkers[group] || [];
      googleMarkers[group].push(marker);
    }
  }
}
function toggleMarkers({
  target
}) {
  const group = target.dataset.marker;
  const everyMarker = getEveryMarker();
  markersHideInfoWindow(everyMarker);
  if (group === 'showall') {
    everyMarker.forEach(marker => marker.setVisible(true));
    return;
  }
  everyMarker.forEach(i => i.visible && i.setVisible(false));
  for (let marker of googleMarkers[group]) marker.setVisible(!marker.visible);
}
function addInfoWindow(marker, content) {
  const infowindow = new google.maps.InfoWindow({
    content
  });
  marker.infowindow = infowindow;
  marker.addListener('click', () => {
    markersHideInfoWindow(getEveryMarker());
    infowindow.open(map, marker);
  });
}
function getEveryMarker() {
  const arrOfEveryGroup = Object.values(googleMarkers);
  const everyMarker = [].concat.apply([], arrOfEveryGroup);
  return everyMarker;
}
function markersHideInfoWindow(markers) {
  markers.forEach(i => i.infowindow && i.infowindow.close());
}