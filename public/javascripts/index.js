var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    // crsr.style.bottom = dets.x + "px";
}); document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
    // my code
// });
// var menu = document.querySelector("ol");
// var dropdown = document.querySelector(".ulitems");
// let flag = 0;

// menu.addEventListener('click', () => {
//     if (flag == 0) {
//         dropdown.style.top = "9vh";
//         menu.innerHTML = ' <li><img class="menuicon" src="./images/icons8-cross-30.png" alt=""></li>';
//         flag = 1;
        
//     } else {
//         dropdown.style.top = "-100%";
//         menu.innerHTML = ' <li><img class="menuicon" src="./images/icons8-menu-50.png" alt=""></li>';
//         flag = 0;
//     }






document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector(".menuicon");
    var dropdown = document.querySelector(".ulitems");
    var menuItems = document.querySelectorAll(".ulitems li a"); // Select all menu items
  
    menuIcon.addEventListener('click', function () {
      dropdown.classList.toggle("active");
    
    });
  
    // Add click event listeners to close the dropdown when a menu item is clicked
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        dropdown.classList.remove("active");
      });
    });
  });
    
  


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       mousewheel: true,
//     },
//   });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,

    // cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },

    // mousewheel: true,
    keyboard: true,
  });

  var swiperb7 = new Swiper(".swiperb7", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
  


  if (window.matchMedia("(max-width: 768px)").matches) {
    swiper.params.slidesPerView = 1;
    swiperb7.params.slidesPerView = 1;
  }