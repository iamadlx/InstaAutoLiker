(function() {
  // Check that the Instagram site is set to English before executing the script
  if (document.documentElement.lang !== 'en') {
    console.warn("Warning: Please set the Instagram site to English before running this script. Otherwise, it may not work as expected.");
    return; // Stop script execution
  }

  // Minimum and maximum delay (in seconds) between likes
  const MIN_DELAY_SECONDS = 6;
  const MAX_DELAY_SECONDS = 20;
  var totalLikes = 0;

  // Function to perform the click actions on like buttons and navigate to the next post
  function likeAndNavigate() {
    // Generate a random delay between actions
    var delayBetweenActions = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);

    // Select the like button for the current post
    var likeButton = document.querySelector('._aamw div[role="button"]');
    
    // Select the "Next" button to navigate to the next post
    var nextButton = document.querySelector('._aaqg button');

    // Check if both buttons are found
    if (likeButton && nextButton) {
      // Check if the post is already liked
      var svgAriaLabel = likeButton.querySelector('svg[aria-label="Like"]');
      if (svgAriaLabel && svgAriaLabel.getAttribute('aria-label') === 'Like') {
        // Perform the like action
        likeButton.click();
        totalLikes++;

        // Navigate to the next post
        nextButton.click();

        // Log the total number of likes performed
        console.log("Total Likes: " + totalLikes);

        // Generate a random delay before processing the next post
        var rand = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);
        console.log('Waiting for ' + rand + ' seconds before the next post.');

        // Schedule the next execution with a random delay
        setTimeout(likeAndNavigate, rand * 1000);
      } else {
        // Post is already liked, move to the next post
        nextButton.click();

        // Log an error message
        console.error("This post is already liked. Moving to the next post.");

        // Generate a random delay before processing the next post
        var rand = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);
        console.log('Waiting for ' + rand + ' seconds before the next post.');

        // Schedule the next execution with a random delay
        setTimeout(likeAndNavigate, rand * 1000);
      }
    } else {
      console.log("Like button or Next button not found. Exiting the script.");
    }
  }

  // Initial execution of the main function
  likeAndNavigate();
})();
