// ======= Данные курсов =======
const courses = {
  python: {
    title: "Python",
    lesson: `
      <h3>Переменные и условия</h3>
      <pre>x = 5
if x > 3:
    print("x больше 3")</pre>
      <h3>Циклы</h3>
      <pre>for i in range(3):
    print(i)</pre>`,
    practiceSets: [
      // Практика 1
      [
        {text:"Что выведет код?\n\nx=5\nif x>3:\n    print('Да')",answers:["Да","Нет"],correct:0},
        {text:"Чему равно y?\n\ny=2+3",answers:["2","3","5"],correct:2},
        {text:"Какой тип у переменной x=5?",answers:["int","str","list"],correct:0},
        {text:"Что выведет print(type('hello'))?",answers:["int","str","bool"],correct:1},
        {text:"Что вернёт 2**3?",answers:["5","6","8"],correct:2},
        {text:"Что делает оператор % ?",answers:["Деление","Остаток от деления","Возведение в степень"],correct:1},
        {text:"Что выведет print(10//3)?",answers:["3","3.33","Ошибка"],correct:0},
        {text:"Что вернёт bool(0)?",answers:["True","False"],correct:1},
        {text:"Как создать список?",answers:["[]","{}","()"],correct:0},
        {text:"Что выведет print(len([1,2,3]))?",answers:["2","3","Ошибка"],correct:1},
        {text:"Вопрос 11 (не будет показан из-за лимита)",answers:["a","b"],correct:0}
      ],
      // Практика 2
      [
        {text:"Что делает цикл for i in range(5)?",answers:["0–5","0–4","1–5"],correct:1},
        {text:"Как остановить цикл?",answers:["exit","stop","break"],correct:2},
        {text:"Что делает continue?",answers:["Прерывает цикл","Пропускает итерацию","Ошибка"],correct:1},
        {text:"Что выведет print(sum([1,2,3]))?",answers:["3","6","Ошибка"],correct:1},
        {text:"Что делает метод .append()?",answers:["Добавляет элемент","Удаляет элемент","Изменяет элемент"],correct:0}
      ]
    ]
  },

  js: {
    title: "JavaScript",
    lesson: `
      <h3>Переменные</h3>
      <pre>let x = 5;
if (x > 3) {
  console.log("x больше 3");
}</pre>
      <h3>Циклы</h3>
      <pre>for (let i=0; i<3; i++) {
  console.log(i);
}</pre>`,
    practiceSets: [
      // Практика 1
      [
        {text:"Что выведет?\n\nlet x=5;\nif(x>3){console.log('Да');}",answers:["Да","Нет"],correct:0},
        {text:"let y=2+3; чему равно y?",answers:["2","3","5"],correct:2},
        {text:"typeof(42) вернёт...",answers:["'string'","'number'","'object'"],correct:1},
        {text:"Что выведет console.log('JS'.length)?",answers:["1","2","3"],correct:1},
        {text:"Что делает оператор === ?",answers:["Сравнивает по значению и типу","Только по значению","Только по типу"],correct:0},
        {text:"Что выведет console.log(2**3)?",answers:["5","6","8"],correct:2},
        {text:"Что вернёт Boolean(0)?",answers:["true","false"],correct:1},
        {text:"Как объявить функцию?",answers:["func my(){}","function my(){}","def my(){}"],correct:1},
        {text:"Что выведет console.log(typeof [])?",answers:["'array'","'object'","'list'"],correct:1},
        {text:"Что выведет console.log(10%3)?",answers:["1","3","Ошибка"],correct:0}
      ],
      // Практика 2
      [
        {text:"Цикл for(let i=0;i<3;i++){} выполнится...",answers:["1 раз","3 раза","Ошибка"],correct:1},
        {text:"Что делает break?",answers:["Прерывает цикл","Пропускает итерацию","Ошибка"],correct:0},
        {text:"Что делает continue?",answers:["Прерывает цикл","Пропускает итерацию","Ошибка"],correct:1},
        {text:"Как создать объект?",answers:["[]","{}","()"],correct:1},
        {text:"Что выведет console.log('5'+5)?",answers:["10","55","Ошибка"],correct:1}
      ]
    ]
  },

  cpp: {
    title: "C++",
    lesson: `
      <h3>Переменные</h3>
      <pre>#include &lt;iostream&gt;
using namespace std;

int main() {
  int x = 5;
  if (x > 3) {
    cout &lt;&lt; "x больше 3";
  }
}</pre>
      <h3>Циклы</h3>
      <pre>for (int i=0; i<3; i++) {
  cout &lt;&lt; i;
}</pre>`,
    practiceSets: [
      // Практика 1
      [
        {text:"Что выведет?\n\nint x=5; if(x>3){cout<<\"Да\";}",answers:["Да","Нет"],correct:0},
        {text:"int y=2+3; чему равно y?",answers:["2","3","5"],correct:2},
        {text:"Какой тип у переменной int x=5?",answers:["int","float","string"],correct:0},
        {text:"Что делает оператор % ?",answers:["Деление","Остаток от деления","Возведение в степень"],correct:1},
        {text:"Что выведет cout<<10/3; ?",answers:["3","3.33","Ошибка"],correct:0},
        {text:"Какой заголовок нужен для ввода/вывода?",answers:["#include <math>","#include <iostream>","#include <stdio.h>"],correct:1},
        {text:"Что означает using namespace std?",answers:["Подключение стандартной библиотеки","Создание функции","Комментарий"],correct:0},
        {text:"Что делает return 0; ?",answers:["Завершает программу","Начинает цикл","Ошибка"],correct:0},
        {text:"Как объявить массив из 5 int?",answers:["int a(5);","int a[5];","array<int> a(5);"],correct:1},
        {text:"Что выведет cout<<true; ?",answers:["true","1","Ошибка"],correct:1}
      ],
      // Практика 2
      [
        {text:"Цикл for(int i=0;i<3;i++){} выполнится...",answers:["1 раз","3 раза","Ошибка"],correct:1},
        {text:"Как прервать цикл?",answers:["exit","stop","break"],correct:2},
        {text:"Что делает continue?",answers:["Прерывает цикл","Пропускает итерацию","Ошибка"],correct:1},
        {text:"Как создать функцию?",answers:["def my(){}","function my(){}","int my(){}"],correct:2},
        {text:"Что выведет sizeof(int)? (обычно)",answers:["2","4","8"],correct:1}
      ]
    ]
  }
};

