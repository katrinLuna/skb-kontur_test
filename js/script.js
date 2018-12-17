'use strict';

(function () {
  var pickupButtonElement = document.querySelector('#pickup-label');
  var pickupFieldElement = document.querySelector('fieldset[aria-labelledby="pickup-label"]');
  var pickupTooltipElement = document.querySelector('.phone-description-pickup');

  var deliveryButtonElement = document.querySelector('#delivery-label');
  var deliveryFieldElement = document.querySelector('fieldset[aria-labelledby="delivery-label"]');
  var deliveryTooltipElement = document.querySelector('.phone-description-delivery');

  var pickupElementsArray = [pickupFieldElement, pickupTooltipElement];
  var deliveryElementsArray = [deliveryFieldElement, deliveryTooltipElement];

  pickupButtonElement.addEventListener('click', function () {
    window.utils.showElement(pickupElementsArray);
    window.utils.hideElement(deliveryElementsArray);
  });

  deliveryButtonElement.addEventListener('click', function () {
    window.utils.hideElement(pickupElementsArray);
    window.utils.showElement(deliveryElementsArray);

  });

})();
