'use strict';

(function () {
  var mapContainerElement = document.querySelector('.map-container');
  var pickPoint = document.querySelector('label[for="pickup-point-1"]');

  var createMap = function (srcAdress) {
    var mapIframe = window.utils.createNewNode('iframe', {'width': '100%', 'height': '480', 'allowfullscreen': 'true', 'src': srcAdress}
    );
    return mapIframe;
  };

  // map for pickup method
  pickPoint.addEventListener('click', function () {
    mapContainerElement.appendChild(createMap('https://yandex.ru/map-widget/v1/-/CBFtJ2hi3C'));
  });
})();


