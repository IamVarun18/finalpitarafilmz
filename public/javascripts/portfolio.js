document.addEventListener('DOMContentLoaded', function () {
  // Function to hide all new pages
  function hideAllPages() {
    document.querySelectorAll('.new-page').forEach(function (page) {
      page.classList.add('hidden');
    });
  }

  // Function to show a specific new page
  function showNewPage(pageNumber) {
    const newPageToShow = document.querySelector('.new-page-' + pageNumber);
    if (newPageToShow) {
      newPageToShow.classList.remove('hidden');
    }
  }

  // Navigation click event listeners
  document.querySelectorAll('.navbar li').forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      const pageNumber = this.getAttribute('data-page-number');
      hideAllPages();
      showNewPage(pageNumber);
    });
  });

  // Close button click event listeners
  document.querySelectorAll('.new-page .close-button').forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
      this.closest('.new-page').classList.add('hidden');
    });
  });

  // Yellow section click event listeners
  document.querySelectorAll('.yellow').forEach(function (yellowSection, index) {
    yellowSection.addEventListener('click', function () {
      hideAllPages();
      showNewPage(index + 1); // Assuming yellow section corresponds to the next page
      window.scrollTo(0, 0); // Scroll to the top to make the fixed video visible
    });
  });

  // Initially hide all new pages
  hideAllPages();
});




const form = document.querySelector('form'); // Corrected the selector
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const requirements = document.getElementById("requirements");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Phone Number: ${number.value}<br>`;
  Email.send({
    SecureToken: "b23bb175-558d-49e3-9bcc-9a4d08c58f7f",
    // Host: "smtp.elasticemail.com",
    // Username: "ashishshri3096@gmail.com",
    // Password: "D57057254D6C0AF64FCF15BABA50243EB0EE",
    // this blow is varun username and pass 
    // Username: "varun.018072001@gmail.com",
    // Password: "D0490486A822D50A770C2E37C6C7D8A00241",
    To: 'ashishshri3096@gmail.com',
    From: "varun.018072001@gmail.com",
    Subject: requirements.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Sucess!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
