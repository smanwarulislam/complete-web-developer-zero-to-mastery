// callbacks (Callback function - JavaScript Callbacks)

// An example: addEventListener() Code Example
el.addEventListener("click", submitForm);

// An example: Callback function - JavaScript Callbacks
// callback pyramid of doom
movePlayer(100, 'Left', function() {
  movePlayer(400, 'Left', function() {
    movePlayer(10, 'Right', function() {
      movePlayer(330, 'Left', function() {
      });
    });
  });
});

// Using promises - JavaScript
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

// An example
// Let's say we had some sort of an app that uses Twitter, officially known as X (formerly Twitter) since July 2023
grabTweets('twitter/andreineagoie', (error, andreiTweets) => {
  if (error) {
    throw Error;
  }
  displayTweets(andreiTweets);
  grabTweets('twitter/elonmusk', (error, elonTweets) => {
    if (error) {
      throw Error;
    }
    displayTweets(elonTweets);
    grabTweets('twitter/vitalikbuterin', (error, vitalikTweets) => {
      if (error) {
        throw Error;
      }
      displayTweets(vitalikTweets);
    });
  });
});