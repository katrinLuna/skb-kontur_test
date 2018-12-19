'use strict';

(function () {
  window.utils = {
    showElement: function (elem) {
      if (Array.isArray(elem)) {
        elem.forEach(function (element) {
          element.hidden = false;
        });
      } else {
        elem.hidden = false;
      }
    },
    hideElement: function (elem) {
      if (Array.isArray(elem)) {
        elem.forEach(function (element) {
          element.hidden = true;
        });
      } else {
        elem.hidden = true;
      }
    },
    createNewNode: function (tag, attributes) {
      var newElement = document.createElement(tag);
      if (typeof attributes === 'object') {
        for (var name in attributes) {
          if (attributes.hasOwnProperty(name)) {
            newElement[name] = attributes[name];
          }
        }
      } else {
        newElement.classList.add(attributes);
      }
      return newElement;
    }
  };
})();

