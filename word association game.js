const scoreDisplay = document.getElementById('score-display')

const questionDisplay = document.getElementById('question-display')	
	
	
const questions = [
      {
	  	quiz: ('value', 'estimate', 'evaluate'),
		options: ('jury','access'),
		correct: 2
	  },
	  {quiz: ('close', 'near', 'next'),
		options: ('trace','adjacent'),
		correct: 2
	  	
	  },
	 {quiz: ('foreign', 'national', 'ethnic'),
		options: ('forecast','sustainable'),
		correct: 1
	  	
	  },
	  {quiz: ('assume', 'insight', 'weather'),
		options: ('sustainable','forcast'),
		correct: 1
	  	
	  },
	  {quiz: ('fast', 'quick', 'prompt'),
		options: ('charity','rapid'),
		correct: 2
	  	
	  }

	
	]
	
	let score = 0
	
	scoreDisplay.textContent = score

  function populateQuestions() {
    questions.forEach(question => {
      const questionBox = document.createElement('div')
      questionBox.question['quiz'].classList.add('question-box')
     
    question.quiz.forEach(tip => {
        const tipText = document.createElement('p')
        tipText.textContent = tip
       questionBox.append(tipText)
        })
      questionDisplay.append(questionBox)
      
      })
  
  }
	

populateQuestions()

