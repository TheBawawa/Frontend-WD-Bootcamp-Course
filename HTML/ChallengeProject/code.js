/**
 * TODO: Implement a function that clears all the content
 * prior to generating new random content
 */
function clearAll() {}

/**
 * TODO:
 * - Show a random Meme in the correct location
 * - Never show more than 1 meme at a time
 */
function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData("memes");
}

/**
 * TODO:
 * - Show a random joke in the correct location
 * - Never show more than 1 joke at a time
 */
function showJoke() {
  // Value is a string representing the joke
  const randomJokeText = getRandomData("jokes");
}

/**
 * TODO:
 * - Show a random quote in the correct location
 * - Never show more than 1 quote at a time
 */
function showQuote() {
  // Value should be in format: { quote: '', author: '' }
  const randomQuote = getRandomData("quotes");
}

/**
 * TODO:
 * - Show a random riddle in the correct location
 * - Never show more than 1 riddle at a time
 * - Always hide the riddle's answer initially
 */
function showRiddle() {
  // Value should be in format: { question: '', answer: '' }
  const randomRiddle = getRandomData("riddles");
}

/**
 * TODO: Unhide the riddle's answer
 * - If there is no riddle shown, alert the user that there is no riddle
 * - If there is a riddle shown and an answer shown, alert the user
 *   that the answer is already revealed
 * - If there is a riddle shown but no answer, unhide the answer!
 */
function revealAnswers() {}

/**
 * This function is used to get random data.  Don't worry about how it works, just know how to use it.  Usage is pre-filled in the functions above already, but here's an explanation of the function anyways.
 *
 * Valid arguments:
 *
 * 'memes', 'jokes', 'quotes', 'riddles'
 *
 * Return values:
 *
 * For meme data:
 * A string representing an image url
 *
 * For joke data:
 * A string representing the joke
 *
 * For quote data:
 * An object - { quote: '', author: '' }
 *
 * For riddle data:
 * An object - { question: '', answer: '' }
 *
 * Example usage: getRandomData('quotes');
 */
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}
