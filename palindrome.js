String.prototype.reverse = function reverse() {
  return Array.from(this)
    .reverse()
    .join("");
};

// Define a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  };

  // Returns true for a palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}
