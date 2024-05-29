console.log('hay card');

const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event){
    //проверяем что клик был совершон по кнопке в (добавить в корзину)
    //hasAttribute()->проверка на атрибуты
    if(event.target.hasAttribute('data-cart')){
        //console.log('click card btn');

        // поиск карточки с товаром в которой был совершонн клиск 
        const card = event.target.closest('.card')

        // сбор данных с этого товара(карты) и записываем в обект 
        const productInfo = {
            id:card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        console.log(productInfo);
        // собираем данныее в шаблон 
        const cardItemHtml = `
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>

        `
        //отображение товара
        //insertAdjacentHTML('') -> вставка в сам элемент 
        // принимает два параметра (куда, и сам элемет )
        cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml)
        //console.log(cardItemHTML);
    }
})