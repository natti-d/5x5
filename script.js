//Таблица с продукти, която да се прехвърли в база данни
var products = [
    {
        "id": 0,
        "name": "Бразилски ядки",
        "brand": "Smart Organic",
        "info": "Пробвали ли сте бразилски ядки? Те са:\n -Храната с най-високо съдържание на селен\n– Богата на полезни мазнини\n– Богата на антиоксиданти\n– Сурови\n– Органични\n\nБразилските ядки са хранителни източници, които осигуряват здравословни мазнини, антиоксиданти, витамини и минерали. Те са с особено високо съдържание на селен - минерал с мощни антиоксидантни свойства. Консумацията на бразилски орехи може да намали възпаленията, да подпомогне мозъчната функция и да подобри функцията на щитовидната жлеза и здравето на сърцето.\nЗа да не консумирате твърде много селен, ограничете приема до един до три бразилски ореха на ден.\nПрепоръчителна употреба: Добавете бразилските орехи към закуската си или ги консумирайте като лека закуска.\nСъставки: бразилски орехи*.\nОрганична сертифицирана съставка.",
        "image": "./image/brazilnuts.png",
        "price": "13.67",
        "quantity": "150 g"
    },
    {
        "id": 1,
        "name": "Зеленчуков чипс",
        "brand": "Snack Day",
        "info": "BIO Органичен зеленчуков чипс с морска сол от пащърнак, моркови, сладки картофи, цвекло, без палмово масло.\nСъставки:\n62% зеленчуци в различно съотношение (пащърнак*, моркови*, сладки картофи*, цвекло*), 37% слънчогледово олио*, 1% морска сол - *от биологично земеделие",
        "image": "./image/chips.png",
        "price": "7.80",
        "quantity": "120 g"
    },
    {
        "id": 2,
        "name": "Шоколадови топчета",
        "brand": "Turtle",
        "info": "Повишете нивото на закуската си с Turtle Choco Balls - перфектната комбинация от пълноценни зърнени храни и истински органичен шоколад.\n\nЗнаете ли, че нашето какао се добива от горещите и влажни джунгли, където какаовото дърво процъфтява? Зърната от тези шушулки внимателно се изсушават и смилат, за да се получи богатият какаов прах, който прави нашите шоколадови топчета разкошно сутрешно лакомство. Започнете сутрините си правилно с добротата на Turtle Choco Balls!\n\nСъстав: зърнено брашно* 69,1% (ориз*, царевица*, ПШЕНИЦА*), тръстикова захар*, кувертюрен млечен шоколад* 4,7% (тръстикова захар*, МЛЯКО на прах*, какаово масло*, какаова маса*, емулгатор: СОЕВ лецитин*, екстракт от ванилия*), царевичен сироп*, какао с намалено съдържание на мазнини на прах* 2,9%, какао на прах* 1%, емулгатор: Соев лецитин*, сол. *Сертифицирани органични съставки от селското стопанство в ЕС и извън него.",
        "image": "./image/chocolateballs.png",
        "price": "6.94",
        "quantity": "300 g"
    },
    {
        "id": 3,
        "name": "Мини Шоко Бискити",
        "brand": "Gullón",
        "info": "Mini Choco Chips са бисквитки с шоколадов чипс в малък и вкусен формат.\n\nСъставки: Пшенично брашно , тъмен шоколадов чипс (захар, какаова маса, какаово масло, емулгатор (соев лецитин), растително масло (слънчогледово с високо съдържание на олеинова киселина), захар, глюкозен и фруктозен сироп, сол, набухватели (натриев карбонат и амониев хидрогенкарбонат), аромат. Може да съдържа следи от ядки и мляко.",
        "image": "./image/chocolatecookie.png",
        "price": "2.25",
        "quantity": "150 g"
    },
    {
        "id": 4,
        "name": "Годжи Бери",
        "brand": "Dragon Superfoods",
        "info": "Dragon Superfoods Goji Berries съдържа цели сушени плодове, които са богати на аминокиселини, витамини и минерали. Плодовете са оранжево-червени на цвят и имат естествено сладко-кисел вкус. Антиоксидантите каротин и зеаксантин в годжи бери предпазват ретината и подобряват зрението. Сушените плодове имат благоприятен ефект върху бъбреците и регенерират клетките.\n\nНачин на употреба:\nДобавете продукта към смутита или го поръсете върху десерти, мюсли или кисело мляко.\n\nСъстав:\nГоджи бери (100%)*.\n*органичен сертифициран продукт.",
        "image": "./image/goji.jpg",
        "price": "6.99",
        "quantity": "100 g"
    },
    {
        "id": 5,
        "name": "Просо Tопчета",
        "brand": "Biopont",
        "info": "Органичен безглутенов снакс от просо с фъстъци Органичните топчета от просо на Biopont са произведени със съставки от контролирано биологично земеделие. Екструдиран вегетариански продукт, който може да се консумира и от хора с непоносимост към глутен. Здравословен и вкусен - всяка хапка носи наслада!",
        "image": "./image/milletballs.png",
        "price": "2.27",
        "quantity": "60 g"
    },
    {
        "id": 6,
        "name": "Коледен Чай",
        "brand": "Yogi Organic",
        "info": "Съставки: \nКакаови черупки * 33%, хибискус * 16%, канела * 15%, женско биле *, джинджифил *, карамфил *, кардамон *, черен пипер *, звезден анасон *, индийско орехче *, етерично масло от портокал *, анасон *, печена цикория *, индийско орехче *. \n*Органично земеделие",
        "image": "./image/tea.png",
        "price": "4.99",
        "quantity": "60 g"
    },
    {
        "id": 7,
        "name": "Сок от Ябълки и Моркови",
        "brand": "Zdravo",
        "info": "Единичен артикул.\nСок в 1 опаковка.\n Веган продукт.\n.Без добавена вода и захар.\nНе съдържа изкуствени консерванти, оцветители, аромати или подсладители.",
        "image": "./image/juicecarrot.png",
        "price": "11.65",
        "quantity": "750 ml"
    },
    {
        "id": 8,
        "name": "Зърнена Закуска",
        "brand": "Turtle",
        "info": "Зърнените храни Turtle Bran Flakes се състоят от хрупкави люспи, направени от пшенични трици. Всяка купичка Bran Flakes ви помага да започнете деня правилно благодарение на високото съдържание на фибри от пшенични трици. Насладете им се охладени с мляко или кисело мляко и малко пресни плодове за вкусна питателна закуска.",
        "image": "./image/flakes.png",
        "price": "6.74",
        "quantity": "375 g"
    },
    {
        "id": 9,
        "name": "Kokosolie",
        "brand": "Mattison",
        "info": " Чисто кокосово масло.\nС студено пресовано, нерафинирано, органично.\nВсестранна употреба: печене, пържене и в смутита, както и грижа за кожата.",
        "image": "./image/kokosowomaslo.png",
        "price": "37.04",
        "quantity": "500 ml"
    },

    /*Шаблон
    {
        "id": 0,
        "name": "",
        "brand": "",
        "info": "" ,
        "image": "./image/",
        "price": "",
        "quantity": ""
    }
     */
];

