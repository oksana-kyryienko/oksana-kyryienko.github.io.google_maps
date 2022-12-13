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

  let myMap = new google.maps.Map(element, options);

  const popupContent = new google.maps.InfoWindow();

  function addMarker(coordinates, title) {
    let marker = new google.maps.Marker({
      position: coordinates,
      map: myMap,
    });

    google.maps.event.addListener(marker, 'click', (function(marker) {
      return function() {
        popupContent.setContent(title);
        popupContent.open(map, marker)
      }
    })(marker)
    )
  }



  function getSelectValue(e) {
    let selectedValue = e.target.value;
  
    switch(selectedValue) {
      case 'office':
        addMarker({lat: 50.4446, lng: 30.5288}, 'Office of the President of Ukraine');
        addMarker({lat: 50.4879, lng: 30.1789}, 'Office Smart');
        addMarker({lat: 50.4594, lng: 30.3948}, 'Office 4 you');
        break;
      case 'warehouse':
        addMarker({lat:50.4415, lng:30.5219}, 'Warehouse EspressoHolic');
        addMarker({lat:50.4420, lng:30.5229}, 'Warehouse Dot Coffee');
        addMarker({lat:50.4452, lng:30.5217}, 'Warehouse Brown Cup');
        break;
    }
  }

  const list = document.querySelector('#list');

  list.addEventListener('change', function(e) {  
    getSelectValue(e)
  });

  let knopka = document.getElementById('push');
knopka.addEventListener('click', func1);
 
function func1() {
  let shadow = document.getElementById ('select');
  if (shadow.style.display !== 'none') {
  	shadow.style.display = "none";
  } else {
  	shadow.style.display = "block";
  }
  
};

const button = document.body.querySelector('[data-target="#collapseExample"]');

button.addEventListener('click', function() {
  if (button.innerText.toLowerCase() === 'hide filters') {
    button.innerText = 'Show filters';
  } else {
    button.innerText = 'Hide filters';
  }
});



};


