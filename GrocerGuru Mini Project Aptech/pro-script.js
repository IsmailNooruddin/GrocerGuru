let menu = document.querySelector(".menu")
let toggle = document.querySelector(".toggle")
let cross = document.querySelector(".cros")
let basket = document.querySelectorAll('.basket')
let basketCart = document.querySelectorAll(".cart-div");
let basketCloseBtn = document.querySelectorAll(".cart-div .bottom .closeBtn");


basket.forEach(basket => {
    basket.addEventListener('click', () => {
        basketCart.forEach(item => {
            item.classList.add("active-cart-div");
        })
    })
})

basketCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        basketCart.forEach(item => {
            item.classList.remove("active-cart-div");
        })
    })
})

cross.addEventListener('click', function () {
    menu.style.transform = 'translateY(-100%)'
})
toggle.addEventListener('click', function () {
    menu.style.transform = 'translateY(0%)'
})




let meatContainer = document.querySelectorAll('.meat');
let cosmeticContainer = document.querySelectorAll('.cosmetic');

let dairyProducts = [
  {
    id: 0,
    name: "Butter Milk",
    desc: "Fresh (NEWLY ARRIVED)",
    price: "$100",
    img: "./assests/ProductImages/DairyProducts/pr1.png",
  },
  {
    id: 1,
    name: "Butter",
    desc: "Best Quality",
    price: "$50",
    img: "./assests/ProductImages/DairyProducts/pr2.png",
  },
  {
    id: 2,
    name: "Cheese",
    desc: "Best Quality",
    price: "$200",
    img: "./assests/ProductImages/DairyProducts/pr3.png",
  },
  {
    id: 3,
    name: "Condensed Milk",
    desc: "High Quality (Sweet)",
    price: "$250",
    img: "./assests/ProductImages/DairyProducts/pr4.png",
  },
  {
    id: 4,
    name: "Cottage Cheese",
    desc: "Best Quality",
    price: "$250",
    img: "./assests/ProductImages/DairyProducts/pr5.png",
  },
  {
    id: 5,
    name: "Fresh Cream",
    desc: "High Quality",
    price: "$80",
    img: "./assests/ProductImages/DairyProducts/pr6.png",
  },
  {
    id: 6,
    name: "Evaporated Milk",
    desc: "Cow Milk (Evaporated)",
    price: "$100",
    img: "./assests/ProductImages/DairyProducts/pr7.png",
  },
  {
    id: 7,
    name: "Ghee",
    desc: "Fresh (Newly Arrived)",
    price: "$200",
    img: "./assests/ProductImages/DairyProducts/pr8.png",
  },
  {
    id: 8,
    name: "Sour Cream",
    desc: "High Quality",
    price: "$70",
    img: "./assests/ProductImages/DairyProducts/pr9.png",
  },
  {
    id: 9,
    name: "Whey Protein",
    desc: "Pure Ingredients",
    price: "$500",
    img: "./assests/ProductImages/DairyProducts/pr10.png",
  },
];
let meatProducts = [
  {
    id: 0,
    name: "Buffalo Meat",
    desc: "High Quality",
    price: "$400",
    img: "./assests/ProductImages/Meat/pr1.png",
  },
  {
    id: 1,
    name: "Chicken",
    desc: "(HALAL)",
    price: "$200",
    img: "./assests/ProductImages/Meat/pr2.png",
  },
  {
    id: 2,
    name: "Cow Meat",
    desc: "Fresh Meat (HALAL)",
    price: "$350",
    img: "./assests/ProductImages/Meat/pr3.png",
  },
  {
    id: 3,
    name: "Crab Meat",
    desc: "Fresh",
    price: "$150",
    img: "./assests/ProductImages/Meat/pr4.png",
  },
  {
    id: 4,
    name: "Deer Meat",
    desc: "Fresh Meat (HALAL)",
    price: "$250",
    img: "./assests/ProductImages/Meat/pr5.png",
  },
  {
    id: 5,
    name: "Duck Meat",
    desc: "High Quality",
    price: "$200",
    img: "./assests/ProductImages/Meat/pr6.png",
  },
  {
    id: 6,
    name: "Fish",
    desc: "High Quality (HALAL)",
    price: "$300",
    img: "./assests/ProductImages/Meat/pr7.png",
  },
  {
    id: 7,
    name: "Goat Meat",
    desc: "Fresh Meat (HALAL)",
    price: "$100",
    img: "./assests/ProductImages/Meat/pr8.png",
  },
  {
    id: 8,
    name: "Lamb Meat",
    desc: "High Quality",
    price: "$400",
    img: "./assests/ProductImages/Meat/pr9.png",
  },
  {
    id: 9,
    name: "Rabbit Meat",
    desc: "Fresh Meat",
    price: '$100',
    img: "./assests/ProductImages/Meat/pr10.png",
  },
];
let cosmeticProducts = [
  {
    id: 0,
    name: "Brushes",
    desc: "High Quality",
    price: "$20",
    img: "./assests/ProductImages/Cosmetics/pr1.png",
  },
  {
    id: 1,
    name: "Eyeliner",
    desc: "Perfect Curves",
    price: "$80",
    img: "./assests/ProductImages/Cosmetics/pr2.png",
  },
  {
    id: 2,
    name: "Face Powder",
    desc: "Skin Color",
    price: "$20",
    img: "./assests/ProductImages/Cosmetics/pr3.png",
  },
  {
    id: 3,
    name: "Foundation",
    desc: "High Quality",
    price: "$100",
    img: "./assests/ProductImages/Cosmetics/pr4.png",
  },
  {
    id: 4,
    name: "LipGloss",
    desc: "Glossy Shade",
    price: "$50",
    img: "./assests/ProductImages/Cosmetics/pr5.png",
  },
  {
    id: 5,
    name: "Lipstick",
    desc: "Red Lipstick",
    price: "$50",
    img: "./assests/ProductImages/Cosmetics/pr6.png",
  },
  {
    id: 6,
    name: "Alovera Lotion",
    desc: "Pure Ingredients",
    price: "$150",
    img: "./assests/ProductImages/Cosmetics/pr7.png",
  },
  {
    id: 7,
    name: "Makeup Mirror",
    desc: "Best Quality",
    price: "$250",
    img: "./assests/ProductImages/Cosmetics/pr8.png",
  },
  {
    id: 8,
    name: "Mascara",
    desc: "High Quality",
    price: "$100",
    img: "./assests/ProductImages/Cosmetics/pr9.png",
  },
  {
    id: 9,
    name: "Nail Polish",
    desc: "Glossy Shades",
    price: "$50",
    img: "./assests/ProductImages/Cosmetics/pr10.png",
  },
];



