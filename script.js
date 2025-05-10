        // Тут розмістіть ваші дані (questions, results, storyDataLekvinda і т.д.)
        // Дані для питань
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

// Результати тесту
const results = {
  lesa: {
    name: "Леквінда",
    description: `Сила:
Магія мови та вогню. Її слова пронизують серця, а закляття розпалюють полум'я спротиву. Вона може надихати, зцілювати й атакувати одним подихом.

Особливості:
- Стратегічно мислить, бачить наперед
- Її зброя — срібне перо та манускрипт, який переписує реальність
- Впливає на ворогів через емоційне маніпулювання

Чому воює:
Її народ був змушений мовчати століттями — тепер вона говорить замість усіх. Вона несе вогонь слова в саме серце брехні та пропаганди. Її мішень — токсична російська "правда".`,
    image: "images/lekvinda.jpg",
    id: "lekvinda"
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
Рашка випалила його ліси, отруїла землю ракетами, спаплюжила спокій предків. Він — останній корінь, що не дасть втоптати в землю пам'ять. Його сила — помста за природу.`,
    image: "images/gruzak.jpg",
    id: "gruzak"
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
    image: "images/venusia.jpg",
    id: "venusa"
  }
};

// Дані для історій персонажів
const storyDataLekvinda = [
  {
    id: 0,
    text: "Леквінда стоїть на краю Чорнолісу. Її срібне перо ледь помітно світиться в сутінках. Попереду — табір ворога, що готується до нападу на останнє вільне поселення...",
    choices: [
      { text: "Використати магію слова, щоб заплутати ворогів", nextScene: 1 },
      { text: "Непомітно проникнути в табір для розвідки", nextScene: 2 }
    ],
    background: "images/L0.jpg"
  },
  {
    id: 1,
    text: "Леквінда шепоче закляття, слова якого розносяться вітром. Ворожі солдати починають чути голоси своїх близьких, які благають їх повернутися додому. Дехто з них відчуває сумніви...",
    choices: [
      { text: "Посилити вплив на найслабкіших духом", nextScene: 3 },
      { text: "Створити ілюзію пожежі в їхньому таборі", nextScene: 4 }
    ],
    background: "images/L1.jpg"
  },
  {
    id: 2,
    text: "Перетворившись на ледь помітну тінь, Леквінда проникає в табір. Вона чує розмову командирів про плани нападу на світанку. В них є нова зброя, здатна вражати енергетичні щити захисників...",
    choices: [
      { text: "Викрасти документи з планами", nextScene: 5 },
      { text: "Непомітно зіпсувати їхню зброю", nextScene: 6 }
    ],
    background: "images/L3.jpg"
  },
  {
    id: 3,
    text: "Магія Леквінди проникає глибше. Кілька солдатів кидають зброю і тікають з табору. Інші стають підозрілими, починають перевіряти периметр...",
    choices: [
      { text: "Відступити, поки не помітили", nextScene: 7 },
      { text: "Заманити їх у пастку в лісі", nextScene: 8 }
    ],
    background: "images/L2.jpg"
  },
  {
    id: 4,
    text: "Полум'я ілюзії починає танцювати серед наметів. Паніка охоплює табір, солдати біжать хто куди, намагаючись врятувати себе та спорядження...",
    choices: [
      { text: "Скористатися хаосом для відступу", nextScene: 9 },
      { text: "Посилити ілюзію, щоб знищити їхні запаси", nextScene: 10 }
    ],
    background: "images/L4.jpg"
  },
  {
    id: 5,
    text: "Документи у Леквінди. Тепер вона знає про таємну зброю і плани ворога. Час тікати, але її помітив вартовий...",
    choices: [
      { text: "Заморозити його свідомість заклинанням забуття", nextScene: 11 },
      { text: "Використати вогненне закляття для відволікання", nextScene: 12 }
    ],
    background: "images/L5.jpg"
  },
  {
    id: 6,
    text: "Леквінда шепоче древні слова, торкаючись ворожої зброї. Метал починає іржавіти, механізми повільно виходять з ладу. Але процес не швидкий, а час спливає...",
    choices: [
      { text: "Прискорити процес, ризикуючи бути поміченою", nextScene: 13 },
      { text: "Залишити як є і шукати інший спосіб допомогти", nextScene: 14 }
    ],
    background: "images/L6.jpg"
  },
  {
    id: 7,
    text: "Леквінда тихо відступає в ліс. Її втручання внесло сум'яття в лави ворога, і цього може бути достатньо для успішного захисту поселення...",
    choices: [
      { text: "Повернутися до поселення з інформацією", nextScene: 15 },
      { text: "Спробувати знайти союзників у лісі", nextScene: 16 }
    ],
    background: "images/L7.jpg"
  },
  {
    id: 8,
    text: "Шепочучи закляття, Леквінда змушує дерева Чорнолісу створити оманливі стежки. Ворожі розвідники заходять все глибше, не підозрюючи, що ліс сам заманює їх у пастку...",
    choices: [
      { text: "Залишити їх блукати до світанку", nextScene: 17 },
      { text: "Використати дезорієнтованих ворогів як заручників", nextScene: 18 }
    ],
    background: "images/L8.jpg"
  },
  {
    id: 9,
    text: "Поки табір охоплений панікою, Леквінда відступає до своїх. Тепер захисники мають дорогоцінний час підготуватися до атаки...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L9.jpg"
  },
  {
    id: 10,
    text: "Полум'я ілюзії стає яскравішим, реалістичнішим. Воно охоплює намети зі спорядженням. Хоч вогонь і несправжній, паніка солдатів призводить до справжніх руйнувань...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L10.jpg"
  },
  {
    id: 11,
    text: "Очі вартового на мить затуманюються. Він кліпає, потім озирається, не розуміючи, чому стояв і дивився на порожнечу. Леквінда вже далеко...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L11.jpg"
  },
  {
    id: 12,
    text: "Полум'я спалахує в іншій частині табору. Вартовий біжить туди, а Леквінда розчиняється в тінях ночі...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L7.jpg"
  },
  {
    id: 13,
    text: "Леквінда підсилює закляття. Метал ворожої зброї тріскається і розсипається. Але раптовий звук привертає увагу — вона оточена...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L13.jpg"
  },
  {
    id: 14,
    text: "Зброя пошкоджена, але не знищена. Леквінда вирішує зосередитися на поверненні з розвідки. Інформація може бути важливішою за диверсію...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L15.jpg"
  },
  {
    id: 15,
    text: "Леквінда повертається до поселення. Її відомості допоможуть захисникам підготуватися до атаки і, можливо, врятувати багато життів...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L15.jpg"
  },
  {
    id: 16,
    text: "У глибині Чорнолісу Леквінда знаходить древніх духів, пробуджених небезпекою. Вони погоджуються допомогти захистити останній острівець свободи...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L16.jpg"
  },
  {
    id: 17,
    text: "Розвідники блукають усю ніч, переслідуючи примарні вогники. На світанку вони виявляють, що ходили по колу. Момент для атаки втрачено...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L8.jpg"
  },
  {
    id: 18,
    text: "Леквінда виводить дезорієнтованих ворогів до краю лісу, де чекають захисники поселення. Полонені розвідники стануть цінним джерелом інформації...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/L18.jpg"
  }
];




