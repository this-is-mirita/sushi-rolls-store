// добавление прослушки на всём окне
window.addEventListener('click', function (event) {
    console.log('click window');
    //console.log(event.target.dataset.action);
    
    // переменная для счётчика
    let counter; 

    //проверяем клик строго по кнопка плюс либо минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        //console.log(true);

        // поиск обёртку счётчикка
        const counterWrapper = event.target.closest('.counter-wrapper');
        //console.log(counterWrapper);

        // находим див с числом счётчика
        counter = counterWrapper.querySelector('[data-counter]')
        //console.log(counter);
    }

    // проверяем является ли элемент по которому был клик кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        //console.log('plus');
        counter.innerText = ++counter.innerText;
    }
    //console.log(event.target);
    // проверяем является ли элемент по которому был клик кнопкой минус
    if (event.target.dataset.action === 'minus') {
        //console.log('minus');

        // проверка чтобы счетчик был больше 1
        if(parseInt(counter.innerText) > 1 ){
            //изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
           // если есть cart-wrapper и равен одному
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // отображение статуса корзины пустая/полная
            toggleCartStatus()
            //пересчёт стоимости в корзине
            calcCardPriceAndDelivery()

        }
    }

    // проверка на + или - внутри корзины 
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCardPriceAndDelivery()
    }
});
