// cart

let openShopping = document.querySelector(".icon_card");
let closeShopping = document.querySelector(".close");
let list = document.querySelector(".featured_list");
let newlist = document.querySelector(".new_list");
let newlist2 = document.querySelector(".new_list2");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".cnt");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// Assuming products is an array of objects with properties like id, image, name, and price

let products = [
  {
    id: 1,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (1).jpg",
  },
  {
    id: 2,
    name: "product",
    discountedPrice: 250,
    price: 350,
    image: "./assets/img/p (2).jpg",
  },
  {
    id: 3,
    name: "product",
    discountedPrice: 290,
    price: 350,
    image: "./assets/img/p (3).jpg",
  },
  {
    id: 4,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (4).jpg",
  },
  {
    id: 5,
    name: "product",
    discountedPrice: 300,
    price: 350,
    image: "./assets/img/p (5).jpg",
  },
  {
    id: 6,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (6).jpg",
  },
  {
    id: 7,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (7).jpg",
  },
  {
    id: 8,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (8).jpg",
  },
  {
    id: 9,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (9).jpg",
  },
  {
    id: 10,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (10).jpg",
  },
  {
    id: 10,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (10).jpg",
  },
  {
    id: 11,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (11).jpg",
  },
  {
    id: 12,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (12).jpg",
  },
  {
    id: 13,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (13).jpg",
  },
  {
    id: 14,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (14).jpg",
  },
  {
    id: 15,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (15).jpg",
  },
  {
    id: 16,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (16).jpg",
  },
  {
    id: 17,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (17).jpg",
  },
  {
    id: 18,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (18).jpg",
  },
  {
    id: 19,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (19).jpg",
  },
  {
    id: 20,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (20).jpg",
  },
  {
    id: 21,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (21).jpg",
  },
  {
    id: 22,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (22).jpg",
  },
  {
    id: 23,
    name: "product",
    discountedPrice: 200,
    price: 350,
    image: "./assets/img/p (23).jpg",
  },
];

let listCards = [];
let listFav = [];

function initApp() {
  products.forEach((value, key) => {
    let newArticle = document.createElement("article");
    newArticle.classList.add("featured_card", "swiper-slide");

    newArticle.innerHTML = `
      <img src="${value.image}" alt="image" class="featured_img">
      <h2 class="featured_title">${value.name}</h2>
      <div class="featured_prices">
        <span class="featured_discount">$${value.discountedPrice.toLocaleString()}</span>
        <span class="featured_price">$${value.price}</span>
      </div>
      <button class="button" onclick="addToCard(${key})">Add To Cart</button>
      <div class="featured_actions">
        <button><i class="ri-archive-2-line"></i></button>
        <button id="favBtn" onclick="addToFav(${key})"><i class="ri-heart-3-line fav"></i></button>
        <button><i class="ri-eye-line"></i></button>
      </div>
    `;

    list.appendChild(newArticle);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}


function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
              <div><img src="${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
              </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}


function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

/*=============== SEARCH ===============*/

const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

/*===== search SHOW =====*/
/* Validate if constant exists */
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}
console.log(searchButton);
console.log(searchClose);
console.log(searchContent);
/*=============== LOGIN ===============*/

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home_swiper", {
  loop: true, // Enable infinite loop
  spaceBetween: -7, // Set the space between slides
  grabCursor: true, // Enable grab cursor
  slidesPerView: "auto", // Set the number of slides to show at a time
  centeredSlides: "auto", // Center the active slide
  autoplay: {
    delay: 3000, // Set the autoplay delay in milliseconds
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },

  breakpoints: {
    1220: {
      spaceBetween: -10,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured_swiper", {
  loop: true, // Enable infinite loop
  spaceBetween: 16, // Set the space between slides
  grabCursor: true, // Enable grab cursor
  slidesPerView: "auto", // Set the number of slides to show at a time
  centeredSlides: "auto", // Center the active slide

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});
/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new_swiper", {
  loop: true, // Enable infinite loop
  spaceBetween: 16, // Set the space between slides
  grabCursor: true, // Enable grab cursor
  slidesPerView: "auto", // Set the number of slides to show at a time
  centeredSlides: "auto", // Center the active slide

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial_swiper", {
  loop: true, // Enable infinite loop
  spaceBetween: 16, // Set the space between slides
  grabCursor: true, // Enable grab cursor
  slidesPerView: "auto", // Set the number of slides to show at a time
  centeredSlides: "auto", // Center the active slide

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false, // Center the active slide
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // Animations repea
});
sr.reveal(
  `.home_data ,.featured_container,.new_container,.join_data,.testimonial_container,.footer`
);
sr.reveal(`.home_images`, { delay: 600 });
sr.reveal(`.services_card`, { interval: 100 });
sr.reveal(`.discount_data`, { origin: "left" });
sr.reveal(`.discount_images`, { origin: "right" });
