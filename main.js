const courseButtons = document.querySelectorAll(".course-btn");
const exerciseSection = document.getElementById("exercise");
const finishSection = document.getElementById("finish");
const courseSelect = document.getElementById("courseSelect");

const taskTitle = document.getElementById("taskTitle");
const taskText = document.getElementById("taskText");
const feedback = document.getElementById("feedback");
const userAnswer = document.getElementById("userAnswer");
const checkBtn = document.getElementById("checkBtn");
const backBtn = document.getElementById("backBtn");
const difficulty = document.getElementById("difficulty");

let currentCourse = "";
let currentTask = 0;

// 🧠 База данных заданий с уровнем сложности
const generateTasks = (levelName, baseWords) => {
  const tasks = [];
  for (let i = 0; i < 100; i++) {
    const diff = Math.ceil((i + 1) / 20); // каждые 20 заданий — новый уровень сложности (1–5)
    const word = baseWords[i % baseWords.length];
    tasks.push({
      question: `${levelName}: Переведи слово "${word.de}" (${i + 1})`,
      answer: word.ru,
      difficulty: diff
    });
  }
  return tasks;
};

// Примерные слова (реальные немецкие уровней A1–B2)
const vocab = {
  A1: [
    { de: "Hallo", ru: "привет" },
    { de: "Haus", ru: "дом" },
    { de: "Hund", ru: "собака" },
    { de: "Katze", ru: "кошка" },
    { de: "Danke", ru: "спасибо" }
  ],
  A2: [
    { de: "Frühstück", ru: "завтрак" },
    { de: "Arbeiten", ru: "работать" },
    { de: "Freundschaft", ru: "дружба" },
    { de: "Wetter", ru: "погода" },
    { de: "Reise", ru: "путешествие" }
  ],
  B1: [
    { de: "Entscheidung", ru: "решение" },
    { de: "Verantwortung", ru: "ответственность" },
    { de: "Gesundheit", ru: "здоровье" },
    { de: "Umwelt", ru: "окружающая среда" },
    { de: "Zukunft", ru: "будущее" }
  ],
  B2: [
    { de: "Bewusstsein", ru: "сознание" },
    { de: "Gleichberechtigung", ru: "равенство" },
    { de: "Nachhaltigkeit", ru: "устойчивость" },
    { de: "Globalisierung", ru: "глобализация" },
    { de: "Freiheit", ru: "свобода" }
  ]
};

// Собираем все курсы
const courses = {
  A1: generateTasks("A1", vocab.A1),
  A2: generateTasks("A2", vocab.A2),
  B1: generateTasks("B1", vocab.B1),
  B2: generateTasks("B2", vocab.B2)
};

// 🎯 Логика
courseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCourse = btn.dataset.level;
    currentTask = 0;
    courseSelect.classList.add("hidden");
    exerciseSection.classList.remove("hidden");
    showTask();
  });
});

function showTask() {
  const task = courses[currentCourse][currentTask];
  taskTitle.textContent = `Курс ${currentCourse} — Задание ${currentTask + 1}/100`;
  taskText.textContent = task.question;
  difficulty.textContent = `Сложность: ${task.difficulty}/5`;
  userAnswer.value = "";
  feedback.textContent = "";
}

checkBtn.addEventListener("click", () => {
  const task = courses[currentCourse][currentTask];
  const userInput = userAnswer.value.trim().toLowerCase();

  if (userInput === task.answer) {
    feedback.textContent = "✅ Верно!";
    currentTask++;

    if (currentTask < 100) {
      setTimeout(showTask, 800);
    } else {
      exerciseSection.classList.add("hidden");
      finishSection.classList.remove("hidden");
    }
  } else {
    feedback.textContent = "❌ Ошибка. Подумай ещё.";
  }
});

backBtn.addEventListener("click", () => {
  finishSection.classList.add("hidden");
  courseSelect.classList.remove("hidden");
});

