const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  // Add more questions up to 20
  // Example:
  {
    question: "HTML stands for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    answer: "Hyper Text Markup Language"
  }
  // ... Add 17 more
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentIndex];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn.innerText);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.innerText = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = Your Score: ${score}/${questions.length};
}

nextBtn.onclick = () => {
  if (currentIndex < questions.length) {
    showQuestion();
  }
};

showQuestion();

const questions = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Central Programming Unit", "Computer Processing Unit", "Central Power Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C", "Java"],
    answer: "HTML"
  },
  {
    question: "Which of the following is not an operating system?",
    options: ["Windows", "Linux", "Oracle", "MacOS"],
    answer: "Oracle"
  },
  {
    question: "Which data structure uses FIFO method?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "SELECT"
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Read And Modify", "None of the above"],
    answer: "Random Access Memory"
  },
  {
    question: "Which is not a programming language?",
    options: ["Java", "Python", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "Which protocol is used for sending emails?",
    options: ["HTTP", "SMTP", "FTP", "TCP"],
    answer: "SMTP"
  },
  {
    question: "Which of the following is a primary key feature?",
    options: ["Unique and Not Null", "Only Unique", "Only Not Null", "Can be duplicate"],
    answer: "Unique and Not Null"
  },
  {
    question: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Unique Resource Locator", "Uniform Read Link", "None of the above"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which gate gives output only when both inputs are 1?",
    options: ["OR", "AND", "XOR", "NOT"],
    answer: "AND"
  },
  {
    question: "In C language, which symbol is used to end a statement?",
    options: ["#", ".", ";", ":"],
    answer: ";"
  },
  {
    question: "Which layer of OSI handles routing?",
    options: ["Network", "Transport", "Data Link", "Session"],
    answer: "Network"
  },
  {
    question: "What is the full form of DBMS?",
    options: ["Database Management System", "Data Block Memory Storage", "Digital Basic Memory System", "None"],
    answer: "Database Management System"
  },
  {
    question: "Which function is used to print in Python?",
    options: ["print()", "echo()", "printf()", "println()"],
    answer: "print()"
  },
  {
    question: "Which is the fastest memory in a computer?",
    options: ["Cache", "RAM", "Hard Disk", "ROM"],
    answer: "Cache"
  },
  {
    question: "Which tag is used to make text bold in HTML?",
    options: ["<b>", "<i>", "<u>", "<strong>"],
    answer: "<b>"
  },
  {
    question: "Which of the following is a DBMS software?",
    options: ["MySQL", "Linux", "Ubuntu", "Chrome"],
    answer: "MySQL"
  },
  {
    question: "Which keyword is used for loops in C?",
    options: ["repeat", "while", "loop", "iterate"],
    answer: "while"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentIndex];
  questionEl.innerText = Q${currentIndex + 1}. ${q.question};
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn.innerText);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.innerText = "🎉 Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = ✅ Your Score: ${score} out of ${questions.length};
}

nextBtn.onclick = () => {
  if (currentIndex < questions.length) {
    showQuestion();
  }
};

showQuestion();