//Таблица с марки, която да се прехвърли в база данни
var brands = [
    {
        "id": 0,
        "brand": "Smart Organic",
        "icon": "./image1/brands/smart-organic.png"
    },
    {
        "id": 1,
        "brand": "Snack Day",
        "icon": "./image1/brands/snack-day.png"
    },
    {
        "id": 2,
        "brand": "Turtle",
        "icon": "./image1/brands/turtle.png"
    },
    {
        "id": 3,
        "brand": "Dragon Superfoods",
        "icon": "./image1/brands/dragon-superfoods.png"
    },
    {
        "id": 4,
        "brand": "Biopont",
        "icon": "./image1/brands/bio-point.png"
    },
    {
        "id": 5,
        "brand": "Yogi Organic",
        "icon": "./image1/brands/jogi-organic.png"
    },
    {
        "id": 6,
        "brand": "Zdravo",
        "icon": "./image1/brands/zdravo.png"
    },
    {
        "id": 7,
        "brand": "Mattison",
        "icon": "./image1/brands/mattison.png"
    }
];

var url; //за базата данни
var object_id; //индекс за извеждане на продукти

//Когато се отваря Магазинът с продукти
function changeMagazin() {
    //Scroll-ва се до най-отгоре
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //Бутонът магазин добива "активиран" вид, а другите - "деактивиран"
    activating('magazin');
    deactivating('cart');
    deactivating('about');

    //Показва се магазинът
    var shop_div = document.getElementById('shop-div');
    shop_div.classList.remove('d-none');

    //Скрива се информацията За Нас
    var about_div = document.getElementById('about-div');
    about_div.classList.add('d-none');

    //Зареждат се продукти
    load();
}

//Проверява дали За Нас има нужда от ново зареждане
var isloadedabout = false;

//Когато се отваря За Нас
function changeZanas() {
    //Scroll-ва се до най-отгоре
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //Бутонът За нас добива "активиран" вид, а другите - "деактивиран"
    activating('about');
    deactivating('magazin');
    deactivating('cart');

    //Показва се За Нас
    var shop_div = document.getElementById('shop-div');
    shop_div.classList.add('d-none');

    //Скрива се магазинът
    var about_div = document.getElementById('about-div');
    about_div.classList.remove('d-none');

    //В случай, че не е зареждана страницата, тя се зарежда
    if (!isloadedabout) {
        loadAbout();
    }
}

