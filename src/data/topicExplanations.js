const topicExplanations = {
  ps_pc: {
    summary: "Present Simple описывает привычки, факты и регулярные действия. Present Continuous показывает то, что происходит сейчас или временно.",
    rules: ["Present Simple: I work, she works.", "Present Continuous: am/is/are + глагол с окончанием -ing.", "Слова-маркеры: usually, every day для Simple; now, at the moment для Continuous."],
  },
  will_going_to: {
    summary: "Will используется для спонтанных решений, обещаний и прогнозов. Be going to говорит о заранее принятом плане или очевидном будущем результате.",
    rules: ["Will + начальная форма глагола.", "Am/is/are going to + начальная форма глагола.", "Will часто появляется после I think и I promise; going to - когда план уже есть."],
  },
  pastc_pasts: {
    summary: "Past Simple обозначает завершенное действие в прошлом. Past Continuous описывает процесс, который шел в определенный момент прошлого.",
    rules: ["Past Simple: V2 или did + начальная форма.", "Past Continuous: was/were + глагол с -ing.", "Часто Past Continuous создает фон, а Past Simple описывает событие, которое его прервало."],
  },
  modal_verbs: {
    summary: "Модальные глаголы выражают способность, разрешение, обязанность, совет и необходимость.",
    rules: ["После can, could, must, should используется начальная форма глагола без to.", "Have to и be able to изменяются по временам и лицам.", "Must означает обязанность говорящего, have to - необходимость из внешних обстоятельств."],
  },
  comp_super: {
    summary: "Сравнительная степень сопоставляет два объекта, а превосходная показывает самый сильный признак среди трех и более объектов.",
    rules: ["Короткие прилагательные: -er / -est (small, smaller, the smallest).", "Длинные прилагательные: more / the most.", "Не забывайте the перед превосходной степенью и than после сравнительной."],
  },
  articles: {
    summary: "Артикли показывают, говорим ли мы о предмете вообще, об одном из предметов или о конкретном известном предмете.",
    rules: ["A/an - один представитель, упомянутый впервые; an ставится перед гласным звуком.", "The - предмет уже известен или единственный в ситуации.", "Нулевой артикль часто используется с множественным числом и неисчисляемыми понятиями в общем смысле."],
  },
  countable_uncountable: {
    summary: "Исчисляемые существительные можно посчитать и поставить во множественное число. Неисчисляемые обозначают вещество, абстракцию или массу.",
    rules: ["Исчисляемые: a/an, many, few, numbers.", "Неисчисляемые: much, little, some; обычно без a/an.", "Для количества используйте выражения вроде a piece of advice или a bottle of water."],
  },
  ing_ed_adjectives: {
    summary: "Прилагательные на -ing описывают то, что вызывает чувство. Прилагательные на -ed описывают чувство человека или его состояние.",
    rules: ["The film is boring - фильм вызывает скуку.", "I am bored - мне скучно.", "Сравнивайте причину (-ing) и реакцию (-ed)."],
  },
  reflexive_pronouns: {
    summary: "Возвратные местоимения показывают, что действие направлено на самого деятеля, а также используются для усиления смысла.",
    rules: ["myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.", "После глагола: He hurt himself.", "Для усиления: I did it myself - Я сделал это сам."],
  },
  adj_prepositions: {
    summary: "После разных прилагательных используются определенные предлоги. Такие сочетания лучше запоминать как устойчивые конструкции.",
    rules: ["good at, interested in, afraid of.", "proud of, responsible for, similar to.", "Предлог сохраняется, даже если после него стоит местоимение или форма -ing."],
  },
  verb_prepositions: {
    summary: "Многие глаголы образуют устойчивые сочетания с конкретными предлогами, и выбор предлога меняет правильность выражения.",
    rules: ["listen to, depend on, belong to.", "look at, wait for, think about.", "После предлога перед действием обычно используется форма глагола с -ing."],
  },
  phrasal_verbs: {
    summary: "Фразовые глаголы состоят из глагола и частицы. Вместе они часто получают новое значение, которое нельзя буквально перевести по отдельности.",
    rules: ["give up - сдаться или бросить.", "look after - заботиться о; find out - выяснить.", "У некоторых фразовых глаголов дополнение можно поставить между глаголом и частицей."],
  },
  idioms: {
    summary: "Идиомы - устойчивые выражения с переносным значением. Их смысл нужно понимать целиком, а не переводить слово за словом.",
    rules: ["break the ice - разрядить обстановку.", "once in a blue moon - очень редко.", "Форма слов внутри идиомы обычно фиксирована."],
  },
  pp_ps: {
    summary: "Present Perfect связывает прошлое с настоящим и используется, когда точное время не важно. Past Simple нужен для завершенного действия в известный момент прошлого.",
    rules: ["Present Perfect: have/has + V3.", "Маркеры Perfect: ever, never, already, yet, just.", "С конкретным временем yesterday, last year, in 2020 используйте Past Simple."],
  },
  pp_pc: {
    summary: "Present Perfect показывает результат или факт, а Present Perfect Continuous подчеркивает длительность и процесс действия до настоящего момента.",
    rules: ["Present Perfect: have/has + V3.", "Present Perfect Continuous: have/has been + V-ing.", "For и since часто подходят к обоим временам, но Continuous сильнее подчеркивает процесс."],
  },
  ps_pp: {
    summary: "Past Simple описывает более позднее действие в прошлом, а Past Perfect показывает действие, которое произошло еще раньше.",
    rules: ["Past Perfect: had + V3.", "Используйте Past Perfect, чтобы показать порядок двух прошлых событий.", "Past Simple часто сопровождается yesterday, then, after that."],
  },
  pp_pastpp: {
    summary: "Present Perfect связывает прошлое с настоящим, а Past Perfect связывает одно прошлое событие с другим, произошедшим раньше.",
    rules: ["Present Perfect: have/has + V3.", "Past Perfect: had + V3.", "Сначала определите точку отсчета: сейчас или конкретный момент в прошлом."],
  },
  ppc_ppc: {
    summary: "Оба времени подчеркивают длительность. Past Perfect Continuous относится к процессу до момента в прошлом, а Present Perfect Continuous - до настоящего.",
    rules: ["Present Perfect Continuous: have/has been + V-ing.", "Past Perfect Continuous: had been + V-ing.", "For показывает длительность, since - начало периода."],
  },
  future_perfect_simple: {
    summary: "Future Simple говорит о будущем действии. Future Perfect показывает, что действие завершится к определенному моменту в будущем.",
    rules: ["Future Simple: will + начальная форма.", "Future Perfect: will have + V3.", "Маркеры Future Perfect: by, by the time, before a future deadline."],
  },
  used_to: {
    summary: "Used to описывает привычки или состояния в прошлом, которых больше нет. Be used to означает привычность к чему-либо.",
    rules: ["Used to + начальная форма: I used to play.", "Be used to + существительное или V-ing: I am used to working.", "Get used to означает процесс привыкания."],
  },
  passive_active: {
    summary: "В активном залоге подлежащее выполняет действие. В пассивном залоге важнее объект действия, а исполнитель может быть неизвестен или неважен.",
    rules: ["Passive Voice: форма be + V3.", "Время определяется формой be: is made, was made, will be made.", "Исполнителя можно добавить с помощью by."],
  },
  have_done: {
    summary: "Конструкция have something done означает, что услугу или действие для нас выполняет другой человек.",
    rules: ["Have + объект + V3: I had my car repaired.", "Время меняется в форме have: have, had, will have.", "Конструкция не означает, что говорящий сам выполнил действие."],
  },
  conditionals: {
    summary: "Условные предложения связывают условие и его результат. Тип условного предложения зависит от реальности и времени ситуации.",
    rules: ["Zero Conditional: If + Present, Present - факты.", "First Conditional: If + Present, will + V - реальное будущее.", "Second Conditional: If + Past, would + V - маловероятная или воображаемая ситуация."],
  },
  reported_speech: {
    summary: "Косвенная речь передает чужие слова без точной цитаты. При переходе в прошлое времена и местоимения часто сдвигаются.",
    rules: ["say обычно не требует дополнения с человеком: He said that...", "tell требует адресата: He told me that...", "Present часто превращается в Past, а will - в would, если глагол сообщения в прошлом."],
  },
  relative_clauses: {
    summary: "Определительные придаточные уточняют человека или предмет. Who относится к людям, which - к предметам, that может использоваться в большинстве определительных случаев.",
    rules: ["who/that для людей, which/that для предметов.", "Where относится к месту, whose показывает принадлежность.", "Не ставьте запятую в обязательном определительном придаточном."],
  },
  conjunctions: {
    summary: "Эти союзы и предлоги выражают контраст: действие происходит несмотря на препятствие или неожиданное обстоятельство.",
    rules: ["Although/though + подлежащее и сказуемое.", "Despite/in spite of + существительное или V-ing.", "Не используйте although и but вместе в одной конструкции."],
  },
  condition_conj: {
    summary: "In case, unless и as long as задают условие или меру предосторожности, но употребляются по-разному.",
    rules: ["Unless = if not.", "As long as = при условии, что.", "In case означает предосторожность: возьмите это на случай, если понадобится."],
  },
  question_tags: {
    summary: "Question tags - короткие хвостики в конце утверждения. Они помогают переспросить, подтвердить информацию или поддержать разговор.",
    rules: ["Положительное утверждение обычно получает отрицательный хвостик.", "Отрицательное утверждение получает положительный хвостик.", "В хвостике повторяется вспомогательный или модальный глагол и местоимение."],
  },
  gerund_prepositions: {
    summary: "После предлога в английском используется форма глагола с окончанием -ing, которая называется герундием.",
    rules: ["После about, after, before, without ставьте V-ing.", "Конструкция interested in learning, good at cooking.", "To иногда является предлогом: look forward to meeting."],
  },
};

export default topicExplanations;