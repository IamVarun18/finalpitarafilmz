document.querySelector('.yellow1').addEventListener('click', function () {
  // Show the new page
  document.querySelector('.new-page').classList.remove('hidden');
});

document.querySelector('.close-button').addEventListener('click', function () {
  // Hide the new page
  document.querySelector('.new-page').classList.add('hidden');
  stopAllVideos();
});

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to all video elements
  const videos = document.querySelectorAll('.video-container video');
  videos.forEach(video => {
    video.addEventListener('play', function () {
      pauseOtherVideos(video);
    });
  });

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
    const videosOnNewPage = document.querySelectorAll(videosSelector);
    videosOnNewPage.forEach(video => {
      video.addEventListener('play', function () {
        pauseOtherVideos(video);
      });
    });
  });

  // Add event listener to the close button
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', closeNewPage);
});

function pauseOtherVideos(currentVideo) {
  // Get all video elements
  const videos = document.querySelectorAll('.video-container video');

  // Loop through each video and pause it if it's not the current video
  videos.forEach(video => {
    if (video !== currentVideo) {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
    }
  });
}

function stopAllVideos(pageNumber) {
  // Get all video elements on the specific new page
  const videosOnNewPage = document.querySelectorAll(`.new-page-${pageNumber} .video-container video`);

  // Loop through each video and pause it
  videosOnNewPage.forEach(video => {
    video.pause();
    video.currentTime = 0; // Reset video to the beginning
  });
}

// Add this function to your close button click event or wherever you want to close the new-page
function closeNewPage() {
  document.querySelector('.new-page').classList.add('hidden');
  stopAllVideos();
}
