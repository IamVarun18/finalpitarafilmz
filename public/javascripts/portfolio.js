// Add this inside your existing JavaScript code

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

function stopAllVideos() {
  // Get all video elements
  const videos = document.querySelectorAll('.video-container video');

  // Loop through each video and pause it
  videos.forEach(video => {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
  });
}

// Add this function to your close button click event or wherever you want to close the new-page
function closeNewPage() {
  document.querySelector('.new-page').classList.add('hidden');
  stopAllVideos();
}
