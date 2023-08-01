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

// Category tag list
const category = document.querySelectorAll(".cat-list li");

// Drop-down button
const dropDownBtn = document.querySelector(".dropdown-btn");

// Category select box
const selectCategoryBox = document.querySelector(".cat-items");

// Category select items
const selectCategoryItems = document.querySelectorAll(".cat-items li");

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

// ----------------------------------------------------------

// ***** change colour of clicked nav item by adding active class

// remove active class from unclicked items
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

// ----------------------------------------------------------

// Menu close and open on small screen <by changing element height>
hamBurger.addEventListener("click", () => {
  nav.classList.toggle("lg-nav-height");
})

//                    NUMBER OF ORDERS IN CART
// ----------------------------------------------------------

// cart item count
var itemCount = 0;

// hide cart item count when no item is added
cartCountElement.style.display = "none";

// Increase or decrease cart count based on selection
addToCart.forEach((btn) => {
  // amount of dish in cart
  var singleCount = 0;

  // Create HTML element for each number of dish in cart
  const iye = document.createElement("span");
  iye.id = "iye";
  const omo = btn.appendChild(iye);

  btn.addEventListener("click", () => {
    cartCountElement.style.display = "block";

    itemCount += 1;
    console.log(itemCount);
    cartCountElement.textContent = itemCount;

    // add class to the grandparent of button
    btn.parentElement.parentElement.classList.add("ordered");

    singleCount += 1;
    omo.textContent = singleCount;

    // setTimeout(showSuccess);
  });
});

//                  SEARCH INPUT
// ----------------------------------------------------------

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

//                      FILTER TAGS
// ----------------------------------------------------------

// remove class function
const removeActive = (t) => {
  t.forEach(item => {
    item.classList.remove("active");
  })
}

// ********** Category selection  <<button tags>>
category.forEach(cat => {
  cat.addEventListener("click", () => {
    removeActive(category);
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

//                      FILTER SELECT
// ----------------------------------------------------------
dropDownBtn.addEventListener("click", () => {
  selectCategoryBox.classList.toggle("cat-items-show");
})

selectCategoryItems.forEach((cat) => {
  cat.addEventListener("click", () => {
    removeActive(selectCategoryItems);
    cat.classList.add("active");

    // Add angle icon upon selecting each option
    const angleDown = document.createElement("span");
    angleDown.classList.add("material-icons");
    angleDown.textContent = "expand_more";

    var clickedContent = cat.textContent;
    dropDownBtn.textContent = clickedContent;
    dropDownBtn.appendChild(angleDown);

    dishes.forEach((dish) => {
      dish.style.display = "none";

      // display only selected category
      var catText = cat.textContent.toLowerCase();
      switch (catText) {
        case "african":
          african.forEach((item) => {
            item.style.display = "block";
          });
          break;
        case "american":
          american.forEach((item) => {
            item.style.display = "block";
          });
          break;
        case "asian":
          asian.forEach((item) => {
            item.style.display = "block";
          });
          break;
        case "european":
          european.forEach((item) => {
            item.style.display = "block";
          });
          break;
        default:
          dish.style.display = "block";
          break;
      }
    });
    selectCategoryBox.classList.toggle("cat-items-show");
  });
});