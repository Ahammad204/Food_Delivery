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
document.getElementById('subscribeButton').addEventListener('click', function() {
  var emailInput = document.getElementById('emailInput').value.trim();
  if (emailInput !== '') {
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('emailInput').value = '';
  }
});