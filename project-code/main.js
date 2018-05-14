// create img element variables (will turn into array later)

var item1Img = document.getElementById('item1Img')
var item2Img = document.getElementById('item2Img')
var item3Img = document.getElementById('item3Img')
var item4Img = document.getElementById('item4Img')
var item5Img = document.getElementById('item5Img')
var item6Img = document.getElementById('item6Img')

// create item button variables
var item1but = document.getElementById('item1but')
var item2but = document.getElementById('item2but')
var item3but = document.getElementById('item3but')
var item4but = document.getElementById('item4but')
var item5but = document.getElementById('item5but')
var item6but = document.getElementById('item6but')

// set up catagory variables 
var lacroixCat = document.getElementById('lacroix')
var vegtableCat = document.getElementById('vegtables')
var fruitCat = document.getElementById('fruit')
//create event listeners for categories 
lacroixCat.addEventListener('click',changeCat1);
vegtableCat.addEventListener('click',changeCat2);
fruitCat.addEventListener('click', changeCat3);

// create functions to change all element imgs to corresponding category
function changeCat1 (){
    item1Img.src = 'assets/grapefruitLAC.jpeg'
    item2Img.src = 'assets/coconutLAC.jpeg'
    item3Img.src = 'assets/kiwiLAC.jpeg'
    item4Img.src = 'assets/mangoLAC.jpeg'
    item5Img.src = 'assets/passionLAC.jpeg'
    item6Img.src = 'assets/tangerineLAC.jpeg'
    item1but.innerText = 'Grapefruit La Croix'
    item2but.innerText = 'Coconut La Croix'
    item3but.innerText = 'Kiwi Sandia La Croix'
    item4but.innerText = 'Mango La Croix'
    item5but.innerText = 'Passion La Croix'
    item6but.innerHTML = 'Tangerine La Croix'
}

function changeCat2 (){
    item1Img.src = 'assets/bellpepper.jpeg'
    item2Img.src = 'assets/lettuce.jpeg'
    item3Img.src = 'assets/onion.jpeg'
    item4Img.src = 'assets/spinach.jpeg'
    item5Img.src = 'assets/tomato.jpeg'
    item6Img.src = 'assets/broccoli.jpeg'
    item1but.innerText = 'Bellpepper'
    item2but.innerText = 'Lettuce'
    item3but.innerText = 'Onion'
    item4but.innerText = 'Spinach'
    item5but.innerText = 'Tomato'
    item6but.innerHTML = 'Broccoli'
}

function changeCat3 (){
    item1Img.src = 'assets/cuties.jpeg'
    item2Img.src = 'assets/grapes.jpeg'
    item3Img.src = 'assets/strawberry.jpeg'
    item4Img.src = 'assets/banana.jpeg'
    item5Img.src = 'assets/rasberry.jpeg'
    item6Img.src = 'assets/blackberry.jpeg'
    item1but.innerText = 'Cuties'
    item2but.innerText = 'Grapes'
    item3but.innerText = 'Strawberries'
    item4but.innerText = 'Bananas'
    item5but.innerText = 'Rasberries'
    item6but.innerText = 'Blackberries'
}

// create variable to hold empty array of cart items
var shoppingCart = [];

item1but.addEventListener('click',addToCart);
item2but.addEventListener('click',addToCart);
item3but.addEventListener('click',addToCart);
item4but.addEventListener('click',addToCart);
item5but.addEventListener('click',addToCart);
item6but.addEventListener('click',addToCart);

function addToCart (){
    var newItem = document.createElement('li');
    newItem.textContent = this.innerText;
    document.getElementById('cart').appendChild(newItem);
    }

