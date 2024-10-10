/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

const quotes = [ 
    { text: "External things are not the problem. It’s your assessment of them. Which you can erase right now.", author: "Marcus Aurelius" }, 
    { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" }, 
    { text: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius" }, 
    { text: "We are more often frightened than hurt; and we suffer more in imagination than in reality.", author: "Seneca" }, 
    { text: "No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.", author: "Seneca", explanation: "Explanation: Quote produced today"}, 
    { text: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.", author: "Epictetus" }, 
    { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" }, 
    { text: "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.", author: "Cato" }, 
  // Add more quotes as needed 
]; 
 
function displayQuote() { 
    const today = new Date(); 
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24); 
    const quoteIndex = dayOfYear % quotes.length; // Loop through quotes 
    const quote = quotes[quoteIndex]; 
 
    document.getElementById('quote').innerText = quote.text; 
    document.getElementById('author').innerText = `- ${quote.author}`; 
    document.getElementById('explanation').innerText = `- ${quote.explanation}`; 
} 
 
displayQuote(); 


window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
