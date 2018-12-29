'use strict';

(function () {
  var mapContainerElement = document.querySelector('.map-container');
  var pickPointContainer = document.querySelector('fieldset > div[role="radiogroup"]');

  var adressCollection = {
    'pickup-point-1': 'https://yandex.ru/map-widget/v1/-/CBFtJ2hi3C',
    'pickup-point-2': 'https://yandex.ru/map-widget/v1/-/CBFx7WQSCD',
    'pickup-point-3': 'https://yandex.ru/map-widget/v1/-/CBRqJEbZ8D',
    'pickup-point-4': 'https://yandex.ru/map-widget/v1/-/CBRqJQAB8D'
  };

  var createMap = function (srcMap) {
    var mapIframe = window.utils.createNewNode('iframe',
        {
          'width': '100%',
          'height': '480',
          'allowfullscreen':
          'true',
          'src': srcMap
        }
    );
    return mapIframe;
  };

  // map for pickup method
  pickPointContainer.addEventListener('change', function (evt) {
    if (mapContainerElement.childNodes.length !== 0) {
      var currentMap = mapContainerElement.childNodes[0];
      currentMap.src = adressCollection[evt.target.id];
    } else {
      mapContainerElement.appendChild(createMap(adressCollection[evt.target.id]));
    }
  });
})();


