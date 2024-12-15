function solve() {
  const quizzContainer = document.getElementById('quizzie');
  const answerMsg = document.querySelector('.results-inner h1');

  const answers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let correctAnswersCount = 0;

  quizzContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
      const curSection = e.target.closest('section');

      curSection.style.display = 'none';
      curSection.nextElementSibling.style.display = 'block';

      const answerValue = e.target.textContent;

      for (const curAnswer of answers) {
        if (answerValue === curAnswer) {
          correctAnswersCount++;
        }
      }

      if (correctAnswersCount !== answers.length) {
        answerMsg.textContent = `You have ${correctAnswersCount} right answers`;
      } else {
        answerMsg.textContent = 'You are recognized as top JavaScript fan!';
      }
    }
  });
}