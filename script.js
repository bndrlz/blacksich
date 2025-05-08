const questions = [
  {
    text: "1. Що для тебе головне в боротьбі?",
    options: {
      lesa: "Слово сильніше за меч",
      grut: "Сила природи — мій друг",
      venom: "Темрява — мій союзник"
    }
  },
  {
    text: "2. Як ти вирішуєш конфлікти?",
    options: {
      lesa: "Сатирою та розумом",
      grut: "Прямо й без розмов",
      venom: "Через страх і загадковість"
    }
  },
  {
    text: "3. Яка зброя тобі ближча?",
    options: {
      lesa: "Слово, яке коле точніше за меч",
      grut: "Сокира з кореня дуба, змочена дощем предків",
      venom: "Живий симбіот, що сам стає твоєю зброєю"
    }
  },
  {
    text: "4. Який вибір зробиш у битві?",
    options: {
      lesa: "Співати пісню, яка надихає інших",
      grut: "Взяти удар на себе, щоб врятувати слабших",
      venom: "Прийняти темряву, щоб перемогти"
    }
  },
  {
    text: "5. Коли все втрачено — що ти робиш?",
    options: {
      lesa: "Стаєш голосом, навіть якщо лишився один",
      grut: "Стаєш корінням, навіть якщо світ валиться",
      venom: "Стаєш тінню, навіть якщо світло згасло"
    }
  }
];

const results = {
  lesa: {
    name: "Леквінда",
    description: `Сила:
Магія мови та вогню. Її слова пронизують серця, а закляття розпалюють полум’я спротиву. Вона може надихати, зцілювати й атакувати одним подихом.

Особливості:
- Стратегічно мислить, бачить наперед
- Її зброя — срібне перо та манускрипт, який переписує реальність
- Впливає на ворогів через емоційне маніпулювання

Чому воює:
Її народ був змушений мовчати століттями — тепер вона говорить замість усіх. Вона несе вогонь слова в саме серце брехні та пропаганди. Її мішень — токсична російська "правда".`,
    image: "images/lekvinda.jpg"
  },
  grut: {
    name: "Грузак",
    description: `Сила:
Контроль над лісами, буревіями, землею. Захисник природи й давніх традицій. Його тіло — як броня, його гнів — як стихія.

Особливості:
- Має гігантську сокиру, створену з уламків Чорнолісу
- Лікує природу, повертає землю до життя
- Мовчазний, але влучний і потужний

Чому воює:
Рашка випалила його ліси, отруїла землю ракетами, спаплюжила спокій предків. Він — останній корінь, що не дасть втоптати в землю пам’ять. Його сила — помста за природу.`,
    image: "images/gruzak.jpg"
  },
  venom: {
    name: "Венуся",
    description: `Сила:
Темна симбіотична енергія. Він поглинає атаки, змінює форму, створює фантомів загиблих. Радіаційні щупальця й фантомні клони — його головна зброя.

Особливості:
- Живе між світом живих і мертвих
- Поглинає біль інших, передаючи його ворогу
- Летючий, майже неуразливий

Чому воює:
Його тіло — наслідок катастрофи, до якої московія причетна. Вони вкрали життя, залишили пустку — він повертає біль, множачи його в десятки разів. Його війна — це тінь на їхній совісті.`,
    image: "images/venusia.jpg"
  }
};

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const characterImage = document.getElementById("character-image");
const characterDescription = document.getElementById("character-description");

function showQuestion(index) {
  const q = questions[index];
  let html = `<div class="question"><p>${q.text}</p>`;
  for (let key in q.options) {
    html += `<label><input type="radio" name="q" value="${key}"> ${q.options[key]}</label><br>`;
  }
  html += `</div>`;
  questionContainer.innerHTML = html;
  nextButton.textContent = (index === questions.length - 1) ? "Результат" : "Відповісти";
}

function showResult() {
  const count = { lesa: 0, grut: 0, venom: 0 };
  answers.forEach(ans => count[ans]++);
  const winner = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  const res = results[winner];

  characterImage.innerHTML = `<img src="${res.image}" alt="${res.name}">`;
  characterDescription.innerHTML = `<h3>${res.name}</h3><p>${res.description.replace(/\n/g, "<br>")}</p>`;

  showStory(winner);
  startStory(res.name);
}

nextButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="q"]:checked');
  if (!selected) {
    alert("Оберіть відповідь!");
    return;
  }

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    showResult();
  }
});

function showStory(characterKey) {
  const storyBlock = document.getElementById("story-block");
  const storyText = document.getElementById("story-text");
  storyBlock.classList.remove("hidden");

  if (characterKey === "lesa") {
    storyText.innerText = "Леквінда починає шепотіти закляття, щоб відвернути ворога. Її магія мови, що поєднується з вогнем, розпалює вогнище опору, яке палить серця тих, хто йде проти неї...";
  } else if (characterKey === "grut") {
    storyText.innerText = "Грузак встає перед ворогом, готовий захистити ліс. Його руки зцілюють землю, він огортає себе сили природи, готовий протистояти руйнівним стихіям ворогів...";
  } else if (characterKey === "venom") {
    storyText.innerText = "Венуся поглинає темряву, його тіло змінюється, він переходить у інший стан, готовий до боротьби з усіма, хто загрожує його існуванню...";
  }
}

