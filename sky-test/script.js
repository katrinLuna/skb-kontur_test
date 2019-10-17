// модуль нодо сделать
/**
 * @type {HTMLInputElement}
 */
var newMessValue = document.querySelector('.add-new-mess__input');
var messNodeList = document.querySelector('.show-mess__list');
var createMessElement = document.querySelector('.add-new-mess__btn');
var messArray = [];

var createNewMess = function (value) {
    var messItem = document.createElement('p');
    messItem.classList.add('show-mess__item');
    messItem.innerText = value;
    messNodeList.appendChild(messItem);
    messArray.push({text: value,
        element: messItem,
        isDeleted: false
    });
}

createMessElement.addEventListener("click", function() {
    if (newMessValue.value.length > 0) {
        createNewMess(newMessValue.value);
    }
    newMessValue.value = '';
});

