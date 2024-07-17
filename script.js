document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-carousel video');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentVideoIndex = 0;
  
    function showVideo(index) {
      videos.forEach((video, i) => {
        video.style.display = i === index ? 'block' : 'none';
      });
    }
  
    prevButton.addEventListener('click', function() {
      currentVideoIndex = (currentVideoIndex > 0) ? currentVideoIndex - 1 : videos.length - 1;
      showVideo(currentVideoIndex);
    });
  
    nextButton.addEventListener('click', function() {
      currentVideoIndex = (currentVideoIndex < videos.length - 1) ? currentVideoIndex + 1 : 0;
      showVideo(currentVideoIndex);
    });
  
    showVideo(currentVideoIndex);
  });
  