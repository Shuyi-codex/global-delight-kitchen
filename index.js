// ********** VARIABLES ********** //
// NAVIGATION
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll(".nav-items li");
const closeBtn = document.querySelector("#closeBtn");
const menuBtn = document.querySelector("#menuBtn");
const hamBurger = document.querySelector(".hamburger");

// MAIN SEGMENT
const mainContent = document.querySelector("main");

// Add to Cart Button
const addToCart = document.querySelectorAll(".add2cart");

// CART COUNT
let cartCountElement = document.getElementById("cartCount");

// Search input
const search = document.querySelector("#dishSearch");

const fl = document.querySelector(".food-list")

// Dishes
const dishes = document.querySelectorAll(".dish");

// Category list
const category = document.querySelectorAll(".cat-list li");

// groups
const african = document.querySelectorAll("#african");
const american = document.querySelectorAll("#american");
const asian = document.querySelectorAll("#asian");
const european = document.querySelectorAll("#european");



// ********** ACTIONS ********** //

// Open nav panel on menu btn click
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  nav.classList.add("bg-nav-width");
  nav.classList.remove("sm-nav-width");
  closeBtn.style.display = "block";
})

// close nav panel on button click or click anywhere else
const closeNavPanel = (e) => {
  if (e.target === closeBtn) {
    closeBtn.style.display = "none";
    nav.classList.remove("bg-nav-width");
    nav.classList.add("sm-nav-width");
    menuBtn.style.display = "block";
  }

  if (e.target !== closeBtn) {
    closeBtn.style.display = "none";
    nav.classList.remove("bg-nav-width");
    nav.classList.add("sm-nav-width");
    menuBtn.style.display = "block";
  }
}

closeBtn.addEventListener("click", closeNavPanel);
mainContent.addEventListener("click", closeNavPanel);

// change nav panel size and buttons dynamically
function handleResize() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 700) {
    nav.classList.add("lg-nav-width");
    nav.classList.remove("sm-nav-width");
    closeBtn.style.display = "none";
    // menuBtn.style.display = "none";
  }
  if (screenWidth > 700) {
    nav.classList.remove("lg-nav-width");
    nav.classList.add("sm-nav-width");
  }
  if (nav.classList.contains("sm-nav-width") && !nav.classList.contains("bg-nav-width")) {
    menuBtn.style.display = "block";
  }
  if (nav.classList.contains("bg-nav-width") && !nav.classList.contains("lg-nav-width")) {
    closeBtn.style.display = "block";
  }
  if (nav.classList.contains("lg-nav-width")) {
    menuBtn.style.display = "none";
  }
}

handleResize();

window.addEventListener("resize", handleResize);


// change colour of clicked nav item
// Remove active class from unclicked items
const removeActiveClass = () => {
  navItems.forEach(item => {
    item.classList.remove("active");
  })
}

navItems.forEach(item => {
    item.addEventListener("click", () => {
      removeActiveClass();
      item.classList.add("active")
    })
});

// Menu close and open on small screen
hamBurger.addEventListener("click", () => {
  nav.classList.toggle("lg-nav-height");
})

// cart item count
var itemCount = 0;

// hide cart item count when no item is added
cartCountElement.style.display = "none";

// Increase or decrease cart count based on selection
addToCart.forEach((btn) => {
  var singleCount = 0;
  const iye = document.createElement("span");
  iye.id = "iye";
  const omo = btn.appendChild(iye);


  btn.addEventListener("click", () => {
    cartCountElement.style.display = "block";
    // btn.style.opacity = "0.9";

    itemCount += 1;
    console.log(itemCount);
    cartCountElement.textContent = itemCount;
    btn.parentElement.parentElement.classList.add("ordered");


    

    // singleCount = 0;
    singleCount += 1;
    omo.textContent = singleCount;

    // dishes.forEach(dish => {
    //   dish.classList.add("ordered");
    // })
    // setTimeout(showSuccess, );
  });
});








// ********** Search dish
const searchDish = () => {
  removeActive();
  category[0].classList.add("active");
  const val = dishSearch.value.toLowerCase();
  dishes.forEach(dish => {
    let name = dish.querySelector("h4").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  })
  
}

// const showAllDishes = () => {
//   if (dishSearch.value == "") {
//     dishes.forEach(dish => {
//       dish.style.display = "block";
//     })
//   }
// }

search.addEventListener("keyup", searchDish);
// search.addEventListener("blur", showAllDishes);

// ********** Category selection
const removeActive = () => {
  category.forEach(item => {
    item.classList.remove("active");
  })
}

category.forEach(cat => {
  cat.addEventListener("click", () => {
    removeActive();
    cat.classList.add("active");
    dishes.forEach(dish => {
      dish.style.display = "none";

      // display only selected category
      var catText = cat.textContent.toLowerCase();
      switch (catText) {
        case "african":
          african.forEach(item => {
            item.style.display = "block"
          })
          break;
        case "american":
          american.forEach(item => {
            item.style.display = "block"
          })
          break;
        case "asian":
          asian.forEach(item => {
            item.style.display = "block"
          })
          break;
        case "european":
          european.forEach(item => {
            item.style.display = "block"
          })
          break;
        default:
          dish.style.display = "block";
          break;
      }

      // if (catText == "european") {
      //   european.forEach(item => {
      //     item.style.display = "block"
      //   })
      // }
    })
  })
})