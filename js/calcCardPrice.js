function calcCardPriceAndDelivery(){
    
    // const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item');
    //console.log(cartItems);
    const deliveryCost = document.querySelector('.delivery-cost')
    //
    const totalPriceElement = document.querySelector('.total-price')

    const cardDeliveryElement = document.querySelector('[data-cart-delivery]')

    const freeDeliveryElement = document.querySelector('.small')

    let totalPrice = 0;

    cartItems.forEach(function(item){
        console.log(item);

        const amountElement = item.querySelector('[data-counter]')
        const priceElement = item.querySelector('.price__currency')

        //innerText возвращает строчку а нам нужно число используем parseInt
        const currenPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText)
        totalPrice += currenPrice
        //console.log(currenPrice);
    })
    //console.log(totalPrice);

    // отображаем цену на стиранице
    totalPriceElement.innerText = totalPrice

    // скрыть показать стоимость доставки
    if(totalPrice > 0){
        cardDeliveryElement.classList.remove('none')
    }else{
        cardDeliveryElement.classList.add('none')
    }

    // стоимость доставки
    if(totalPrice >= 600){
        // free delivery
        freeDeliveryElement.classList.add('none')

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    }else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 рублей'
    }
}