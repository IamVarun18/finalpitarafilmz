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


