// Код получает ссылки на элементы формы и кнопки с помощью:

const productTypeSelectElement = document.getElementById('type-select');

const productNameSelectElement = document.getElementById('product-name');

const productCountSelectElement = document.getElementById('product-count');

const addProductButton = document.getElementsByClassName('add-product')[0];

const clearProductListButton = document.getElementsByClassName('clear-list')[0];


// объявляем переменную productList в которую положим массив из списка наших продуктов 
let productList = [];


// При нажатии на кнопку "добавить" (addProductButton), срабатывает функция addProduct:
addProductButton.addEventListener("click", addProductToList);

// Добавление обработчика на кнопку "очистить", срабатывает функция clearProductList:
clearProductListButton.addEventListener("click", clearProductList);


// Функция addProduct:
// Внутри этой функции сначала собираются данные из полей формы (тип продукта, его название и количество):

function addProductToList() {
    const productTypeValue = productTypeSelectElement.value;
    const productNameValue = productNameSelectElement.value;
    const productCountValue = productCountSelectElement.value;

    // Затем формируется HTML-код одного продукта в виде строки:
    const productItem = `
    <div class="product-item">
        Тип продукта ${productTypeValue} Название:${productNameValue} Количество:${productCountValue}
    </div>`

    //Этот продукт добавляется в массив productList, который хранит все добавленные товары:
    productList.push(productItem);

    // Обновление содержимого productList на странице
    updateProductList();
}

// Функция для очистки списка продуктов
function clearProductList() {
    productList = []; // Очищаем массив продуктов
    updateProductList(); // Обновляем отображение
}

// Функция для обновления списка продуктов на странице
function updateProductList() {
    let products = "";  // Переменная для накопления HTML-кода продуктов
    productList.forEach((e) => { // Проходим по каждому элементу массива productList
        products += e; // Добавляем HTML-код каждого продукта к переменной products
    });

    
       document.querySelector(".products-list").innerHTML = products;  
}


// Фукнция подтверждение перед очисткой списка, чтобы избежать случайного удаления всех товаров.
function clearProductList() {
    if (confirm("Вы уверены, что хотите удалить все товары?")) {
        productList = [];
        updateProductList();
    }
}

// console.dir(productTypeSelectElement)
// console.dir(productNameSelectElement)
// console.dir(productCountSelectElement)
// console.dir(addProductButton)
// console.dir(clearProductListButton)
