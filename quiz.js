  /*  // Function body
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer value
    
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    const userAnswer = userAnswerElement ? userAnswerElement.value : null; // Get user's answer
  
}
*/

function checkAnswer() {
    const correctAnswer = "4";
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = userAnswerElement ? userAnswerElement.value : null;

    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}