let isNavOpen = false;

function burgerInit() {
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");

  burger_btn.addEventListener("click", function () {
    if (!isNavOpen) {
      openNav();
    } else {
      closeNav();
    }
  });

  // Function to open the burger menu
  function openNav() {
    burger_btn.innerHTML = `<i class="fa fa-times x-icon" aria-hidden="true"></i>`;
    nav_open.style.display = "block";
    setTimeout(function () {
      nav_open.classList.add("nav_open");
    }, 100);
    isNavOpen = true;
  }

  // Function to close the burger menu
  function closeNav() {
    nav_open.classList.remove("nav_open");
    burger_btn.innerHTML = `<i class="fa fa-bars " aria-hidden="true"></i>`;
    setTimeout(function () {
      nav_open.style.display = "none";
    }, 600);
    isNavOpen = false;
  }

  // Add click event listener to each navigation link
  var navLinks = nav_open.getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(){
      if (window.innerWidth < 768) { // Adjust the screen width breakpoint as needed
        closeNav();
      }
    });
  }
}

burgerInit();