// ======= Состояние =======
let currentCourse = null;
let state = {practiceIndex:0, questionIndex:0, lives:3, money:0, total:0};

// ======= LocalStorage =======
const SAVE_KEY = "courseProgress";

function saveProgress(){
  const data = { course: currentCourse, state };
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}
function loadProgress(){
  const data = localStorage.getItem(SAVE_KEY);
  if(!data) return false;
  const parsed = JSON.parse(data);
  currentCourse = parsed.course;
  state = parsed.state;
  return true;
}

// ======= Навигация =======
function show(screen){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(screen).classList.add("active");
}
function goLanding(reset=false){
  if(reset){resetAll();}
  show("landingScreen");
}
function goToCourses(){
  show("coursesScreen");
}
function startLesson(course){
  currentCourse=course;
  state={practiceIndex:0, questionIndex:0, lives:3, money:0, total:10};
  document.getElementById("lessonTitle").textContent="Урок: "+courses[course].title;
  document.getElementById("lessonContent").innerHTML=courses[course].lesson;
  saveProgress();
  show("lessonScreen");
}
function startPractice(){
  document.getElementById("practiceTitle").textContent=
    "Практика "+(state.practiceIndex+1)+": "+courses[currentCourse].title;
  show("practiceScreen");
  render();
}

// ======= Рендер =======
function render(){
  saveProgress();
  const currentSet = courses[currentCourse].practiceSets[state.practiceIndex].slice(0, 10);
  const percent=Math.round((state.questionIndex/currentSet.length)*100);
  document.getElementById("progress").style.width=percent+"%";
  document.getElementById("progressText").textContent=state.questionIndex;
  document.getElementById("totalText").textContent=currentSet.length;
  document.getElementById("hearts").textContent=state.lives>0?"❤️".repeat(state.lives):"💀";
  document.getElementById("livesCount").textContent=state.lives;
  document.getElementById("moneyCount").textContent=state.money;
  const area=document.getElementById("questionArea");

  if(state.questionIndex>=currentSet.length){
    state.practiceIndex++;
    state.questionIndex=0;
    if(state.practiceIndex >= courses[currentCourse].practiceSets.length){
      area.innerHTML="<h3>🎉 Курс завершён!</h3>";
      return;
    } else {
      startPractice();
      return;
    }
  }

  const q=currentSet[state.questionIndex];
  let html=`<div class='question'><pre>${q.text}</pre></div><div class='answers'>`;
  q.answers.forEach((a,i)=>{html+=`<button onclick="checkAnswer(${i})">${a}</button>`});
  html+="</div>";
  area.innerHTML=html;
}

// ======= Проверка =======
function checkAnswer(i){
  const currentSet = courses[currentCourse].practiceSets[state.practiceIndex].slice(0, 10);
  const q=currentSet[state.questionIndex];
  if(i===q.correct){
    state.money+=50;
    state.questionIndex++;
  } else {
    state.lives=Math.max(0,state.lives-1);
    state.money=Math.max(0,state.money-10);
    if(state.lives<=0){
      alert("😢 Вы потеряли все жизни! Возвращаем на главную страницу.");
      goLanding(true);
      return;
    }
  }
  render();
}

// ======= Купить жизнь =======
document.getElementById("buyLifeBtn").onclick=()=>{
  if(state.money>=100){state.money-=100;state.lives++;render();}
  else alert("Недостаточно денег!");
};

// ======= Сброс =======
function resetAll(){
  state={practiceIndex:0, questionIndex:0, lives:3, money:0, total:0};
  currentCourse=null;
  localStorage.removeItem(SAVE_KEY);
}

// ======= При загрузке =======
window.onload=()=>{
  if(loadProgress()){
    if(state.practiceIndex < courses[currentCourse].practiceSets.length){
      startPractice();
    } else {
      goLanding();
    }
  }
};





