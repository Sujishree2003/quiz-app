const Questions = [{
	q: "Entomology is the science that studies?",
	a: [{ text: "Birds", isCorrect: false },
	{ text: "Humans", isCorrect: false },
	{ text: "Insects", isCorrect: true },
	{ text: "Plants", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "The Indian Institute of Science is located at?",
	a: [{ text: "Bangalore", isCorrect: true },
	{ text: "Kerala", isCorrect: false },
	{ text: "Madras", isCorrect: false },
	{ text: "Delhi", isCorrect: false }
	]

},
{
	q: "Where is the Railway Staff College located?",
	a: [{ text: "Pune", isCorrect: false },
	{ text: "Allahabad", isCorrect: true },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Delhi", isCorrect: false }
	]

},
{
	q: "Which city is known as 'Electronic City of India'?",
	a: [{ text: "Bangalore", isCorrect: true },
	{ text: "Mumbai", isCorrect: false },
	{ text: "Guragon", isCorrect: false },
	{ text: "Hyderabad", isCorrect: false }
	]
},

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
