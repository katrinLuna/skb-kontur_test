'use strict';

(function () {
  var pickupButtonElement = document.querySelector('#pickup-label');
  var pickupFieldElement = document.querySelector('fieldset[aria-labelledby="pickup-label"]');
  var pickupTooltipElement = document.querySelector('.phone-description-pickup');

  var courierButtonElement = document.querySelector('#delivery-label');
  var courierFieldElement = document.querySelector('fieldset[aria-labelledby="delivery-label"]');
  var courierTooltipElement = document.querySelector('.phone-description-delivery');

  var pickupElementsArray = [pickupFieldElement, pickupTooltipElement];
  var courierElementsArray = [courierFieldElement, courierTooltipElement];

  var mapContainerElement = document.querySelector('.map-container');

  //toogle delivery method
  pickupButtonElement.addEventListener('click', function () {
    window.utils.showElement(pickupElementsArray);
    window.utils.hideElement(courierElementsArray);
  });

  courierButtonElement.addEventListener('click', function () {
    window.utils.hideElement(pickupElementsArray);
    window.utils.showElement(courierElementsArray);
  });

  //map for pickup method


})();
