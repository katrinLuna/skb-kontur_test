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
    }
  };
})();

