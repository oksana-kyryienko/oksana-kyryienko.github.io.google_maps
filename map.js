/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const knopka = document.getElementById('push');
knopka.addEventListener('click', toggleSelect);

function toggleSelect() {
  const shadow = document.getElementById('select');
  shadow.style.display = shadow.style.display === 'none' ? 'block' : 'none';
}

const button = document.querySelector('[data-target="#collapseExample"]');

button.addEventListener('click', function () {
  button.innerText =
    button.innerText.toLowerCase() === 'hide filters'
      ? 'Show filters'
      : 'Hide filters';
});

let map,
  googleMarkers = {};
const radios = document.querySelectorAll('input[type=radio][data-marker]');
const myMarkers = {
  office: {
    options: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    },
    'Title 1': {
      coordinates: [50.4446, 30.5288],
      info: 'Office of the President of Ukraine',
    },
    'Title 2': {
      coordinates: [50.4879, 30.1789],
      info: 'Office Smart',
    },
    'Title 3': {
      coordinates: [50.4594, 30.3948],
      info: 'Office 4 you',
    },
  },
  warehouse: {
    options: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    'Title 4': {
      coordinates: [50.4415, 30.5219],
      info: 'Warehouse EspressoHolic',
    },
    'Title 5': {
      coordinates: [50.442, 30.5229],
      info: 'Warehouse Dot Coffee',
    },
    'Title 6': {
      coordinates: [50.4452, 30.5217],
      info: 'Warehouse Brown Cup',
    },
  },
};

radios.forEach((radio) => radio.addEventListener('click', toggleMarkers));

function initMap() {
  const element = document.getElementById('map');
  const options = {
    zoom: 10,
    center: {
      lat: 50.4501,
      lng: 30.5234,
    },
    myMapId: 'e57115ac55518495',
  };
  map = new google.maps.Map(element, options);
  setMarkers();
}

function setMarkers() {
  for (let group in myMarkers) {
    for (let title in myMarkers[group]) {
      if (title === 'options') continue;
      const markerData = myMarkers[group][title];
      const visible = document.querySelector(
        `input[type=radio][data-marker=${group}]`
      ).checked;
      const coordinates = markerData.coordinates;
      const info = markerData.info;
      const marker = new google.maps.Marker({
        title,
        position: { lat: coordinates[0], lng: coordinates[1] },
        map,
        visible,
        ...myMarkers[group].options,
      });
      if (info) addInfoWindow(marker, info);
      googleMarkers[group] = googleMarkers[group] || [];
      googleMarkers[group].push(marker);
    }
  }
}

function toggleMarkers({ target }) {
  const group = target.dataset.marker;
  const everyMarker = getEveryMarker();
  markersHideInfoWindow(everyMarker);

  if (group === 'showall') {
    everyMarker.forEach((marker) => marker.setVisible(true));
    return;
  }

  everyMarker.forEach((i) => i.visible && i.setVisible(false));

  for (let marker of googleMarkers[group]) marker.setVisible(!marker.visible);
}