//Активиране на бутон
function activating(btn) {
    //Променя се изгледа в горното меню
    let a = document.getElementById(btn);
    a.style.color = '#1E4847';
    a.style.border = 'solid 2px #1E4847';
    a.style.backgroundColor = '#72CB7D';

    //И се променя изгледа в страничното меню
    btn += 'Nav';
    let b = document.getElementById(btn)
    b.style.color = '#72CB7D';
    b.style.border = 'solid 2px #72CB7D';
    b.style.backgroundColor = '#1E4847';
}

//Деактивиране на бутон
function deactivating(btn) {
    //Променя се изгледа в горното меню
    let a = document.getElementById(btn);
    a.style.color = '#1E4847';
    a.style.border = 'none';
    a.style.backgroundColor = '#72CB7D';

    //И се променя изгледа в страничното меню
    btn += 'Nav';
    let b = document.getElementById(btn);
    b.style.color = '#1E4847';
    b.style.border = 'none';
    b.style.backgroundColor = '#72CB7D';

}

//Взима се броят на продуктите
let lenght = products.length;
//И се запазва филтър за марките
var brand = null;

//Зареждат се продуктите в магазина
function load() {
    //Взима се контейнера с продуктите и в случай, че не е празен, се изпразва
    let obj_conatiner = document.getElementById('objects-div');
    obj_conatiner.innerHTML = "";

    //Започват да се обхождат продуктите в базата
    for (let i = 0; i < lenght; i++) {
        //Изпълнява се в случай, че нямаме марка (т.е. brand == null) или
        // продуктът, който разглеждаме, е с марката, поставена за филтър (т.е. brand == products[i].brand)
        if (brand == null || brand == products[i].brand) {
            //Генерира се главния контейнер на ЕДИН продукт
            let object_div1 = document.createElement("div");
            //Той заема 3/12 от широчината на контейнера на ВСИЧКИ продукти, когато екранът е достатъчно голям
            //и заема 12/12 от широчината на контейнера на ВСИЧКИ продукти, когато екранът е <= medium
            //=> Правим го responsive
            object_div1.classList.add("col-md-3", "col-12");
            //Контейнерът на ЕДИН продукт е вложен в контейнера на ВСИЧКИ продукти
            obj_conatiner.appendChild(object_div1);

            //Генерира се контейнер с функция "карта", което оформя лика и функционалността
            let object_div2 = document.createElement("div");
            object_div2.classList.add("card");
            //Когато мишката премине над този контейнер, той изпъква
            object_div2.onmouseover = function () {
                object_div2.style.boxShadow = "0 .5rem 1rem #1E4847";
                object_div2.style.borderStyle = "hidden";
                object_div2.style.transitionDuration = "0.75s";
            }
            //Когато мишката напусне контейнера, той се връща в стандартния си лик
            object_div2.onmouseleave = function () {
                object_div2.style.boxShadow = "none";
                object_div2.borderStyle = "solid";
                object_div2.transitionDuration = "0.75s";
            }
            //Тази "карта" е внедрена в контейера за ЕДИН продукт
            object_div1.appendChild(object_div2);

            //Проверява дала случайно не принтираме ПОСЛЕДНИЯ продукт
            //ако да, променяме изгледа, за да е приятен за окото (в случай, че целият ред е запълбеб)
            if (i == lenght - 1) {
                object_div1.classList.add("pb-md-0", "pb-5")
                object_div2.classList.add("mb-md-0", "mb-3");
            }

            //Генерираме елемент за снимката на продукта
            let object_image = document.createElement("img");
            //Правим го responsive
            object_image.classList.add("card-img-top", "img-fluid");
            //Взимаме снимката от базата данни
            object_image.src = products[i].image;
            //Определяме височината
            object_image.style.height = '250px';
            //Внедряваме снимката в "картата"
            object_div2.appendChild(object_image);

            //Генерираме информационен контейнер, който ще съдържа останалата информация за ЕДИН продукт
            let object_div3 = document.createElement("div");
            object_div3.classList.add("card-body");
            object_div3.style.backgroundColor = "#72CB7D";
            //Внедряваме информационния контейнер в "картата"
            object_div2.appendChild(object_div3);

            //Генерираме контейнер за името на ЕДИН продукт
            let object_div4 = document.createElement("div");
            //Правим го responsive
            object_div4.classList.add("card-title", "d-flex", "justify-content-between", "align-middle", "m-0");
            ////Внедряваме контейнерът в информационния контейнер
            object_div3.appendChild(object_div4);

            //Генерираме текстово поле за името на ЕДИН продукт
            let product = document.createElement("h4");
            //Правим го responsive
            product.classList.add("text-center", "break-word", "m-0", "align-middle", "col-9");
            product.style.color = "#1E4847";
            //Изчистваме информацията от текстовото поле, в случай, че е заето
            product.innerText = "";

            //Генерираме текстово поле за цената на ЕДИН продукт
            let price = document.createElement("h5");
            //Правим го responsive
            price.classList.add("text-center", "break-word", "m-0", "align-middle", "col-3");
            price.style.color = "#1E4847";
            //Изчистваме информацията от текстовото поле, в случай, че е заето
            price.innerText = "";

            //Внедряваме текстовите полета в информационния контейнер
            object_div4.appendChild(product);
            object_div4.appendChild(price);

            //Слагаме стойности на текстовите полета, които извличаме от базата данни
            product.innerText = products[i].name;
            price.innerText = products[i].price.concat(" лв.");

            //"Слушаме" за кликане върху продукта, за да заредим допълнително информация за продукта
            object_div1.addEventListener("click", function () {
                //Взимаме индексирането на продукта, за да знаем за кой продукт извличаме информация
                object_id = i;
                //Отваряме нов прозорец с информацията
                openOffCanva();
            });
        }
    }//Край на преглеждането на продукти

    //Изчистваме филтрите, за да не се дублират
    brand = null;
}

