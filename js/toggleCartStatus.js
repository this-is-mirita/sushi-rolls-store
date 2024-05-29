function toggleCartStatus(){
    console.log('toggleCartStatus');

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cardEmptyBadge = document.querySelector('[data-cart-empty]');
    //получение формы
    const orderForm = document.querySelector('#order-form');
    //console.log(cartWrapper.children.length);
    if(cartWrapper.children.length > 0 ){
        //полная корзина
        console.log('full');

        cardEmptyBadge.classList.add('none')
        
        orderForm.classList.remove('none')
    }else {
        //пустая корзина
        console.log('empty');
        
        cardEmptyBadge.classList.remove('none')

        orderForm.classList.add('none')
    }
}