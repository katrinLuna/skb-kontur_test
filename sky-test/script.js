// модуль нодо сделать
/**
 * @type {HTMLInputElement}
 */
var newMessValueElement = document.querySelector('.add-new-mess__input');
var messNodeListElement = document.querySelector('.show-mess__list');
var createMessBtnElement = document.querySelector('.add-new-mess__btn');
var deleteMessBtnElement = document.querySelector('.show-mess__delete-btn');
/**
 * @type {HTMLInputElement}
 */
var showMessLineElement = document.querySelector('.show-mess__line');
/**
 * @type {Array}
 */
var messArray = [];
var indexOfMes = -1;
var deletedCounter = 0;

var createNewMess = function (value) {
    var messItem = document.createElement('p');
    messItem.classList.add('show-mess__item');
    messItem.innerText = value;
    messNodeListElement.appendChild(messItem);
    messArray.push({text: value,
                    nodeLink: messItem,
                    isDeleted: false
    });

    deleteMessBtnElement.removeAttribute('disabled');
}

createMessBtnElement.addEventListener('click', function() {
    if (newMessValueElement.value.length > 0) {
        createNewMess(newMessValueElement.value);
    }
    newMessValueElement.value = '';
});

var showingMess = function () {
    if (messArray.length - 1 > indexOfMes) {
        indexOfMes += 1;
    } else if (messArray.length - 1 == indexOfMes) {
        indexOfMes = 0;
    }

    if (!messArray[indexOfMes].isDeleted) {
        showMessLineElement.value = messArray[indexOfMes].text;
    } else {
      showingMess();
    }
};

var intevalShowMess = setInterval( function() {
    if (messArray.length > 0) {
        showingMess();
    }
}, 2000);

deleteMessBtnElement.addEventListener('click', function() {
    messArray[indexOfMes].isDeleted = true;
    messArray[indexOfMes].nodeLink.classList.add('show-mess__item--deleted');
        
    if (deletedCounter < messArray.length - 1) {
        deletedCounter += 1;
        showingMess();
    } else {
        deletedCounter = 0;
        showMessLineElement.value = '';
        clearInterval(intevalShowMess);
        deleteMessBtnElement.setAttribute('disabled', 'disabled');
    }
    console.log(deletedCounter);
    
  }
);

