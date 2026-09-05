const topicExplanations = {
  ps_pc: {
    summary: "Present Simple описывает привычки, факты и регулярные действия. Present Continuous показывает то, что происходит сейчас или временно.",
    rules: ["Present Simple: I/you/we/they work, he/she/it works. В третьем лице добавляется -s или -es.", "Present Continuous: am/is/are + V-ing; отрицание строится через not, вопрос - перестановкой am/is/are перед подлежащим.", "Simple используется для привычек, фактов, расписаний и постоянных состояний.", "Continuous используется для действия сейчас, временной ситуации или уже меняющегося процесса.", "Маркеры: always, usually, every day для Simple; now, today, at the moment для Continuous."],
    examples: ["I usually walk to work. - Я обычно хожу на работу пешком.", "She is studying now. - Она сейчас занимается.", "Do you work on Mondays? - Ты работаешь по понедельникам?"],
  },
  will_going_to: {
    summary: "Will используется для спонтанных решений, обещаний и прогнозов. Be going to говорит о заранее принятом плане или очевидном будущем результате.",
    rules: ["Will + начальная форма: will go, will help; отрицание - will not (won't).", "Be going to: am/is/are going to + начальная форма; be меняется по лицам.", "Will подходит для решения, принятого в момент речи, обещания, предложения помощи и прогноза-мнения.", "Going to показывает заранее принятое намерение или прогноз по видимым признакам.", "После if, when, before и until для будущего обычно используется Present Simple, а не will."],
    examples: ["The phone is ringing. I will answer it. - Телефон звонит. Я отвечу.", "We are going to move next year. - Мы собираемся переехать в следующем году.", "Look at those clouds! It is going to rain. - Посмотри на облака! Сейчас пойдет дождь."],
  },
  pastc_pasts: {
    summary: "Past Simple обозначает завершенное действие в прошлом. Past Continuous описывает процесс, который шел в определенный момент прошлого.",
    rules: ["Past Simple: правильные глаголы получают -ed, неправильные используют вторую форму; вопрос и отрицание - did + начальная форма.", "Past Continuous: was/were + V-ing; was используется с I/he/she/it, were - с you/we/they.", "Past Simple обозначает законченное действие с результатом или временем в прошлом.", "Past Continuous показывает процесс в конкретный момент или временный фон для другого события.", "Когда короткое событие прерывает процесс, процесс ставится в Continuous, а событие - в Simple."],
    examples: ["I visited London last year. - Я посетил Лондон в прошлом году.", "I was cooking when he called. - Я готовил, когда он позвонил.", "Did you see Anna yesterday? - Ты видел Анну вчера?"],
  },
  modal_verbs: {
    summary: "Модальные глаголы выражают способность, разрешение, обязанность, совет и необходимость.",
    rules: ["После can, could, must, should используется начальная форма глагола без to: can swim, must leave.", "Can означает способность или разрешение, could - возможность в прошлом или вежливую просьбу.", "Must и have to выражают обязанность; must чаще идет от говорящего, have to - от правил или обстоятельств.", "Should дает совет, а be able to заменяет can там, где нужно другое время.", "Вопросы строятся без do: Can you help? Отрицание: cannot/can't, mustn't, shouldn't."],
    examples: ["You must wear a seat belt. - Ты должен пристегнуть ремень.", "Could you open the window? - Не могли бы вы открыть окно?", "I have to get up early tomorrow. - Мне нужно рано встать завтра."],
  },
  comp_super: {
    summary: "Сравнительная степень сопоставляет два объекта, а превосходная показывает самый сильный признак среди трех и более объектов.",
    rules: ["Короткие прилагательные: -er/-est (small, smaller, the smallest); конечная y часто меняется на i: happy, happier.", "Длинные прилагательные используют more/the most: more useful, the most useful.", "Сравнительная степень обычно требует than, а превосходная - the.", "Исключения: good-better-the best, bad-worse-the worst, far-farther/further.", "Сравнивать можно с as...as: This book is as interesting as that one."],
    examples: ["My car is faster than yours. - Моя машина быстрее твоей.", "This is the most difficult question. - Это самый сложный вопрос.", "Tom is as tall as Mike. - Том такого же роста, как Майк."],
  },
  articles: {
    summary: "Артикли показывают, говорим ли мы о предмете вообще, об одном из предметов или о конкретном известном предмете.",
    rules: ["A/an означает один предмет или представителя класса и используется с исчисляемым существительным в единственном числе.", "Выбор a/an зависит от звука: a university, но an hour.", "The используется, когда предмет уже упоминался, понятен из ситуации или является единственным: the sun.", "С географическими названиями правило нужно запоминать: the UK, the Alps, но France, Mount Everest.", "Нулевой артикль употребляется с понятиями в общем смысле: Books are useful. Water is important."],
    examples: ["I saw a dog. The dog was friendly. - Я увидел собаку. Собака была дружелюбной.", "She is an engineer. - Она инженер.", "The moon is bright tonight. - Сегодня луна яркая."],
  },
  countable_uncountable: {
    summary: "Исчисляемые существительные можно посчитать и поставить во множественное число. Неисчисляемые обозначают вещество, абстракцию или массу.",
    rules: ["Исчисляемые имеют единственное и множественное число: one book, two books; с ними возможны a/an и many.", "Неисчисляемые обычно не имеют множественного числа и не употребляются с a/an: advice, information, furniture.", "Much используется преимущественно в вопросах и отрицаниях, many - с исчисляемыми во множественном числе.", "Few/little означают мало, но достаточно мало; a few/a little - немного, но достаточно.", "Для единицы измерения используйте a piece of advice, a piece of information, a bottle of water."],
    examples: ["I have three apples. - У меня есть три яблока.", "We need some information. - Нам нужна информация.", "There is a little milk left. - Осталось немного молока."],
  },
  ing_ed_adjectives: {
    summary: "Прилагательные на -ing описывают то, что вызывает чувство. Прилагательные на -ed описывают чувство человека или его состояние.",
    rules: ["Окончание -ing описывает человека, предмет или ситуацию, которые вызывают эмоцию.", "Окончание -ed описывает человека, который испытывает эмоцию.", "Один объект может быть interesting, а человек - interested.", "Не говорите I am interesting, если хотите сказать «мне интересно»: это значит «я интересный человек».", "Окончание выбирается по смыслу, а не по времени действия."],
    examples: ["The lesson is confusing. - Урок запутанный.", "The students are confused. - Студенты запутались.", "I am excited about the trip. - Я рад предстоящей поездке."],
  },
  reflexive_pronouns: {
    summary: "Возвратные местоимения показывают, что действие направлено на самого деятеля, а также используются для усиления смысла.",
    rules: ["Формы: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.", "Местоимение показывает, что объект действия совпадает с подлежащим: She introduced herself.", "После предлогов используются те же формы: by myself означает «самостоятельно, один». ", "Для усиления местоимение можно поставить после подлежащего или в конце предложения.", "Не используйте reflexive pronoun вместо обычного object pronoun без причины: Give it to me, не Give it to myself."],
    examples: ["He cut himself while cooking. - Он порезался во время готовки.", "We built the table ourselves. - Мы сами сделали этот стол.", "She lives by herself. - Она живет одна."],
  },
  adj_prepositions: {
    summary: "После разных прилагательных используются определенные предлоги. Такие сочетания лучше запоминать как устойчивые конструкции.",
    rules: ["Запоминайте прилагательное вместе с предлогом: good at, interested in, afraid of.", "Другие частые сочетания: proud of, responsible for, similar to, famous for.", "После предлога ставится существительное, местоимение или V-ing: interested in music/in learning.", "Не переводите предлог буквально с русского: angry with a person, но angry about a situation.", "В вопросах и отрицаниях предлог остается частью устойчивого сочетания."],
    examples: ["She is good at explaining grammar. - Она хорошо объясняет грамматику.", "I am interested in modern art. - Я интересуюсь современным искусством.", "Are you afraid of spiders? - Ты боишься пауков?"],
  },
  verb_prepositions: {
    summary: "Многие глаголы образуют устойчивые сочетания с конкретными предлогами, и выбор предлога меняет правильность выражения.",
    rules: ["Запоминайте глагол с предлогом: listen to, depend on, belong to, agree with.", "Частые сочетания: look at, wait for, think about, pay for, talk about.", "После предлога перед действием обычно используется V-ing: think about moving.", "Некоторые глаголы меняют значение с предлогом: look at - смотреть на, look for - искать, look after - заботиться.", "Вопрос может заканчиваться предлогом: Who are you talking to?"],
    examples: ["This decision depends on you. - Это решение зависит от тебя.", "I am looking for my keys. - Я ищу свои ключи.", "She apologized for being late. - Она извинилась за опоздание."],
  },
  phrasal_verbs: {
    summary: "Фразовые глаголы состоят из глагола и частицы. Вместе они часто получают новое значение, которое нельзя буквально перевести по отдельности.",
    rules: ["Фразовый глагол состоит из глагола и частицы: turn on, take off, look up.", "Значение часто переносное: give up - сдаться/бросить, find out - выяснить.", "Разделяемые глаголы позволяют поставить объект между частями: turn the light off.", "С местоимением разделяемая конструкция обязательна: turn it off, не turn off it.", "Неразделяемые глаголы нужно учить целиком: look after a child, run into a friend."],
    examples: ["Please turn off the light. - Пожалуйста, выключи свет.", "I found out the truth yesterday. - Я узнал правду вчера.", "She looks after her younger brother. - Она заботится о младшем брате."],
  },
  idioms: {
    summary: "Идиомы - устойчивые выражения с переносным значением. Их смысл нужно понимать целиком, а не переводить слово за словом.",
    rules: ["Идиому нужно запоминать как готовую фразу вместе с артиклями и предлогами.", "Break the ice означает «разрядить обстановку», а не буквально «сломать лед».", "Once in a blue moon означает «очень редко».", "Контекст помогает понять, положительное или отрицательное значение имеет идиома.", "Не меняйте порядок слов и не переводите каждое слово отдельно."],
    examples: ["He told a joke to break the ice. - Он пошутил, чтобы разрядить обстановку.", "I eat fast food once in a blue moon. - Я очень редко ем фастфуд.", "This exam was a piece of cake. - Этот экзамен был очень легким."],
  },
  pp_ps: {
    summary: "Present Perfect связывает прошлое с настоящим и используется, когда точное время не важно. Past Simple нужен для завершенного действия в известный момент прошлого.",
    rules: ["Present Perfect: have/has + V3; вопрос - Have/Has в начале, отрицание - have not/has not.", "Используйте его для опыта, недавнего результата, незавершенного периода или действия, начавшегося в прошлом.", "Маркеры: ever, never, already, yet, just, recently, so far.", "Past Simple нужен, когда указан завершенный момент: yesterday, last year, in 2020.", "В Present Perfect важно настоящее последствие, а в Past Simple - факт прошлого и время."],
    examples: ["I have lost my keys. - Я потерял ключи (и сейчас их нет).", "She visited Rome in 2022. - Она посетила Рим в 2022 году.", "Have you ever tried sushi? - Ты когда-нибудь пробовал суши?"],
  },
  pp_pc: {
    summary: "Present Perfect показывает результат или факт, а Present Perfect Continuous подчеркивает длительность и процесс действия до настоящего момента.",
    rules: ["Present Perfect: have/has + V3 подчеркивает результат, количество или завершенность.", "Present Perfect Continuous: have/has been + V-ing подчеркивает длительность и сам процесс.", "For показывает период времени, since - момент начала.", "С глаголами состояния (know, believe, own) обычно используется Perfect Simple.", "Если действие только что закончилось и виден результат, возможны оба времени, но акцент будет разным."],
    examples: ["I have written three emails. - Я написал три письма.", "I have been writing emails all morning. - Я все утро пишу письма.", "How long have you lived here? - Как давно ты здесь живешь?"],
  },
  ps_pp: {
    summary: "Past Simple описывает более позднее действие в прошлом, а Past Perfect показывает действие, которое произошло еще раньше.",
    rules: ["Past Simple описывает событие, произошедшее в прошлом.", "Past Perfect: had + V3 показывает событие, которое случилось до другого прошлого события.", "Past Perfect нужен, когда порядок событий неясен из контекста или его важно подчеркнуть.", "После when, before, after порядок иногда понятен и без Past Perfect, но форма остается возможной.", "Маркеры: already, just, never, by the time, before that."],
    examples: ["When I arrived, the film had started. - Когда я пришел, фильм уже начался.", "She called me after she had finished work. - Она позвонила после того, как закончила работу.", "I bought the ticket yesterday. - Я купил билет вчера."],
  },
  pp_pastpp: {
    summary: "Present Perfect связывает прошлое с настоящим, а Past Perfect связывает одно прошлое событие с другим, произошедшим раньше.",
    rules: ["Present Perfect: have/has + V3; точка отсчета - настоящее время.", "Past Perfect: had + V3; точка отсчета - определенный момент в прошлом.", "Present Perfect описывает опыт или результат, актуальный сейчас.", "Past Perfect показывает, что действие завершилось до другого прошлого события.", "Сначала найдите точку отсчета, затем выберите have/has или had."],
    examples: ["I have never been to Spain. - Я никогда не был в Испании.", "He had left before I came. - Он ушел до того, как я пришел.", "Have you finished the report? - Ты закончил отчет?"],
  },
  ppc_ppc: {
    summary: "Оба времени подчеркивают длительность. Past Perfect Continuous относится к процессу до момента в прошлом, а Present Perfect Continuous - до настоящего.",
    rules: ["Present Perfect Continuous: have/has been + V-ing - процесс продолжался до настоящего.", "Past Perfect Continuous: had been + V-ing - процесс продолжался до момента в прошлом.", "For показывает длительность: for two hours; since показывает начало: since Monday.", "Эти времена отвечают на вопрос «как долго?» и часто подчеркивают причину видимого результата.", "Для завершенного количества действий лучше выбрать Perfect Simple: I have written five pages."],
    examples: ["She has been working since 8 a.m. - Она работает с восьми утра.", "They had been waiting for an hour when the bus arrived. - Они ждали час, когда приехал автобус.", "Why are you tired? - I have been running. - Почему ты устал? - Я бегал."],
  },
  future_perfect_simple: {
    summary: "Future Simple говорит о будущем действии. Future Perfect показывает, что действие завершится к определенному моменту в будущем.",
    rules: ["Future Simple: will + начальная форма; используется для факта, решения, обещания или прогноза.", "Future Perfect: will have + V3 показывает завершение к сроку в будущем.", "Маркеры Future Perfect: by, by the time, before a future deadline.", "После when и by the time в придаточном времени используется Present Simple.", "Отрицание Future Perfect: will not have + V3; вопрос: Will ... have + V3?"],
    examples: ["I will call you tonight. - Я позвоню тебе сегодня вечером.", "By Friday, we will have finished the project. - К пятнице мы закончим проект.", "Will you have arrived by six? - Ты приедешь к шести?"],
  },
  used_to: {
    summary: "Used to описывает привычки или состояния в прошлом, которых больше нет. Be used to означает привычность к чему-либо.",
    rules: ["Used to + начальная форма описывает прошлую привычку или состояние, которых сейчас уже нет.", "В вопросах и отрицаниях обычно используется did: Did you use to...? I didn't use to...", "Be used to + существительное или V-ing означает «быть привычным к чему-либо».", "Get used to + существительное или V-ing означает «привыкать».", "Не путайте used to do и be used to doing: после to в первом случае глагол, во втором - V-ing."],
    examples: ["I used to play tennis. - Раньше я играл в теннис.", "She is used to working at night. - Она привыкла работать ночью.", "You will get used to the new schedule. - Ты привыкнешь к новому расписанию."],
  },
  passive_active: {
    summary: "В активном залоге подлежащее выполняет действие. В пассивном залоге важнее объект действия, а исполнитель может быть неизвестен или неважен.",
    rules: ["Active Voice: подлежащее само выполняет действие - The chef cooked the meal.", "Passive Voice: be + V3; объект активного предложения становится подлежащим.", "Время определяется формой be: is made, was made, will be made, has been made.", "Исполнитель добавляется с by, но его часто опускают, если он неизвестен или неважен.", "Пассив особенно часто используется в новостях, инструкциях, научных текстах и официальном стиле."],
    examples: ["Active: Someone stole my bike. - Кто-то украл мой велосипед.", "Passive: My bike was stolen. - Мой велосипед был украден.", "The results will be announced tomorrow. - Результаты объявят завтра."],
  },
  have_done: {
    summary: "Конструкция have something done означает, что услугу или действие для нас выполняет другой человек.",
    rules: ["Have + объект + V3: I had my car repaired - я отдал машину в ремонт.", "Время меняется в форме have: have, had, will have, am having.", "Конструкция показывает заказанную услугу или действие другого человека для нас.", "В вопросе и отрицании меняется have: Did you have your hair cut?", "Не путайте с have something: здесь V3 показывает, что действие выполнил не сам субъект."],
    examples: ["I have my teeth checked twice a year. - Я проверяю зубы дважды в год.", "She had her phone repaired. - Она отдала телефон в ремонт.", "We are having the kitchen painted. - Нам красят кухню."],
  },
  conditionals: {
    summary: "Условные предложения связывают условие и его результат. Тип условного предложения зависит от реальности и времени ситуации.",
    rules: ["Zero Conditional: If + Present, Present - общие факты и закономерности.", "First Conditional: If + Present, will + V - реальное или возможное будущее.", "Second Conditional: If + Past, would + V - маловероятная, воображаемая ситуация или совет.", "Third Conditional: If + Past Perfect, would have + V3 - нереальное прошлое и сожаление.", "В придаточном с if обычно не ставится will: If it rains, we will stay home."],
    examples: ["If you heat ice, it melts. - Если нагреть лед, он тает.", "If I have time, I will call you. - Если у меня будет время, я позвоню.", "If I had known, I would have helped. - Если бы я знал, я бы помог."],
  },
  reported_speech: {
    summary: "Косвенная речь передает чужие слова без точной цитаты. При переходе в прошлое времена и местоимения часто сдвигаются.",
    rules: ["Say обычно не требует адресата: He said that he was tired; tell требует адресата: He told me that he was tired.", "При глаголе сообщения в прошлом Present Simple часто становится Past Simple, а will - would.", "Местоимения и слова времени меняются по ситуации: today -> that day, tomorrow -> the next day.", "В косвенных вопросах нет обратного порядка слов: She asked where I lived, не where did I live.", "Приказы и просьбы передаются через tell/ask + object + to-infinitive."],
    examples: ["Direct: ‘I am busy.’ Reported: He said he was busy. - Он сказал, что занят.", "She asked me if I liked coffee. - Она спросила меня, люблю ли я кофе.", "The teacher told us to open our books. - Учитель сказал нам открыть книги."],
  },
  relative_clauses: {
    summary: "Определительные придаточные уточняют человека или предмет. Who относится к людям, which - к предметам, that может использоваться в большинстве определительных случаев.",
    rules: ["Who используется для людей, which - для предметов и животных, that - для людей или предметов в обязательном придаточном.", "Where относится к месту, when - ко времени, whose показывает принадлежность.", "В роли дополнения who/which/that иногда можно опустить: The book (that) I bought.", "В необязательном придаточном нужны запятые, и that там не используется.", "Выберите relative pronoun по функции: кто, который, где или чей."],
    examples: ["The woman who lives next door is a doctor. - Женщина, которая живет рядом, врач.", "This is the book that I told you about. - Это книга, о которой я тебе говорил.", "I visited Oxford, which is a historic city. - Я посетил Оксфорд, который является историческим городом."],
  },
  conjunctions: {
    summary: "Эти союзы и предлоги выражают контраст: действие происходит несмотря на препятствие или неожиданное обстоятельство.",
    rules: ["Although/though/even though + полноценное предложение с подлежащим и сказуемым.", "Despite/in spite of + существительное, местоимение или V-ing.", "Despite the rain = Although it was raining; грамматические конструкции после них разные.", "Не используйте although и but вместе в одной конструкции.", "Though может стоять в конце предложения в разговорной речи: It was difficult, though."],
    examples: ["Although it was cold, we went swimming. - Хотя было холодно, мы пошли плавать.", "Despite being tired, she continued working. - Несмотря на усталость, она продолжила работать.", "He passed the exam in spite of his anxiety. - Он сдал экзамен несмотря на тревогу."],
  },
  condition_conj: {
    summary: "In case, unless и as long as задают условие или меру предосторожности, но употребляются по-разному.",
    rules: ["Unless = if not: Unless you hurry = If you do not hurry.", "As long as означает «при условии, что» и часто вводит разрешение или условие.", "In case означает предосторожность, а не обычное условие: Take an umbrella in case it rains.", "После unless обычно не ставится дополнительное not.", "В придаточном после этих союзов для будущего используется Present Simple."],
    examples: ["You will miss the bus unless you run. - Ты опоздаешь на автобус, если не побежишь.", "You can borrow my car as long as you drive carefully. - Можешь взять мою машину, если будешь осторожен.", "Save my number in case you need help. - Сохрани мой номер на случай, если понадобится помощь."],
  },
  question_tags: {
    summary: "Question tags - короткие хвостики в конце утверждения. Они помогают переспросить, подтвердить информацию или поддержать разговор.",
    rules: ["После положительного утверждения обычно ставится отрицательный хвостик: You are ready, aren't you?", "После отрицательного утверждения ставится положительный хвостик: You don't smoke, do you?", "В хвостике повторяются вспомогательный или модальный глагол и местоимение.", "Если вспомогательного глагола нет, используйте do/does/did.", "Особые формы: I am late, aren't I?; Let's go, shall we?; Open the door, will you?"],
    examples: ["She can swim, can't she? - Она умеет плавать, правда?", "They didn't call, did they? - Они не звонили, да?", "It is a beautiful day, isn't it? - Сегодня прекрасный день, не так ли?"],
  },
  gerund_prepositions: {
    summary: "После предлога в английском используется форма глагола с окончанием -ing, которая называется герундием.",
    rules: ["После предлога about, after, before, without ставится V-ing: after leaving, without saying.", "Предлог in сохраняется в interested in learning, good at cooking.", "To иногда является предлогом, а не частью инфинитива: look forward to meeting, object to paying.", "Герундий может быть подлежащим или дополнением после устойчивого выражения.", "Не ставьте начальную форму после предлога: before go неверно, before going правильно."],
    examples: ["Thank you for helping me. - Спасибо, что помог мне.", "She left without saying goodbye. - Она ушла, не попрощавшись.", "I look forward to meeting you. - Я с нетерпением жду встречи с тобой."],
  },
};

export default topicExplanations;