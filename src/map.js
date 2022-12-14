/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let knopka = document.getElementById('push');
knopka.addEventListener('click', func1);
 
function func1() {
  let shadow = document.getElementById ('select');
  if (shadow.style.display !== 'none') {
    shadow.style.display = 'none';
  } else {
    shadow.style.display = 'block';
  }
}

const button = document.body.querySelector('[data-target="#collapseExample"]');

button.addEventListener('click', function() {
  if (button.innerText.toLowerCase() === 'hide filters') {
    button.innerText = 'Show filters';
  } else {
    button.innerText = 'Hide filters';
  }
});

let map, googleMarkers = {};
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
    },
  },
  warehouse: {
    options: { 
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    'Title 4': { 
      coordinates: [50.4415, 30.5219],
      info: 'Warehouse EspressoHolic'
    },
    'Title 5': { 
      coordinates: [50.4420, 30.5229],
      info: 'Warehouse Dot Coffee'
    },
    'Title 6': { 
      coordinates: [50.4452, 30.5217],
      info: 'Warehouse Brown Cup'
    },
  }
};


radios.forEach(i => i.addEventListener('click', radioClick));

function initMap() {
  let element = document.getElementById('map');
  
  let options = {
    zoom: 10,
    center: {
      lat: 50.4501, 
      lng: 30.5234
    },
    myMapId: 'e57115ac55518495',
  };
  
  map = new google.maps.Map(element, options);
  
  setMarkers();
}

function setMarkers () {
  let isFirst = true;
  for (let group in myMarkers) {
    for (let title in myMarkers[group]) {
      if (title === 'options') {
        continue;
      }
      const myMarker = myMarkers[group][title];
      const visible = document.querySelector(`input[type=radio][data-marker=${group}]`).checked;
      console.log(visible);
      let coordinates, info;
      
      if (myMarker[0]) {
        coordinates = myMarker;
      } else {
        coordinates = myMarker.coordinates;
        info = myMarker.info;
      }
      
      const marker = new google.maps.Marker({
        title,
        position: {lat: coordinates[0], lng: coordinates[1]},
        map,
        visible,
        ...myMarkers[group].options
      });
      
      if (info)
        addInfoWindow(marker, info);
      
      googleMarkers[group] = googleMarkers[group] || [];
      googleMarkers[group].push(marker);
    }
  }
}


function radioClick ({ target }) {
  const group = target.dataset.marker;
  const everyMarker = getEveryMarker();
  
  markersHideInfoWindow(everyMarker);
  
  if (group === 'showall') {
    everyMarker.forEach(i => i.setVisible(true));
    return;
  }
  everyMarker.forEach(i => i.visible && i.setVisible(false));
  
  for (let marker of googleMarkers[group])
    marker.setVisible(!marker.visible);
}

function addInfoWindow (marker, content) {
  const infowindow = new google.maps.InfoWindow({
    content
  });
  marker.infowindow = infowindow;
  
  marker.addListener('click', () => {
    markersHideInfoWindow(getEveryMarker());
  
    infowindow.open(map, marker);
  });
}

function getEveryMarker () {
  const arrOfEveryGroup = Object.values(googleMarkers);
  const everyMarker = [].concat.apply([], arrOfEveryGroup);
  
  return everyMarker;
}

function markersHideInfoWindow (markers) {
  markers.forEach(i => i.infowindow && i.infowindow.close());
}
