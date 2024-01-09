var products = [
    {
        "id": 0,
        "name": "Brazil Nuts",
        "brand": "Smart Organic",
        "info": "Have you tried brazil nuts? They are:\n -The food with the highest selenium content\n– Rich in healthy fats\n– Rich in antioxidants\n– Raw\n– Organic\n\nBrazil nuts are nutritional powerhouses, providing healthy fats, antioxidants, vitamins, and minerals. They’re particularly high in selenium, a mineral with potent antioxidant properties. Eating Brazil nuts may reduce inflammation, support brain function, and improve your thyroid function and heart health.\nTo avoid consuming too much selenium, limit your intake to one to three Brazil nuts per day.\nRecommended use: Add Brazil nuts to your breakfast or consume as a snack.\nIngredients: Brazil nuts*.\n*Organic certified ingredient.",
        "image": "./image/brazilnuts.png",
        "price": "13.67",
        "quantity": "150 g"
    },
    {
        "id": 1,
        "name": "Vegetable Chips",
        "brand": "Snack Day",
        "info": "BIO Organic vegetable chips with sea salt, made from parsnip, carrot, sweet potatoes, beetroot, palm oil free.\nIngredients:\n62% vegetables in variable proportions (parsnip*, carrot*, sweet potatoes*, beetroot*), 37% sunflower oil*, 1% sea salt - *from organic farming",
        "image": "./image/chips.png",
        "price": "7.80",
        "quantity": "120 g"
    },
    {
        "id": 2,
        "name": "Chocolate Balls",
        "brand": "Turtle",
        "info": "Elevate your breakfast experience with Turtle Choco Balls, the perfect blend of wholesome cereals and real, organic chocolate.\n\nDid you know that our cocoa is sourced from the hot and humid jungles, where the cocoa tree flourishes? The beans from these pods are carefully dried and ground to create the rich cocoa powder that makes our Choco Balls an indulgent morning treat. Start your mornings right with the goodness of Turtle Choco Balls!\n\nIngredients: cereal flour* 69,1% (rice*, corn*, WHEAT*), cane sugar*, couverture MILK chocolate* 4,7% (cane sugar*, MILK powder*, cocoa butter*, cocoa mass*, emulsifier: SOY lecithin*, vanilla extract*), corn syrup*, fat reduced cocoa powder* 2.9%, cocoa powder* 1%, emulsifier: SOY lecithin*, salt. *Certified organic ingredients from EU\non-EU agriculture.",
        "image": "./image/chocolateballs.png",
        "price": "6.94",
        "quantity": "300 g"
    },
    {
        "id": 3,
        "name": "Mini Choco Chips",
        "brand": "Gullón",
        "info": "Mini Choco Chips are cookies with chocolate chips in a small and delicious format.\n\nIngredients: Wheat flour , dark chocolate chips (sugar, cocoa mass, cocoa butter, emulsifier ( soy lecithin ), vegetable oil (high oleic sunflower), sugar, glucose and fructose syrup, salt, raising agents (acid carbonate sodium and ammonium hydrogen carbonate), aroma. May contain traces of Nuts and Milk.",
        "image": "./image/chocolatecookie.png",
        "price": "2.25",
        "quantity": "150 g"
    },
    {
        "id": 4,
        "name": "Goji Berries",
        "brand": "Dragon Superfoods",
        "info": "Dragon Superfoods Goji Berries contain whole dried fruits that are rich in amino acids, vitamins and minerals. The fruits are orange-red in color and have a naturally sweet-sour taste. The antioxidants carotene and zeaxanthin in goji berries protect the retina and improve vision. Dried fruits have a beneficial effect on the kidneys and regenerate cells.\n\nMethod of use:\nAdd the product to smoothies or sprinkle it on desserts, muesli or yogurt.\n\nComposition:\nGoji berry (100%)*.\n*organic certified product.",
        "image": "./image/goji.jpg",
        "price": "6.99",
        "quantity": "100 g"
    },
    {
        "id": 5,
        "name": "Millet balls",
        "brand": "Biopont",
        "info": "Organic gluten-free millet snack with peanuts Organic millet balls by Biopont is produced with ingredients from controlled organic farming. An extruded vegan product that can also be consumed by people with gluten intolerance. Healthy and tasty - every bite brings delight!",
        "image": "./image/milletballs.png",
        "price": "2.27",
        "quantity": "60 g"
    },
    {
        "id": 6,
        "name": "Christmas Tea",
        "brand": "Yogi Organic",
        "info": "cocoa shells * 33%, hibiscus * 16%, cinnamon * 15%, licorice *, ginger *, cloves *, cardamom *, black pepper *, star anise *, nutmeg *, orange essential oil *, anise *, roasted chicory *, nutmeg *, *organic farming",
        "image": "./image/tea.png",
        "price": "4.99",
        "quantity": "60 g"
    },
    {
        "id": 7,
        "name": "Carrot and apple juice",
        "brand": "Zdravo",
        "info": "Single Item \nJuice in 1 packaging \nVegan product \nNo added water and sugar \nNo artificial preservatives, colors, flavors, or sweeteners",
        "image": "./image/juicecarrot.png",
        "price": "11.65",
        "quantity": "750 ml"
    },
    {
        "id": 8,
        "name": "Flakes",
        "brand": "Turtle",
        "info": "Turtle Bran Flakes cereal consists of crunchy flakes made from wheat bran. Each bowl of Bran Flakes helps you start the day right with its high wheat bran fiber content*. Enjoy them chilled with milk or yogurt and some fresh fruit for a delicious nutritious breakfast.",
        "image": "./image/flakes.png",
        "price": "6.74",
        "quantity": "375 g"
    },
    {
        "id": 9,
        "name": "Kokosolie",
        "brand": "Mattison",
        "info": " Pure coconut oil \nCold-pressed, unrefined, organic |Versatile in use: baking, roasting, frying and in smoothies \nAlso for skin care",
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

var bg_lang = true;
var happened = 1;
var url;
var object_id;

function changeMagazin() {
    activating('magazin');
    deactivating('cart');
    deactivating('about');
}

function changeCart() {
    activating('cart');
    deactivating('magazin');
    deactivating('about');
}
function changeZanas() {
    activating('about');
    deactivating('magazin');
    deactivating('cart');
}

function changeInfo() {
    happened = happened * (-1);
    if (happened == -1) {
        let a = document.getElementById('moreInfo');
        a.style.color = "#99D19C";
        a.style.borderBlockColor = "#99D19C";
        a.classList.remove("btn-success");
        a.classList.add("btn-outline-success");
    }
    else {
        let a = document.getElementById('moreInfo');
        a.style.color = '#FFFFFF';
        a.style.borderBlockColor = null;
        a.classList.add("btn-success");
        a.classList.remove("btn-outline-success");
    }
}

function activating(btn) {
    let a = document.getElementById(btn)
    a.style.color = "#72CB7D";
    a.style.borderBlockColor = "#1E4847";
    a.classList.remove("btn-success");
    a.classList.add("btn-outline-success");

    btn += 'Nav';

    let b = document.getElementById(btn)
    b.style.color = "#565656";
    b.style.borderBlockColor = "#565656";
    b.classList.remove("btn-success");
    b.classList.add("btn-outline-success");

    let h1 = document.getElementById('page-name');
    h1.innerText = String(a.innerText);

}

function deactivating(btn) {
    let a = document.getElementById(btn);
    a.style.color = '#FFFFFF';
    a.style.borderBlockColor = null;
    a.classList.add("btn-success");
    a.classList.remove("btn-outline-success");

    btn += 'Nav';
    let b = document.getElementById(btn);
    b.style.removeProperty("color");
    b.style.removeProperty("border-color");
    b.style.borderBlockColor = null;
    b.classList.add("btn-success");
    b.classList.remove("btn-outline-success");

}

let lenght = products.length;
function Load() {
    let obj_conatiner = document.getElementById('objects-div');

    for (let i = 0; i < lenght; i++) {
        let object_div1 = document.createElement("div");
        object_div1.classList.add("col-md-3", "col-12");
        obj_conatiner.appendChild(object_div1);

        let object_div2 = document.createElement("div");
        object_div2.classList.add("card");
        object_div2.onmouseover = function () {
            object_div2.style.boxShadow = "0 .5rem 1rem #1E4847";
            object_div2.style.borderStyle = "hidden";
            object_div2.style.transitionDuration = "0.75s";
        }
        object_div2.onmouseleave = function () {
            object_div2.style.boxShadow = "none";
            object_div2.borderStyle = "solid";
            object_div2.transitionDuration = "0.75s";
        }
        object_div1.appendChild(object_div2);

        if (i == lenght - 1) {
            object_div1.classList.add("pb-md-0", "pb-5")
            object_div2.classList.add("mb-md-0", "mb-3");
        }

        let object_image = document.createElement("img");
        object_image.classList.add("card-img-top", "img-fluid");
        object_image.src = products[i].image;
        object_image.style.height = '250px';
        object_div2.appendChild(object_image);

        let object_div3 = document.createElement("div");
        object_div3.classList.add("card-body");
        object_div3.style.backgroundColor = "#72CB7D";
        object_div2.appendChild(object_div3);

        let object_div4 = document.createElement("div");
        object_div4.classList.add("card-title", "d-flex", "justify-content-between", "align-items-middle", "m-0");
        object_div3.appendChild(object_div4);

        let product = document.createElement("h4");
        product.classList.add("text-center", "break-word", "m-0");
        product.style.color = "#1E4847";
        product.innerText = "";

        let price = document.createElement("h4");
        price.classList.add("text-center", "break-word", "m-0");
        price.style.color = "#1E4847";
        price.innerText = "";
        object_div4.appendChild(product);
        object_div4.appendChild(price);

        product.innerText = products[i].name;
        price.innerText = products[i].price.concat(" лв.");

        object_div1.addEventListener("click", function () {
            object_id = i;
            openOffCanva();
        });
    }
}
var photoIndex;
function openOffCanva() {
    photoIndex = 0;
    let info_object = document.getElementById("info-object");
    let name_of_offcanva = document.getElementById("name-of-offcanva");
    let image_of_offcanva = document.getElementById("image-of-offcanva");
    let price_btn = document.getElementById("price-btn");
    let quantity_btn = document.getElementById("quantity-btn");
    image_of_offcanva.style.height = '500px';

    name_of_offcanva.innerText = (products[object_id].name).concat(" " + products[object_id].brand);
    info_object.innerText = products[object_id].info;
    image_of_offcanva.src = products[object_id].image;
    price_btn.innerText = products[object_id].price.concat(" лв.");
    quantity_btn.innerText = products[object_id].quantity;

}