let dairyContainer = document.querySelectorAll('.dairy');
    function callProducts() {
    dairyContainer.forEach(container => {
        dairyProducts.forEach((value , key)=> {
            let card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                <div class="card">
                    <div class="card-img">
                        <img src=${value.img} alt="">
                    </div>
                <div class="card-desc">
                    <p>${value.name}</p>
                    <h2>${value.desc}</h2>
                    <span><h1>${value.price}</h1></span>
                    <button class="addBtn">ADD TO CART</button>
                </div>
            </div> 
            `;
            container.appendChild(card)
        })
    });
    meatContainer.forEach(container => {
        meatProducts.forEach((value , key)=> {
            let card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                <div class="card">
                    <div class="card-img">
                        <img src=${value.img} alt="">
                    </div>
                <div class="card-desc">
                    <p>${value.name}</p>
                    <h2>${value.desc}</h2>
                    <span><h1>${value.price}</h1></span>
                    <button class="addBtn">ADD TO CART</button>
                </div>
            </div> 
            `;
            container.appendChild(card)
        })
    });
    
    cosmeticContainer.forEach(container => {
        cosmeticProducts.forEach((value , key)=> {
            let card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                <div class="card">
                    <div class="card-img">
                        <img src=${value.img} alt="">
                    </div>
                <div class="card-desc">
                    <p>${value.name}</p>
                    <h2>${value.desc}</h2>
                    <span><h1>${value.price}</h1></span>
                    <button class="addBtn">ADD TO CART</button>
                </div>
            </div> 
            `;
            container.appendChild(card)
        })
    });
    }
    callProducts()
    var delCount = document.querySelectorAll('.cart-div .cart-item .delete')
    const count = document.querySelectorAll('#cart-count');
    count.forEach(count =>{
      let proCount = localStorage.getItem('count');
      if (proCount) {
        count.textContent = proCount;
      } else{
        count.textContent = 0
      }
    })
    var addBtn = document.querySelectorAll('.addBtn')

    function addCountPro() {var proCount = localStorage.getItem("count");
    proCount = parseInt(proCount) || 0;

    proCount += 1;
    localStorage.setItem("count", proCount);
    const count = document.querySelectorAll("#cart-count");
    count.forEach((element) => {
      element.innerHTML = proCount;
    });
    }
addBtn.forEach(elem =>{
  elem.removeEventListener('click' ,()=> {addCountPro()});
  elem.addEventListener('click', ()=>{
     addCountPro();
   })
})

delCount.forEach(del => {
    del.addEventListener("click", () => {
        let proCount = localStorage.getItem('count');
        proCount = parseInt(proCount) || 0; // Parse as integer or default to 0 if proCount is null or undefined
        
        if (proCount > 0) {
            proCount -= 1;
            localStorage.setItem('count', proCount);
        } else {
            alert('No Products in Cart!');
        }

        // Update all elements with class 'count'
        count.forEach(countElement => {
            countElement.textContent = proCount;
        });
    });
});