const storyDataGruzaka = [
  {
    id: 0,
    text: "Грузак стоїть серед понівечених дерев Чорнолісу. Земля під його ногами стогне від болю, нанесеного окупантами. Його величезна сокира жадає відплати...",
    choices: [
      { text: "Покликати духів лісу на допомогу", nextScene: 1 },
      { text: "Вистежити ворожий патруль", nextScene: 2 }
    ],
    background: "images/G0.jpg"
  },
  {
    id: 1,
    text: "Грузак опускається на коліно і торкається землі. Його шепіт зливається з шелестом листя. Дерева починають рухатися, коріння прокидається від сну...",
    choices: [
      { text: "Наказати лісу створити пастки для ворогів", nextScene: 3 },
      { text: "Попросити ліс попередити про наближення небезпеки", nextScene: 4 }
    ],
    background: "images/G1.jpg"
  },
  {
    id: 2,
    text: "Грузак безшумно рухається між деревами. Незабаром він натрапляє на ворожий патруль, що вирубує дерева для будівництва укріплень...",
    choices: [
      { text: "Атакувати відкрито, покладаючись на силу", nextScene: 5 },
      { text: "Влаштувати засідку і атакувати з несподіванки", nextScene: 6 }
    ],
    background: "images/G2.jpg"
  },
  {
    id: 3,
    text: "Коріння дерев прориває землю, утворюючи приховані ями. Лози та гілки сплітаються в смертельні пастки. Ліс стає смертельно небезпечним для загарбників...",
    choices: [
      { text: "Залишатися і спостерігати за результатами", nextScene: 7 },
      { text: "Рушити далі, шукаючи основні сили ворога", nextScene: 8 }
    ],
    background: "images/G3.jpg"
  },
  {
    id: 4,
    text: "Птахи стають очами Грузака, звірі — його вухами. Ліс повідомляє, що велика група загарбників рухається на схід, до джерела древньої сили...",
    choices: [
      { text: "Випередити їх і підготувати засідку", nextScene: 9 },
      { text: "Спробувати зрозуміти, що вони шукають", nextScene: 10 }
    ],
    background: "images/G4.jpg"
  },
  {
    id: 5,
    text: "З бойовим кличем Грузак виходить із тіні. Його сокира блискає на сонці, розрубуючи ворожу зброю наче папір. Земля здригається під його кроками...",
    choices: [
      { text: "Знищити всіх без пощади", nextScene: 11 },
      { text: "Залишити одного живим для допиту", nextScene: 12 }
    ],
    background: "images/G5.jpg"
  },
  {
    id: 6,
    text: "Грузак зливається з тінями дерев. Щойно патруль проходить повз нього, він атакує, рубаючи ворогів одного за одним, не даючи їм оговтатися...",
    choices: [
      { text: "Добити останніх і зникнути в лісі", nextScene: 13 },
      { text: "Захопити карти і документи ворогів", nextScene: 14 }
    ],
    background: "images/G6.jpg"
  },
  {
    id: 7,
    text: "Перші крики лунають серед дерев. Підкріплення ворогів, що прийшло на допомогу, теж потрапляє в пастки. Ліс бере свою данину за завдані рани...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G7.jpg"
  },
  {
    id: 8,
    text: "Грузак рухається далі в глибину лісу. Скоро він знаходить ворожий табір, де зібрано техніку, здатну знищити весь Чорноліс одним ударом...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G8.jpg"
  },
  {
    id: 9,
    text: "Біля древнього джерела сили Грузак розставляє пастки. Коли вороги приходять, земля поглинає їх, коріння тягне в глибину, не залишаючи шансів...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G9.jpg"
  },
  {
    id: 10,
    text: "Спостерігаючи за ворогами здалеку, Грузак розуміє їхні наміри. Вони шукають артефакт, здатний контролювати духів лісу. З таким зброєю вони стануть непереможними...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G10.jpg"
  },
  {
    id: 11,
    text: "Коли останній ворог падає, Грузак піднімає сокиру до неба. Кров загарбників живить ґрунт, повертаючи силу понівеченим деревам. Там, де була битва, проростають нові паростки...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G11.jpg"
  },
  {
    id: 12,
    text: "Останній ворог тремтить перед Груазком. Він розповідає про плани командування: знищити джерело сили лісу і на його місці побудувати базу з видобутку рідкісних металів...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G12.jpg"
  },
  {
    id: 13,
    text: "Патруль знищено. Грузак зникає серед дерев, залишаючи тіла як попередження іншим загарбникам. Ліс не пробачає тих, хто приходить з війною...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G13.jpg"
  },
  {
    id: 14,
    text: "У командира патруля Грузак знаходить карти із позначеними маршрутами та таємними базами ворога. Ця інформація допоможе захисникам Чорнолісу нанести удар у саме серце загарбників...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/G14.jpg"
  }
];



