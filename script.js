const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
      if (question) {
        question.classList.toggle('show-text');
      } else if (question !== 'show-text') {
      question.classList.remove('show-text');
      }
  }) 
})





















