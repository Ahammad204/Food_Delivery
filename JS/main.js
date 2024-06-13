// Toggle Menu icon for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navigation = document.querySelector(".navigation");

  menuIcon.addEventListener("click", toggleNavElements);

  function toggleNavElements() {
    navigation.classList.toggle("active");
  }
});

// Newsletter subscription
document
  .getElementById("subscribeButton")
  .addEventListener("click", function () {
    var emailInput = document.getElementById("emailInput").value.trim();
    if (emailInput !== "") {
      document.getElementById("successMessage").style.display = "block";
      document.getElementById("emailInput").value = "";
    }
  });

// menu items
const menuArray = [
  {
    name:"Sandwich",
    url: "../Resources/PopularItem/img7.png",
    rating:4.2,
    amount: 10.20
  },
  {
    name:"Snacks",
    url: "../Resources/PopularItem/img8.png",
    rating:4.8,
    amount: 12.20
  },
  {
    name:"Ice Cream",
    url: "../Resources/PopularItem/img9.png",
    rating:5.0,
    amount: 5
  },
  {
    name:"Creamy Sandwich",
    url: "../Resources/PopularItem/img10.png",
    rating:5.0,
    amount: 5
  },
  {
    name:"Noodles",
    url: "../Resources/PopularItem/img11.png",
    rating:4.0,
    amount: 25.25
  },
  {
    name:"Meat",
    url: "../Resources/PopularItem/img12.png",
    rating:5.0,
    amount: 35.25
  },
 
];


const addedCards = [];

function handleShowMoreMenu() {
    const menuContainer = document.getElementById("menu-cards");

    for (const item of menuArray) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Assign a unique identifier to each card
        cardDiv.dataset.itemId = item.name.replace(/\s+/g, '-').toLowerCase();

        cardDiv.innerHTML = `
            <div class="card-img">
                <img src="${item.url}" alt="">
            </div>
            <div class="card-info">
                <div class="info-left">
                    <h1>${item.name}</h1>
                    <button>Add to cart</button>
                </div>
                <div class="info-right">
                    <p>⭐ ${item.rating}</p>
                    <p class="amount">$ ${item.amount}</p>
                </div>
            </div>
        `;

        menuContainer.appendChild(cardDiv);
        addedCards.push(cardDiv); 
    }

    const hideShowAllButton = document.getElementById("check-all-menu");
    hideShowAllButton.classList.add("hidden");

    const ShowLessButton = document.getElementById("show-less-menu");
    ShowLessButton.classList.remove("hidden");
}

function handleShowLessMenu() {
    const menuContainer = document.getElementById("menu-cards");

    
    for (const card of addedCards) {
        menuContainer.removeChild(card);
    }


    addedCards.length = 0;

    const hideShowAllButton = document.getElementById("check-all-menu");
    hideShowAllButton.classList.remove("hidden");

    const ShowLessButton = document.getElementById("show-less-menu");
    ShowLessButton.classList.add("hidden");
}

// Add To cart 

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('button');
  
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const card = button.closest('.card');
          const itemName = card.querySelector('h1').textContent;
          const itemPrice = card.querySelector('.amount').textContent.replace('$', '');
          const itemRating = card.querySelector('.info-right p:first-child').textContent.replace('⭐', '').trim();
          
          const item = {
              name: itemName,
              price: parseFloat(itemPrice),
              rating: parseFloat(itemRating)
          };

          let cart = localStorage.getItem('cart');
          if (cart) {
              cart = JSON.parse(cart);
          } else {
              cart = [];
          }
          cart.push(item);
          localStorage.setItem('cart', JSON.stringify(cart));
          
          alert(`${itemName} has been added to the cart!`);
      });
  });
});


