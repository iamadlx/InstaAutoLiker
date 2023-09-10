(function() {
  // Check that the Instagram site is set to English before executing the script
  if (document.documentElement.lang !== 'en') {
    console.warn("Warning: Please set the Instagram site to English before running this script. Otherwise, it may not work as expected.");
    return; // Stop script execution
  }

  // Minimum and maximum delay (in seconds) between likes
  const MIN_DELAY_SECONDS = 3;
  const MAX_DELAY_SECONDS = 7;
  var totalLikes = 0;

  // Function to perform the click actions on like buttons
  function clickLikeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].querySelector("div[role='button']").click();
      totalLikes++;
    }
  }

  // Main function to like posts with random delays
  function likePosts() {
    // Generate a random delay between actions
    var delayBetweenActions = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);

    // Select all like buttons on the page
    var likeButtons = document.querySelectorAll('.xp7jhwk');

    // Filter elements to keep only those with aria-label="Like"
    likeButtons = Array.from(likeButtons).filter(function(likeButton) {
      var svg = likeButton.querySelector('svg[aria-label="Like"]');
      return svg !== null;
    });

    // Check if there are no like buttons left to click
    if (likeButtons.length === 0) {
      console.log("No more like buttons found. Exiting the script.");
      return; // Stop script execution
    }

    // Perform the click actions with random delays
    clickLikeElements(likeButtons);

    // Log the total number of likes performed
    console.log("Total Likes: " + totalLikes);

    // Scroll the page by 550 pixels
    window.scrollBy(0, 550);

    // Schedule the next execution with a random delay
    setTimeout(likePosts, delayBetweenActions * 1000);
  }

  // Initial execution of the main function
  likePosts();
})();
