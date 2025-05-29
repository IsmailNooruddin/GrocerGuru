var winWidth = window.innerWidth;

// SLIDER START
let slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prev = () => {
  if (counter <= 0) {
    counter = slides.length;
  }
  counter--;
  slideImage();
};
const next = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
// SLIDER ENDS

let spcProducts = [
  {
    id: 0,
    name: "Brushes",
    desc: "High Quality",
    price: "<del>$20</del>$10",
    img: "./assests/ProductImages/Cosmetics/pr1.png",
  },
  {
    id: 1,
    name: "Makeup Mirror",
    desc: "Best Quality",
    price: "<del>$250</del>$150",
    img: "./assests/ProductImages/Cosmetics/pr8.png",
  },
  {
    id: 2,
    name: "Buffalo Meat",
    desc: "High Quality",
    price: "<del>$400</del>$350",
    img: "./assests/ProductImages/Meat/pr1.png",
  },
  {
    id: 3,
    name: "Butter Milk",
    desc: "Fresh (NEWLY ARRIVED)",
    price: "<del>$100</del>$50",
    img: "./assests/ProductImages/DairyProducts/pr1.png",
  },
  {
    id: 4,
    name: "Mascara",
    desc: "High Quality",
    price: "<del>$100</del>$50",
    img: "./assests/ProductImages/Cosmetics/pr9.png",
  },
  {
    id: 5,
    name: "Shrimps",
    desc: "Fresh (NEWLY ARRIVED)",
    price: "<del>$200</del>$120",
    img: "./assests/ProductImages/Meat/pr11.png",
  },
  {
    id: 6,
    name: "Cottage Cheese",
    desc: "Best Quality",
    price: "<del>$250</del>$220",
    img: "./assests/ProductImages/DairyProducts/pr5.png",
  },
  {
    id: 7,
    name: "Crab Meat",
    desc: "Fresh",
    price: "<del>$150</del>$100",
    img: "./assests/ProductImages/Meat/pr4.png",
  },
  {
    id: 8,
    name: "Rabbit Meat",
    desc: "Fresh Meat",
    price: "<del>$100</del>$80",
    img: "./assests/ProductImages/Meat/pr10.png",
  },
  {
    id: 9,
    name: "Condensed Milk",
    desc: "High Quality (Sweet)",
    price: "<del>$250</del>$220",
    img: "./assests/ProductImages/DairyProducts/pr4.png",
  },
];

let cardCont = document.querySelector(".specialPrd");
function callProducts() {
  spcProducts.forEach((value, key) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                
                    <div class="card-img">
                        <img src=${value.img} alt="">
                    </div>
                <div class="card-desc">
                    <p>${value.name}</p>
                    <h2>${value.desc}</h2>
                    <span><h1>${value.price}</h1></span>
                    <button class="addBtnHome">ADD TO CART</button>
                </div>
            
            `;
    cardCont.appendChild(card);
  });
}

callProducts();

function addCount() {
  var proCount = localStorage.getItem("count");
  proCount = parseInt(proCount) || 0; 

  proCount += 1;
  localStorage.setItem("count", proCount);
  const count = document.querySelectorAll("#cart-count");
  count.forEach((element) => {
    element.innerHTML = proCount;
  });
}
var addBtnHome = document.querySelectorAll('.addBtnHome');

addBtnHome.forEach((elem) => {
  elem.removeEventListener("click", addCount);
  
  elem.addEventListener("click", addCount);
});

// CARD SLIDER

if (winWidth <= 810) {
  const cards = document.querySelectorAll(".card");
  let counterCard = 0;

  cards.forEach((card, index) => {
    card.style.left = `${index * 155}px`;
  });

  var prevCard = () => {
    if (counterCard <= 0) {
      counterCard = cards.length - 4;
    }
    counterCard--;
    cardSlide();
  };
  var nextCard = () => {
    counterCard++;
    if (counterCard >= cards.length - 4) {
      counterCard = 0;
    }
    cardSlide();
  };

  const cardSlide = () => {
    cards.forEach((card) => {
      card.style.transform = `translateX(-${counterCard * 155}px)`;
    });
  };
}
if (winWidth >= 810) {
  const cards = document.querySelectorAll(".card");
  let counterCard = 0;
  cards.forEach((card, index) => {
    card.style.left = `${index * 255}px`;
  });

  var prevCard = () => {
    if (counterCard <= 0) {
      counterCard = cards.length - 7;
    }
    counterCard--;
    cardSlide();
  };
  var nextCard = () => {
    counterCard++;
    if (counterCard >= cards.length - 5) {
      counterCard = 0;
    }
    cardSlide();
  };

  const cardSlide = () => {
    cards.forEach((card) => {
      card.style.transform = `translateX(-${counterCard * 255}px)`;
    });
  };
}
if (winWidth <= 1366) {
  const cards = document.querySelectorAll(".card");
  let counterCard = 0;
  cards.forEach((card, index) => {
    card.style.left = `${index * 267}px`;
  });

  var prevCard = () => {
    if (counterCard <= 0) {
      counterCard = cards.length - 4;
    }
    counterCard--;
    cardSlide();
  };
  var nextCard = () => {
    counterCard++;
    if (counterCard >= cards.length - 4) {
      counterCard = 0;
    }
    cardSlide();
  };

  const cardSlide = () => {
    cards.forEach((card) => {
      card.style.transform = `translateX(-${counterCard * 267}px)`;
    });
  };
}

// CARD SLIDER ENDS
