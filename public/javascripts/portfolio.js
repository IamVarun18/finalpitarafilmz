document.addEventListener('DOMContentLoaded', function () {
  // Get your menu icon element (replace 'menu-icon' with the actual ID or class of your menu icon)
  const menuIcon = document.getElementById('menu-icon');

  // Add a click event listener for the menu icon
  menuIcon.addEventListener('click', function (event) {
    // Prevent the default behavior of the click event (e.g., following a link)
    event.preventDefault();

    // Add or remove a class to toggle the menu state
    // Replace 'active' with the class you want to use for the active state
    // You can toggle classes, set styles, or perform other actions as needed
    const menuIsActive = menuIcon.classList.toggle('active');

    // If the menu is active, activate the yellow sections; otherwise, deactivate them
    if (menuIsActive) {
      activateYellowSections();
    } else {
      deactivateYellowSections();
    }
  });

  // Function to activate yellow sections
  function activateYellowSections() {
    // Get all elements with class "yellow"
    const yellowSections = document.querySelectorAll('.yellow');

    // Iterate over each yellow section
    yellowSections.forEach(yellowSection => {
      // Get the page number from the data attribute
      const pageNumber = yellowSection.closest('.page').dataset.pageNumber;

      // Set up click event for each yellow section
      yellowSection.addEventListener('click', function () {
        // Show the corresponding new page
        const newPageSelector = `.new-page-${pageNumber}`;
        document.querySelector(newPageSelector).classList.remove('hidden');
      });

      // Set up close button click event for each new page
      const closeButtonSelector = `.new-page-${pageNumber} .close-button`;
      document.querySelector(closeButtonSelector).addEventListener('click', function () {
        // Hide the corresponding new page
        closeNewPage(pageNumber);
      });

      // Add event listeners to all video elements on the new page
      const videosSelector = `.new-page-${pageNumber} .video-container video`;
      const videos = document.querySelectorAll(videosSelector);
      videos.forEach(video => {
        video.addEventListener('play', function () {
          pauseOtherVideos(video, pageNumber);
        });
      });
    });
  }

  // Function to deactivate yellow sections
  function deactivateYellowSections() {
    // Remove click event listeners from all yellow sections
    const yellowSections = document.querySelectorAll('.yellow');
    yellowSections.forEach(yellowSection => {
      yellowSection.removeEventListener('click');
    });
  }

  // Rest of your functions remain the same

  // Add this function to your close button click event or wherever you want to close the new-page
  function closeNewPage(pageNumber) {
    const newPageSelector = `.new-page-${pageNumber}`;
    document.querySelector(newPageSelector).classList.add('hidden');
    stopAllVideos(pageNumber);
  }
});
