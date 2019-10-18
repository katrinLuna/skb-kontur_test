// модуль нодо сделать
/**
 * @type {HTMLInputElement}
 */
var newMessValueElement = document.querySelector('.add-new-mess__input');
var messNodeListElement = document.querySelector('.show-mess__list');
var createMessBtnElement = document.querySelector('.add-new-mess__btn');
/**
 * @type {HTMLInputElement}
 */
var showMessLineElement = document.querySelector('.show-mess__line');
/**
 * @type {Array}
 */
var messArray = [];
var indexOfMes = 0;

var createNewMess = function (value) {
    var messItem = document.createElement('p');
    messItem.classList.add('show-mess__item');
    messItem.innerText = value;
    messNodeListElement.appendChild(messItem);
    messArray.push({text: value,
                    nodeLink: messItem,
                    isDeleted: false,
                    isShow: true
    });
}

createMessBtnElement.addEventListener("click", function() {
    if (newMessValueElement.value.length > 0) {
        createNewMess(newMessValueElement.value);
    }
    newMessValueElement.value = '';
});

var showingMess = function (index) {
    showMessLineElement.value = messArray[index].text;

    if (messArray.length - 1 > index) {
        indexOfMes += 1;
    } else if (messArray.length - 1 == index) {
        indexOfMes = 0;
    }
};

setInterval( function() {
    if (messArray.length > 0) {
        showingMess(indexOfMes);
    }
}, 3000);




//надо на messArr сделать setinterval для показа сообщений у которых флаг isShow равен true

//delete-btn на этом узле обработчик событий - 
// по которому isShow у элемента становится false
// и для ноды рисуется крестик по флагу тоже 

