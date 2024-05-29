const productsContainer = document.querySelector('#products-container');
// асинхроная функция 
getProducts()
// Асинхроная функция полученния данных
async function getProducts(){
    // получения файлов из файла fetch
    // await ждем получения данных 
    // response записываем в консмтанту данные
    const response = await fetch('./js/products.json');
    //console.log(response);
    // парсим данные и конвертируем их в js в масив с обектами
    const productsArray = await response.json()
    //console.log(productsArray);

    // запуск функции отображения файлов
    renderProducts(productsArray)
}

function renderProducts(productsArray){
    productsArray.forEach(function(item) {
        const producHtml = `<div class="col-md-6">
        <div class="card mb-4" data-id="${item.id}">
            <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${item.title}</h4>
                <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт </small></p>

                <div class="details-wrapper w-50">
                    <!-- счетчик -->
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <!-- счетчик -->
                    <div class="price">
                        <div class="price__weight">${item.weight}</div>
                        <div class="price__currency">${item.price}</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning px-5">+ в
                    корзину
                </button>

            </div>
            </div>
        </div>`

        productsContainer.insertAdjacentHTML('beforeend', producHtml)
    });
}