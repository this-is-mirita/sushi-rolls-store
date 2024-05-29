console.log('counter js');

// поиск минуса и плюса из карточки
const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
//получение цифры 
const counter = document.querySelector('[data-counter]');
console.log(counter);
// клик на минус
btnMinus.addEventListener('click', function(params) {
    console.log('minus');
    //parseInt -> вернет число а не строку если больше одного то ++
    // проверка чтобы счетчик был больше 1
    if(parseInt(counter.innerText) > 1 ){
        //изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }

})
// клик на плюс
btnPlus.addEventListener('click', function(params) {
    console.log('plus');
    // counter = 1 тогда ++counter.innerText вернет 1 и прибавит к нему 1 сделает ++
    // увелечение на 1 при клике
    counter.innerText = ++counter.innerText;
})