const storyDataVenusa = [
  {
    id: 0,
    text: "Венуся ширяє над мертвою зоною Чорнобиля. Її щупальця з радіаційної енергії пульсують у такт з випромінюванням землі. Вдалині вона бачить ворожий конвой...",
    choices: [
      { text: "Атакувати конвой із повітря", nextScene: 1 },
      { text: "Прослідкувати, куди прямує конвой", nextScene: 2 }
    ],
    background: "images/V0.jpg"
  },
  {
    id: 1,
    text: "Венуся пікірує на конвой. Її щупальця пронизують броню техніки наче масло. Радіаційні фантоми, створені нею, проникають крізь протигази солдатів...",
    choices: [
      { text: "Знищити всю техніку разом із екіпажами", nextScene: 3 },
      { text: "Захопити командира для допиту", nextScene: 4 }
    ],
    background: "images/V1.jpg"
  },
  {
    id: 2,
    text: "Непомітно слідуючи за конвоєм, Венуся бачить, як той зупиняється біля старої лабораторії. Солдати виносять контейнери з небезпечним вмістом...",
    choices: [
      { text: "Підслухати їхні розмови", nextScene: 5 },
      { text: "Проникнути в лабораторію", nextScene: 6 }
    ],
    background: "images/V2.jpg"
  },
  {
    id: 3,
    text: "Конвой перетворюється на кладовище техніки. Щупальця Венусі висмоктують життя з ворогів, залишаючи лише порожні оболонки. Але вибухи привертають увагу підкріплення...",
    choices: [
      { text: "Відступити до зони відчуження", nextScene: 7 },
      { text: "Підготувати засідку для підкріплення", nextScene: 8 }
    ],
    background: "images/V3.jpg"
  },
  {
    id: 4,
    text: "Командир тремтить у щупальцях Венусі. Його свідомість — відкрита книга для її темних сил. Вона бачить плани: ворог розробляє зброю на основі радіації Чорнобиля...",
    choices: [
      { text: "Стерти його пам'ять і відпустити як попередження", nextScene: 9 },
      { text: "Поглинути його сутність, щоб дізнатися більше", nextScene: 10 }
    ],
    background: "images/V4.jpg"
  },
  {
    id: 5,
    text: "Перетворившись на тінь, Венуся наближається до солдатів. Вони говорять про 'Проект Відродження' — план використати мутагенні властивості зони для створення неврозумних солдатів...",
    choices: [
      { text: "Непомітно саботувати їхнє обладнання", nextScene: 11 },
      { text: "Викрасти зразки для детальнішого вивчення", nextScene: 12 }
    ],
    background: "images/V5.jpg"
  },
  {
    id: 6,
    text: "Венуся просочується крізь стіни лабораторії. Усередині вона бачить жахливі експерименти: людей, перетворених на мутантів, подібних до неї, але позбавлених волі...",
    choices: [
      { text: "Звільнити піддослідних", nextScene: 13 },
      { text: "Знищити все обладнання і дані", nextScene: 14 }
    ],
    background: "images/V6.jpg"
  },
  {
    id: 7,
    text: "У серці зони відчуження Венуся відновлює сили. Випромінювання живить її, робить сильнішою. Скоро вона повернеться і помститься за всі експерименти над невинними...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V7.jpg"
  },
  {
    id: 8,
    text: "Коли підкріплення прибуває, Венуся вже чекає. Її радіаційні привиди атакують з усіх боків, сіючи паніку і жах. Ніхто не виживає, щоб розповісти про побачене...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V8.jpg"
  },
  {
    id: 9,
    text: "Венуся проникає в розум командира, стираючи спогади про операцію. Натомість вона залишає жахливі кошмари — попередження для всіх, хто наважиться вторгнутися в її володіння...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V9.jpg"
  },
  {
    id: 10,
    text: "Щупальця Венусі проникають глибше в свідомість командира. Всі його знання стають її знаннями. Тепер їй відомі всі таємні бази, плани, ресурси та слабкі місця ворога...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V10.jpg"
  },
  {
    id: 11,
    text: "Під покровом темряви Венуся підбирається до обладнання. Її щупальця проникають у прилади, спотворюють дані, порушують калібрування. Результати будуть непередбачуваними й небезпечними для самих експериментаторів...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V11.jpg"
  },
  {
    id: 12,
    text: "Венуся невидимою тінню забирає кілька зразків мутагенів. Вивчивши їх, вона зможе знайти спосіб протидії цій зброї або навіть використати її проти самого ворога...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V12.jpg"
  },
  {
    id: 13,
    text: "Суті піддослідних тягнуться до Венусі, відчуваючи спорідненість. Вона звільняє їх від фізичних кайданів і від контролю над розумом. Вони слідують за нею як за своєю рятівницею...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V13.jpg"
  },
  {
    id: 14,
    text: "Лабораторія перетворюється на руїни. Комп'ютери розплавлені, зразки знищені, дані стерті. Венуся залишає після себе лише попіл — символ очищення від мерзоти, яку тут творили...",
    choices: [
      { text: "Завершити історію", nextScene: -1 }
    ],
    background: "images/V14.jpg"
  }
]; 

        // А потім додайте JavaScript код, наведений вище
        // Змінні для відстеження стану тесту і гри