function addInfoWindow(marker, content) {
  const infowindow = new google.maps.InfoWindow({
    content,
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
  markers.forEach((i) => i.infowindow && i.infowindow.close());
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG5jb25zdCBrbm9wa2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVzaCcpO1xua25vcGthLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VsZWN0KTtcblxuZnVuY3Rpb24gdG9nZ2xlU2VsZWN0KCkge1xuICBjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Jyk7XG4gIHNoYWRvdy5zdHlsZS5kaXNwbGF5ID0gc2hhZG93LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiNjb2xsYXBzZUV4YW1wbGVcIl0nKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBidXR0b24uaW5uZXJUZXh0ID1cbiAgICBidXR0b24uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkgPT09ICdoaWRlIGZpbHRlcnMnXG4gICAgICA/ICdTaG93IGZpbHRlcnMnXG4gICAgICA6ICdIaWRlIGZpbHRlcnMnO1xufSk7XG5cbmxldCBtYXAsXG4gIGdvb2dsZU1hcmtlcnMgPSB7fTtcbmNvbnN0IHJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9cmFkaW9dW2RhdGEtbWFya2VyXScpO1xuY29uc3QgbXlNYXJrZXJzID0ge1xuICBvZmZpY2U6IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uOiAnaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9tcy9pY29ucy9ncmVlbi1kb3QucG5nJyxcbiAgICB9LFxuICAgICdUaXRsZSAxJzoge1xuICAgICAgY29vcmRpbmF0ZXM6IFs1MC40NDQ2LCAzMC41Mjg4XSxcbiAgICAgIGluZm86ICdPZmZpY2Ugb2YgdGhlIFByZXNpZGVudCBvZiBVa3JhaW5lJyxcbiAgICB9LFxuICAgICdUaXRsZSAyJzoge1xuICAgICAgY29vcmRpbmF0ZXM6IFs1MC40ODc5LCAzMC4xNzg5XSxcbiAgICAgIGluZm86ICdPZmZpY2UgU21hcnQnLFxuICAgIH0sXG4gICAgJ1RpdGxlIDMnOiB7XG4gICAgICBjb29yZGluYXRlczogWzUwLjQ1OTQsIDMwLjM5NDhdLFxuICAgICAgaW5mbzogJ09mZmljZSA0IHlvdScsXG4gICAgfSxcbiAgfSxcbiAgd2FyZWhvdXNlOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgaWNvbjogJ2h0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMvbXMvaWNvbnMvYmx1ZS1kb3QucG5nJyxcbiAgICB9LFxuICAgICdUaXRsZSA0Jzoge1xuICAgICAgY29vcmRpbmF0ZXM6IFs1MC40NDE1LCAzMC41MjE5XSxcbiAgICAgIGluZm86ICdXYXJlaG91c2UgRXNwcmVzc29Ib2xpYycsXG4gICAgfSxcbiAgICAnVGl0bGUgNSc6IHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbNTAuNDQyLCAzMC41MjI5XSxcbiAgICAgIGluZm86ICdXYXJlaG91c2UgRG90IENvZmZlZScsXG4gICAgfSxcbiAgICAnVGl0bGUgNic6IHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbNTAuNDQ1MiwgMzAuNTIxN10sXG4gICAgICBpbmZvOiAnV2FyZWhvdXNlIEJyb3duIEN1cCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4gcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNYXJrZXJzKSk7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgem9vbTogMTAsXG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDUwLjQ1MDEsXG4gICAgICBsbmc6IDMwLjUyMzQsXG4gICAgfSxcbiAgICBteU1hcElkOiAnZTU3MTE1YWM1NTUxODQ5NScsXG4gIH07XG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudCwgb3B0aW9ucyk7XG4gIHNldE1hcmtlcnMoKTtcbn1cblxuZnVuY3Rpb24gc2V0TWFya2VycygpIHtcbiAgZm9yIChsZXQgZ3JvdXAgaW4gbXlNYXJrZXJzKSB7XG4gICAgZm9yIChsZXQgdGl0bGUgaW4gbXlNYXJrZXJzW2dyb3VwXSkge1xuICAgICAgaWYgKHRpdGxlID09PSAnb3B0aW9ucycpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgbWFya2VyRGF0YSA9IG15TWFya2Vyc1tncm91cF1bdGl0bGVdO1xuICAgICAgY29uc3QgdmlzaWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBpbnB1dFt0eXBlPXJhZGlvXVtkYXRhLW1hcmtlcj0ke2dyb3VwfV1gXG4gICAgICApLmNoZWNrZWQ7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IG1hcmtlckRhdGEuY29vcmRpbmF0ZXM7XG4gICAgICBjb25zdCBpbmZvID0gbWFya2VyRGF0YS5pbmZvO1xuICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGNvb3JkaW5hdGVzWzBdLCBsbmc6IGNvb3JkaW5hdGVzWzFdIH0sXG4gICAgICAgIG1hcCxcbiAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgLi4ubXlNYXJrZXJzW2dyb3VwXS5vcHRpb25zLFxuICAgICAgfSk7XG4gICAgICBpZiAoaW5mbykgYWRkSW5mb1dpbmRvdyhtYXJrZXIsIGluZm8pO1xuICAgICAgZ29vZ2xlTWFya2Vyc1tncm91cF0gPSBnb29nbGVNYXJrZXJzW2dyb3VwXSB8fCBbXTtcbiAgICAgIGdvb2dsZU1hcmtlcnNbZ3JvdXBdLnB1c2gobWFya2VyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWFya2Vycyh7IHRhcmdldCB9KSB7XG4gIGNvbnN0IGdyb3VwID0gdGFyZ2V0LmRhdGFzZXQubWFya2VyO1xuICBjb25zdCBldmVyeU1hcmtlciA9IGdldEV2ZXJ5TWFya2VyKCk7XG4gIG1hcmtlcnNIaWRlSW5mb1dpbmRvdyhldmVyeU1hcmtlcik7XG5cbiAgaWYgKGdyb3VwID09PSAnc2hvd2FsbCcpIHtcbiAgICBldmVyeU1hcmtlci5mb3JFYWNoKChtYXJrZXIpID0+IG1hcmtlci5zZXRWaXNpYmxlKHRydWUpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVyeU1hcmtlci5mb3JFYWNoKChpKSA9PiBpLnZpc2libGUgJiYgaS5zZXRWaXNpYmxlKGZhbHNlKSk7XG5cbiAgZm9yIChsZXQgbWFya2VyIG9mIGdvb2dsZU1hcmtlcnNbZ3JvdXBdKSBtYXJrZXIuc2V0VmlzaWJsZSghbWFya2VyLnZpc2libGUpO1xufVxuXG5mdW5jdGlvbiBhZGRJbmZvV2luZG93KG1hcmtlciwgY29udGVudCkge1xuICBjb25zdCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgIGNvbnRlbnQsXG4gIH0pO1xuICBtYXJrZXIuaW5mb3dpbmRvdyA9IGluZm93aW5kb3c7XG5cbiAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYXJrZXJzSGlkZUluZm9XaW5kb3coZ2V0RXZlcnlNYXJrZXIoKSk7XG5cbiAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlcnlNYXJrZXIoKSB7XG4gIGNvbnN0IGFyck9mRXZlcnlHcm91cCA9IE9iamVjdC52YWx1ZXMoZ29vZ2xlTWFya2Vycyk7XG4gIGNvbnN0IGV2ZXJ5TWFya2VyID0gW10uY29uY2F0LmFwcGx5KFtdLCBhcnJPZkV2ZXJ5R3JvdXApO1xuXG4gIHJldHVybiBldmVyeU1hcmtlcjtcbn1cblxuZnVuY3Rpb24gbWFya2Vyc0hpZGVJbmZvV2luZG93KG1hcmtlcnMpIHtcbiAgbWFya2Vycy5mb3JFYWNoKChpKSA9PiBpLmluZm93aW5kb3cgJiYgaS5pbmZvd2luZG93LmNsb3NlKCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9