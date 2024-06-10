// Toggle Menu icon for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navigation = document.querySelector(".navigation");


  menuIcon.addEventListener("click", toggleNavElements);

  function toggleNavElements() {
    navigation.classList.toggle("active");
   
  }
});
