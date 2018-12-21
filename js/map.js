'use strict';

(function () {
  var mapContainerElement = document.querySelector('.map-container');
  var pickPointContainer = document.querySelector('fieldset > div[role="radiogroup"]');
  var adressCollection = {
    'pickup-point-1': 'https://yandex.ru/map-widget/v1/-/CBFtJ2hi3C',
    'pickup-point-2': 'https://yandex.ru/map-widget/v1/-/CBFx7WQSCD'
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
  pickPointContainer.addEventListener('click', function (evt) {

    if (evt.target.tagName === 'label') {
      console.log('hi');
    }
    //переделать с input change, иначе ловлю 2 события по связке label-input
    mapContainerElement.appendChild(createMap(adressCollection[evt.target.id]));
  });
})();


