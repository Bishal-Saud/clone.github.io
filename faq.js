const ansBox = document.querySelector('.answer-box');
const questionBox = document.querySelectorAll('.question-box')
const hiddenBtn = document.getElementById('off')
const showBtn = document.getElementById('on')



function toggleBox(button1, button2) {
    button1.classList.toggle('hidden');
    button2.classList.toggle('hidden');
  }
  
  // Get all the sets of boxes
  const boxSets = document.querySelectorAll('.sm-box');
  
  // Loop through each set of boxes and add the event listener
  boxSets.forEach((box) => {
    const showBtn = box.querySelector('.on');
    const hiddenBtn = box.querySelector('.off');
    const answerBox = box.querySelector('.answer-box');

    
  
    showBtn.addEventListener('click', function () {
      if (answerBox.classList.contains('hidden')) {
        toggleBox(showBtn, hiddenBtn);
        answerBox.classList.remove('hidden');
        answerBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    hiddenBtn.addEventListener('click', function () {
      if (!answerBox.classList.contains('hidden')) {
        toggleBox(hiddenBtn, showBtn);
        answerBox.classList.add('hidden');
      }
    });
  });
  
 const dropBtn = document.getElementById('drop-btn')
 const drop = document.getElementById('drop')
 dropBtn.addEventListener('click',function(){
drop.classList.toggle('hidden')
  })
  
//   This code is copied by ChatGPT 