//Извличане на допълнително информация
function openOffCanva() {
    //Взимаме нужните ни елементи, които ще запълним с информация
    let info_object = document.getElementById("info-object");
    let name_of_offcanva = document.getElementById("name-of-offcanva");
    let image_of_offcanva = document.getElementById("image-of-offcanva");
    let price_btn = document.getElementById("price-btn");
    let quantity_btn = document.getElementById("quantity-btn");
    //Поставяме нова височина на снимката
    image_of_offcanva.style.height = '500px';
    let purchase = document.getElementById("purchase_btn");

    //Извличаме информацията и я внедряваме, като използваме Object_id-то за "флаг" на продукта, който ни трябва
    name_of_offcanva.innerText = (products[object_id].name).concat(" " + products[object_id].brand);
    info_object.innerText = products[object_id].info;
    image_of_offcanva.src = products[object_id].image;
    price_btn.innerText = products[object_id].price.concat(" лв.");
    quantity_btn.innerText = products[object_id].quantity;
    //Прилагаме показателни/помощни атрибути
    purchase.setAttribute("item-name", products[object_id].name);
    purchase.setAttribute("data-price", products[object_id].price);
    purchase.classList.add("addToCart");
}


//Зареждаме За Нас
function loadAbout() {
    //Флаг за вече заредена страница
    isloadedabout = true;

    //Взима се контейнера с продуктите и в случай, че не е празен, се изпразва
    let category_cont = document.getElementById('category-cont');
    category_cont.innerHTML = "";

    //Започват да се обхождат марките в базата
    for (let i = 0; i < brands.length; i++) {

        //Генерира се елемент за ЕДНА МАРКА
        let category_box = document.createElement('a');
        category_box.classList.add('category-box', "align-items-middle", "text-center");
        //Внедрява се в контейнера за ВСИЧКИ марки
        category_cont.appendChild(category_box);

        //Генерира се снимково поле за марката и се слага снимка от базата данни
        let img = document.createElement('img');
        img.src = brands[i].icon;

        //Генерира се текстово поле за марката и се изписва името от базата данни
        let span = document.createElement('span');
        span.innerHTML = brands[i].brand;

        //Двата елемента се внедряват в контейнера за ЕДНА МАРКА
        category_box.appendChild(img);
        category_box.appendChild(span);

        //"Слуша" се за избиране на макра
        category_box.addEventListener("click", function () {
            //Поставя се филтър/"флаг" за марката
            brand = brands[i].brand;
            //Отваря се магазина и се сменят бутоните
            changeMagazin();
        });
    }//Край на преглеждането на марките
}

//Ако филтърът идва от footer-а (т.е. от HTML front-end-а)
function footerBrand(bran) {
    //Поставя се филтър/"флаг" за марката
    brand = bran;
    //Отваря се магазина и се сменят бутоните
    changeMagazin();
}

function updateCart() {
    const cartList = document.getElementById('total');
    const totalSpan = document.getElementById('cart');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - ${item.price.toFixed(2)} лв`;
        cartList.appendChild(listItem);

        total += item.price;
        console.log(2);
    });

    totalSpan.textContent = total.toFixed(2);
    //cartList.textContent = total.toFixed(2);
}
