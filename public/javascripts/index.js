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
  var dropdown = document.querySelector(".menubar");

  menuIcon.addEventListener('click', toggleMenu);

  var menuItems = document.querySelectorAll(".menubar ul li a");
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();
      closeMenu();
    });
  });

  function isMobile() {
    return window.innerWidth <= 480;
  }

  function toggleMenu() {
    dropdown.classList.toggle("active");
    menuIcon.src = dropdown.classList.contains("active")
      ? "./images/icons8-cross-30.png"
      : "./images/icons8-menu-50.png";

    dropdown.style.top = dropdown.classList.contains("active") ? "9vh" : "-100%";
  }

  window.closeMenu = function () {
    dropdown.classList.remove("active");
    dropdown.style.top = "-100%";
    menuIcon.src = "./images/icons8-menu-50.png";
  };

  window.addEventListener('resize', function () {
    if (!isMobile()) {
      closeMenu();
    }
  });
});

// ... (rest of your code)



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














let infoPageActive = false;

// Initially hide the Info Page and show the Team Page
document.getElementById('infopage').style.display = 'none';
document.getElementById('box7_team').style.display = 'block';

function togglePages() {
  const infopage = document.getElementById('infopage');
  const box7_team = document.getElementById('box7_team');

  if (infoPageActive) {
    // Deactivate Info Page and Activate Team 7
    infopage.style.display = 'none';
    box7_team.style.display = 'block';
  } else {
    // Deactivate Team 7 and Activate Info Page
    infopage.style.display = 'block';
    box7_team.style.display = 'none';
  }

  // Toggle the flag
  infoPageActive = !infoPageActive;
}

function viewIndividualInfo(name, role, instagramLink) {
  // Update the content of the info page for the specific team member
  const individualInfoContent = document.getElementById('individualInfoContent');

  // Modify the content for Ashish Shrivastava
  if (name === 'Ashish Shrivastava') {
    individualInfoContent.innerHTML = `
      <h2>${name}</h2>
      <h3>${role}</h3>
      <a href="${instagramLink}" target="_blank">
        <img src="./images/icons8-instagram-48.png" alt="Instagram">
      </a>
      <p>
        Meet our creative genius, Ashish Shrivastava, the founder and creative director of Pitara Filmz.
        Ashish's dedication to storytelling is not just a profession; it's much more. In his world, the thrill
        lies in the search for stories, music, and travel. Ashish wears many hats — Director of Photography,
        Cinematographer, Editor, and Photographer, with over 5 years of doing this stuff. For him, it's not a job;
        it's a calling. In his own words, "It's not just about building a company; it's about fostering a community, a vibe.
        I want everyone here to feel the growth, to create work that goes beyond a paycheck. We're not just telling stories
        and creating visuals; we're creating an ecosystem where creativity thrives. Welcome to Pitara Filmz, a space of creative brilliance."
      </p>
    `;
  } else if (name === 'Rajnish Vinodia') {
    // Add similar blocks for other team members as needed
    individualInfoContent.innerHTML = `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <a href="${instagramLink}" target="_blank">
      <img src="./images/icons8-instagram-48.png" alt="Instagram">
    </a>
    <p> Meet Rajnish Vinodia, our Cinematic Storyteller at Pitara Filmz! As the DOP, Cinematographer, and Video Editor with 5+ years of field expertise, Rajnish brings stories to life beyond the frames. Beyond the lens, he's passionate about Drawing, Capturing moments, Travel, and Anime.

    In his words:
    "Pitara is like a baby to me, a dream turned reality. My only desire is limitless creativity. Entrusting the journey to Lord Shiva, I'm thrilled to witness Pitara grow with our amazing team. Join us in crafting cinematic tales!
    </p>
    `;
  }
  else if (name === 'Ravideep Mishra') {
    // Add similar blocks for other team members as needed
    individualInfoContent.innerHTML = `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <a href="${instagramLink}" target="_blank">
      <img src="./images/icons8-instagram-48.png" alt="Instagram">
    </a>
    <p>aayega
    </p>
    `;
  }
  else if (name === 'Nandini Shrivastava') {
    // Add similar blocks for other team members as needed
    individualInfoContent.innerHTML = `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <a href="${instagramLink}" target="_blank">
      <img src="./images/icons8-instagram-48.png" alt="Instagram">
    </a>
    <p>Meet our amazing voice entertainer, Nandini Shrivastava, Pitara's talented voiceover artist. She isn't just a storyteller; she's a passionate explorer, a book lover, and a travel enthusiast. Always eager to learn, Nandini is currently diving into the art of dubbing.

    In her own words, "I'm on a mission to make 'Pitara' everything we've ever dreamed of-the best, the most creative, and the ultimate go-to place for all your video production needs. Join me on this journey where we turn dreams into reality and create a space that's filled with endless possibilities."
    </p>
    `;
  }


  else if (name === 'Manish Kumar') {
    // Add similar blocks for other team members as needed
    individualInfoContent.innerHTML = `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <a href="${instagramLink}" target="_blank">
      <img src="./images/icons8-instagram-48.png" alt="Instagram">
    </a>
    <p>Meet our underwater explorer Manish Kumar, skilled Cinematographer and Video Editor of Pitara Filmz, bringing 5 years of dedicated experience to deliver unique perspectives and breathtaking visuals. He expresses himself through singing. It's his way of adding melody to life beyond the lens and editing suite.
      In his words, My vision for Pitara is ambitious — to see it rise and lead as the foremost production house across the country. Together, let's turn dreams into cinematic realities at Pitara Filmz!
    </p>
    `;
  }


  else if (name === 'Akash Pandey') {
    // Add similar blocks for other team members as needed
    individualInfoContent.innerHTML = `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <a href="${instagramLink}" target="_blank">
      <img src="./images/icons8-instagram-48.png" alt="Instagram">
    </a>
    <p>aayega
    </p>
    `;
  }



  // Activate Info Page and Deactivate Team 7
  const infopage = document.getElementById('infopage');
  const box7_team = document.getElementById('box7_team');

  infopage.style.display = 'block';
  box7_team.style.display = 'none';

  // Set the flag accordingly
  infoPageActive = true;
}

// Example: Initially showing the Team Page
// No need to call viewIndividualInfo for a specific member initially
