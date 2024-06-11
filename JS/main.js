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
const imageArray = [
  {
    name:""
    url: "./resource/Projects/projects_1.jpg",
  },
  {
    url: "./resource/Projects/projects_2.jpg",
  },
  {
    url: "./resource/Projects/projects_3.jpg",
  },
  {
    url: "./resource/Projects/projects_4.jpg",
  },
];

function handleShowMoreProject() {
  const projectContainer = document.getElementById("projects");

  for (const item of imageArray) {
    const projectDivImage = document.createElement("div");

    projectDivImage.classList.add("project");
    projectDivImage.innerHTML = `  <div class="card">
            <div class="card-img">
              <img src="./Resources/PopularItem/img5.png" alt="">
            </div>
            <div class="card-info">
              <div class="info-left">
                <h1>Chicken Pot Pie</h1>
                <button>Add to cart</button>
              </div>
              <div class="info-right">
                <p>⭐ 4.2</p>
                <p class="amount">$10.50</p>
              </div>
            </div>
          </div>`;

    console.log(projectDivImage);

    projectContainer.appendChild(projectDivImage);

    const hideShowAllButton = document.getElementById("check-all-projects");
    hideShowAllButton.classList.add("hidden");

    const ShowLessButton = document.getElementById("show-less-projects");
    ShowLessButton.classList.remove("hidden");
  }
}
