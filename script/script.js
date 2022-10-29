const iconMenuMobile = document.querySelector('.icon-menu-mobile'); 
const menuMobile = document.querySelector('.menu-mobile');
const accountDownArrow = document.querySelector('.account-dropdown-arrow');
const menuDesktop = document.querySelector('.menu-desktop');
const iconShoppingCart = document.querySelector('.notification-shoppin-cart');
const shoppingCart = document.querySelector('.shopping-cart');

const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');



function toggleMenuMobile(){
  
  menuMobile.classList.toggle('inactive');
  
  if(!shoppingCart.classList.contains('inactive')) {

    shoppingCart.classList.add('inactive');
  }
}

function toggleMenuDesktop(){

  menuDesktop.classList.toggle('inactive');
  
  if(!shoppingCart.classList.contains('inactive')) {

    shoppingCart.classList.add('inactive');
  }
}

function toggleShoppingCart(){

  shoppingCart.classList.toggle('inactive');

  if(!menuMobile.classList.contains('inactive')) {

    menuMobile.classList.add('inactive');
  }
  else if(!menuDesktop.classList.contains('inactive')) {

    menuDesktop.classList.add('inactive');
  }
}



iconMenuMobile.addEventListener('click', toggleMenuMobile);
accountDownArrow.addEventListener('click', toggleMenuDesktop);
iconShoppingCart.addEventListener('click', toggleShoppingCart);

/*Array para llenado de elementos*/ 

const productList = [];

productList.push({
  
  name: 'Bicicleta',
  price: 100,
  image: '../assets/product/bike.jpg',
  info:  'Esta es una informaciòn arbitraria',
});
productList.push({
  
  name: 'Bicletita',
  price: 200,
  image: '../assets/product/bike.jpg',
  info:  'Esta es una informaciòn arbitraria',
});
productList.push({
  
  name: 'Bicicletota',
  price: 300,
  image: '../assets/product/bike.jpg',
  info:  'Esta es una informaciòn arbitraria',
});


for (let product in productList) {

  const divProductCard = document.createElement('div');
  divProductCard.classList.add('product-card');

  const imgProductCard = document.createElement('img');
  imgProductCard.setAttribute('src', productList[product].image);
  imgProductCard.classList.add('image-product');

  imgProductCard.addEventListener('click', console.log(productList.indexOf(productList[product])) );



  const divProductInfo = document.createElement('div');
  divProductInfo.classList.add('product-info');

  const divNamePriceProduct = document.createElement('div');

  const productName = document.createElement('p');
  productName.innerText = productList[product].name;

  const productPrice = document.createElement('p');
  productPrice.innerText = '$'+ productList[product].price;

  const figureIconAdd = document.createElement('figure');
  const iconAddCar = document.createElement('img');
  iconAddCar.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
  cardsContainer.appendChild(divProductCard);
  divProductCard.appendChild(imgProductCard); 
  divProductCard.appendChild(divProductInfo);
  divProductInfo.appendChild(divNamePriceProduct);
  divNamePriceProduct.appendChild(productName);
  divNamePriceProduct.appendChild(productPrice);
  divProductInfo.appendChild(figureIconAdd);
  figureIconAdd.appendChild(iconAddCar);
 
}

function
unoALaVez(quiensoy){


  console.log(quiensoy);
} 