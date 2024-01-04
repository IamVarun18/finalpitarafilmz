document.addEventListener('DOMContentLoaded', function () {
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
      const newPageSelector = `.new-page-${pageNumber}`;
      document.querySelector(newPageSelector).classList.add('hidden');
      stopAllVideos(pageNumber);
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
});

// Rest of the functions remain the same

// Add this function to your close button click event or wherever you want to close the new-page
function closeNewPage(pageNumber) {
  const newPageSelector = `.new-page-${pageNumber}`;
  document.querySelector(newPageSelector).classList.add('hidden');
  stopAllVideos(pageNumber);
}