let selectedAnswers = {};
let currentHero = null;
let currentScene = 0;
let currentStoryData = null;

// Функція для завантаження питань
function loadQuestions() {
    const quizElement = document.getElementById('quiz');
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${q.text}</p>`;
        
        for (const [type, text] of Object.entries(q.options)) {
            const option = document.createElement('div');
            option.className = 'option';
            option.setAttribute('data-question', index);
            option.setAttribute('data-type', type);
            option.textContent = text;
            
            option.addEventListener('click', function() {
                // Зняти виділення з інших варіантів цього питання
                const allOptions = document.querySelectorAll(`.option[data-question="${index}"]`);
                allOptions.forEach(opt => opt.style.background = '#e9ecef');
                
                // Виділити вибраний варіант
                this.style.background = '#adb5bd';
                
                // Зберегти відповідь
                selectedAnswers[index] = type;
                
                // Показати кнопку якщо на всі питання відповіли
                if (Object.keys(selectedAnswers).length === questions.length) {
                    document.getElementById('submit-test').style.display = 'block';
                }
            });
            
            questionDiv.appendChild(option);
        }
        
        quizElement.appendChild(questionDiv);
    });
    
    // Обробник для кнопки "Дізнатися результат"
    document.getElementById('submit-test').addEventListener('click', calculateResult);
}

// Функція для підрахунку результатів тесту
function calculateResult() {
    const counts = { lesa: 0, grut: 0, venom: 0 };
    
    // Підрахувати кількість кожного типу відповідей
    for (const type of Object.values(selectedAnswers)) {
        counts[type]++;
    }
    
    // Знайти тип з найбільшою кількістю відповідей
    let maxType = 'lesa';
    for (const type in counts) {
        if (counts[type] > counts[maxType]) {
            maxType = type;
        }
    }
    
    // Зберегти результат
    currentHero = maxType;
    
    // Показати результат
    showResult(maxType);
}

// Функція для відображення результату
function showResult(type) {
    const resultElement = document.getElementById('result');
    const hero = results[type];
    
    resultElement.innerHTML = `
        <h2>Твій герой: ${hero.name}</h2>
        <img class="hero-image" src="${hero.image}" alt="${hero.name}">
        <div class="hero-description">
            <p>${hero.description.replace(/\n/g, '<br>')}</p>
        </div>
        <button id="start-story">Перейти до історії</button>
    `;
    
    resultElement.style.display = 'block';
    
    // Прокрутити до результату
    resultElement.scrollIntoView({ behavior: 'smooth' });
    
    // Додати обробник для кнопки історії
    document.getElementById('start-story').addEventListener('click', startStory);
}

// Функція для початку гри-історії
function startStory() {
    // Вибрати відповідні дані історії в залежності від героя
    switch(currentHero) {
        case 'lesa':
            currentStoryData = storyDataLekvinda;
            break;
        case 'grut':
            currentStoryData = storyDataGruzaka;
            break;
        case 'venom':
            currentStoryData = storyDataVenusa;
            break;
    }
    
    // Показати контейнер історії
    document.getElementById('story-container').style.display = 'block';
    
    // Завантажити першу сцену
    currentScene = 0;
    loadScene(currentScene);
    
    // Прокрутити до історії
    document.getElementById('story-container').scrollIntoView({ behavior: 'smooth' });
}

// Функція для завантаження сцени
function loadScene(sceneId) {
    const sceneData = currentStoryData.find(scene => scene.id === sceneId);
    if (!sceneData) return;
    
    const sceneElement = document.getElementById('story-scene');
    sceneElement.innerHTML = '';
    
    // Додати фонове зображення
    if (sceneData.background) {
        const background = document.createElement('img');
        background.src = sceneData.background;
        background.alt = "Сцена";
        background.className = "hero-image";
        sceneElement.appendChild(background);
    }
    
    // Додати текст сцени
    const textElement = document.createElement('div');
    textElement.className = 'story-text';
    textElement.textContent = sceneData.text;
    sceneElement.appendChild(textElement);
    
    // Додати варіанти вибору
    if (sceneData.choices && sceneData.choices.length > 0) {
        const choicesContainer = document.createElement('div');
        choicesContainer.className = 'story-choices';
        
        sceneData.choices.forEach(choice => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'story-choice';
            choiceElement.textContent = choice.text;
            
            choiceElement.addEventListener('click', function() {
                if (choice.nextScene === -1) {
                    // Кінець історії
                    endStory();
                } else {
                    // Перехід до наступної сцени
                    loadScene(choice.nextScene);
                }
            });
            
            choicesContainer.appendChild(choiceElement);
        });
        
        sceneElement.appendChild(choicesContainer);
    } else {
        // Якщо немає варіантів вибору, додати кнопку "Далі"
        const nextButton = document.createElement('button');
        nextButton.textContent = "Далі";
        nextButton.addEventListener('click', endStory);
        sceneElement.appendChild(nextButton);
    }
}

// Функція для завершення гри
function endStory() {
    const sceneElement = document.getElementById('story-scene');
    sceneElement.innerHTML = `
        <h2>Кінець історії</h2>
        <p>Дякуємо за проходження! Ви можете пройти тест ще раз, щоб отримати інший результат.</p>
        <button id="restart">Пройти тест знову</button>
    `;
    
    document.getElementById('restart').addEventListener('click', function() {
        location.reload();
    });
}

// Ініціалізація при завантаженні сторінки
window.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});
 