function startStory(heroName) {
  document.getElementById("story-text").innerHTML += `<br><br>${heroName} починає свою подорож. Її шлях — це боротьба за правду, природу або темряву...`;
  showChoices(heroName);
}

function showChoices(heroName) {
  let choicesHtml = '';
  if (heroName === 'Леквінда') {
    choicesHtml =
      `<button class="choice-button" onclick="makeChoice('Леквінда', 1)">Використати отруйний туман</button>
       <button class="choice-button" onclick="makeChoice('Леквінда', 2)">Закликати духів</button>`;
  } else if (heroName === 'Грузак') {
    choicesHtml =
      `<button class="choice-button" onclick="makeChoice('Грузак', 1)">Робот-охоронець</button>
       <button class="choice-button" onclick="makeChoice('Грузак', 2)">Мінні поля</button>`;
  } else if (heroName === 'Венуся') {
    choicesHtml =
      `<button class="choice-button" onclick="makeChoice('Венуся', 1)">Мир</button>
       <button class="choice-button" onclick="makeChoice('Венуся', 2)">Повстання</button>`;
  }
  document.getElementById("choices").innerHTML = choicesHtml;
}
function makeChoice(hero, choice) {
  const storyText = document.getElementById("story-text");
  
  if (hero === 'Леквінда') {
    if (choice === 1) {
      storyText.innerHTML += "<br>Леквінда вирішила використати отруйний туман...";
      showNextChoices('Леквінда');
    } else {
      storyText.innerHTML += "<br>Леквінда закликає духів...";
      showNextChoices('Леквінда');
    }
  } else if (hero === 'Грузак') {
    if (choice === 1) {
      storyText.innerHTML += "<br>Грузак активує робота-охоронця...";
      showNextChoices('Грузак');
    } else {
      storyText.innerHTML += "<br>Грузак вирішує знищити мінні поля...";
      showNextChoices('Грузак');
    }
  } else if (hero === 'Венуся') {
    if (choice === 1) {
      storyText.innerHTML += "<br>Венуся обирає шлях миру, хоча це здається божевіллям...";
      showNextChoices('Венуся');
    } else {
      storyText.innerHTML += "<br>Венуся піднімає повстання з тіней — світ здригається...";
      showNextChoices('Венуся');
    }
  }
}

function saveName() {
  const userName = document.getElementById("user-name").value.trim();
  if (userName) {
    localStorage.setItem("userName", userName);
    showGreeting(userName);
  }
}

function showGreeting(name) {
  document.getElementById("greeting").textContent = `Привіт, ${name}!`;
}

window.onload = function () {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    showGreeting(storedName);
  }
  showQuestion(currentQuestion);
};




// Перемикач персонажа
let currentScene = 0;
let currentStory = storyDataLekvinda; // За замовчуванням — Леквінда

// Функція для вибору персонажа
function selectCharacter(character) {
  if (character === "lekvinda") {
    currentStory = storyDataLekvinda;
  } else if (character === "venusa") {
    currentStory = storyDataVenusa;
  } else if (character === "gruzak") {
    currentStory = storyDataGruzaka;
  }
  currentScene = 0;
  renderScene();
}

// Функція для рендерингу сцени
function renderScene() {
  const storyText = document.getElementById("story-text");
  const choiceButtons = document.getElementById("choice-buttons");

  if (!storyText || !choiceButtons) return;

  const scene = currentStory[currentScene];
  storyText.textContent = scene.text;

  choiceButtons.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      currentScene = choice.nextScene;
      renderScene();
    };
    choiceButtons.appendChild(btn);
  });
}

// Тест (псевдо-тест, замініть своїм)
function finishTest(result) {
  let character = "";

  if (result === "high") {
    character = "lekvinda";
  } else if (result === "medium") {
    character = "venusa";
  } else {
    character = "gruzak";
  }

  selectCharacter(character); // Автоматично вибирає персонажа на основі результату тесту
}

// Запуск тесту
document.getElementById("test-button").addEventListener("click", () => {
  const testResult = "high"; // Це може бути результат тесту, наприклад, залежно від балів
  finishTest(testResult);  // Автоматичний вибір персонажа та старт історії
});

// Виклик вибору персонажа перед початком гри
document.getElementById("lekvinda-btn").addEventListener("click", () => selectCharacter("lekvinda"));
document.getElementById("venusa-btn").addEventListener("click", () => selectCharacter("venusa"));
document.getElementById("gruzak-btn").addEventListener("click", () => selectCharacter("gruzak"));

// Рендерим сцену
document.addEventListener("DOMContentLoaded", () => {
  renderScene();
});

