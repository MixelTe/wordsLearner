const words1 = [
	new Word(["a kid", "kid"], "ребенок"),
	new Word(["to park", "park"], "припарковать машину"),
	new Word("soft-hearted", "мягкий, отзывчивый, добрый"),
	new Word("top", "вершина"),
	new Word(["to mind", "mind"], "возражать"),
	new Word(["to fix", "fix"], "чинить"),
	new Word("dumb", "Немой, глупый"),
	new Word("smart", "Красивый, Умный"),
	new Word("advanced", "продвинутый"),
	new Word("terrific", "потрясающий"),
	new Word(["to showoff", "showoff"], "рисоваться, выставлять на показ"),
	new Word(["to care", "care"], "заботиться, волноваться"),
	new Word("jealous", "ревнивый"),
	new Word(["to cheat", "cheat"], "жульничать"),
	new Word("cheat sheet", "шпаргалка"),
	new Word("flavour", "вкус"),
	new Word("rotten", "Гнилой"),
	new Word("silly", "глупый"),
	new Word("harm", "вред"),
	new Word(["to creep", "creep"], "красться"),
];
const words2 = [
	new Word("witchcraft", "черная магия, колдовство"),
	new Word("philosopher", "философ"),
	new Word("caretaker", "смотритель"),
	new Word("legendary", "легендарный"),
	new Word("concentrate on", "сосредоточиться на"),
	new Word("surroundings", "местность, окружение"),
	new Word(["a dormitory", "dormitory"], "спальня (в интернате)"),
	new Word(["a wizard", "wizard"], "волшебник, кудесник"),
	new Word("wizardry", "волшебство, чары"),
	new Word(["to enroll", "enroll"], "зачислять(ся), записать(ся)"),
	new Word(["to enroll at a college", "to enroll at college", "enroll at a college", "enroll at college"], "быть зачисленным в колледж", false),
	new Word(["to enroll on a course", "to enroll on course", "enroll on a course", "enroll on course"], "быть зачисленным в колледж", false),
	new Word(["to be enrolled at a university", "to be enrolled at university", "be enrolled at a university", "be enrolled at university"], "быть зачисленным в университет", false),
	new Word(["a queue", "queue"], "очередь"),
	new Word(["a long queue", "long queue"], "длинная очередь", false),
	new Word(["to join the queue", "join the queue", "to join queue", "join queue"], "присоединиться к очереди", false),
	new Word(["to be in the queue", "be in the queue", "to be in queue", "be in queue"], "быть в очереди", false),
	new Word(["to jump the queue", "jump the queue", "to jump queue", "jump queue"], "пройти, пролезть без очереди", false),
	new Word(["a queue jumper", "queue jumper"], "человек, проходящий без очереди"),
	new Word(["a line", "line"], "очередь (Ам.)"),
	new Word(["to queue (queued, queueing/queuing)", "to queue", "queue"], "стоять в очереди"),
	new Word(["to queue for (the bus)", "to queue for", "queue for", "to queue for the bus", "queue for the bus", "to queue for bus", "queue for bus"], "стоять в очереди за чем-то", false),
	new Word(["to vanish", "vanish"], "исчезать"),
	new Word(["to vanish from sight", "vanish from sight"], "исчезнуть из виду", false),
	new Word("vanishing species", "исчезающие виды", false),
	new Word(["to tickle ", "tickle"], "щекотать"),
	new Word("solid", "1. твердый, плотный \n 2. однородный, сплошной"),
	new Word(["a solid wall", "solid wall"], "твердая стена", false),
	new Word("solid gold", "полностью из золота"),
	new Word("solid advice", "надежный совет"),
	new Word(["to force", "force"], "принуждать, заставлять"),
	new Word(["to force on (upon) someone", "force on (upon) someone",
		"to force on someone", "force on someone",
		"to force upon someone", "force upon someone"], "навязать что-либо кому-то", false),
	new Word(["to force sb to do sth", "force sb to do sth", "to force sb do sth", "force sb do sth"], "заставить кого-то что-либо делать", false),
	new Word(["to force a door", "force a door", "to force door", "force door"], "толкнуть дверь", false),
	new Word("force", "сила"),
	new Word("by force", "силой", false),
	new Word("from force of habit", "в силу привычки", false),
	new Word(["to squeak", "squeak"], "пищать, скрипеть"),
	new Word(["a squeak", "squeak"], "писк, скрип"),
	new Word("squeaky", "писклявый, скрипучий"),
	new Word(["a mess", "mess"], "беспорядок"),
	new Word(["to be (in) a mess", "be (in) a mess", "to be (in) mess", "be (in) mess",
		"to be a mess", "be a mess", "to be mess", "be mess",
		"to be in a mess", "be in a mess", "to be in mess", "be in mess"], "быть в беспорядке", false),
	new Word("messy", "неубранный, неряшливый, грязный"),
	new Word(["to mess", "mess"], "запачкать"),
	new Word(["to mess about (around)", "mess about (around)",
		"to mess about", "mess about",
		"to mess around", "mess around"], "играть (шалить)", false),
	new Word(["to mess up", "mess up"], "пачкать, портить", false),
	new Word("complicated", "сложный"),
	new Word("rare", "редкий"),
	new Word("rarely", "редко"),
	new Word(["to relieve", "relieve"], "облегчать"),
	new Word(["to relieve pain", "relieve pain"], "облегчить боль", false),
	new Word(["to relieve trouble", "relieve trouble"], "решить проблемы", false),
	new Word(["to be relieved", "be relieved"], "чувствовать облегчение", false),
	new Word(["to relieve a headache", "relieve a headache", "to relieve headache", "relieve headache"], "избавить(ся) от головной боли", false),
	new Word("relief", "облегчение"),
	new Word("with relief", "с облегчением", false),
	new Word(["a sigh of relief", "sigh of relief"], "вздох облегчения", false),
	new Word(["a sense of relief", "sense of relief"], "чувство облегчения", false),
	new Word(["to one's relief", "one's relief"], "к чьему-то облегчению", false),
	new Word(["to drone", "drone"], "жужжать, гудеть"),
	new Word(["to drone on", "drone on"], "бубнить", false),
	new Word("droning", "гудящий, жужжащий"),
	new Word(["to warn", "warn"], "предупреждать"),
	new Word(["to warn sb about(/of) sth", "warn sb about(/of) sth",
		"to warn sb about sth", "warn sb about sth",
		"to warn sb of sth", "warn sb of sth",
		"to warn sb about(of) sth", "warn sb about(of) sth",
		"to warn sb about/of) sth", "warn sb about/of sth"], "предупредить о чем-то", false),
	new Word(["to warn against sth(/sb)", "warn against sth(/sb)",
		"to warn against sth", "warn against sth",
		"to warn against sb", "warn against sb",
		"to warn against sth(sb)", "warn against sth(sb)",
		"to warn against sth/sb", "warn against sth/sb"], "предостеречь", false),
	new Word(["a warning", "warning"], "предупреждение"),
];
const words3 = [
	new Word("firmly", "твердо"),
	new Word("downwards", "вниз"),
	new Word("eccentric", "эксцентричный"),
	new Word("worth", "стоящий"),
	new Word(["to be worth doing sth", "be worth doing sth"], "стоит сделать что-либо", false),
	new Word("outfit", "наряд"),
	new Word("fancy dress", "нарядное платье"),
	new Word("fancy-dress", "нарядный, маскарадный"),
	new Word(["a fancy-dress party", "fancy-dress party"], "костюмированная вечеринка", false),
	new Word("immense", "огромный, громадный"),
	new Word("reluctant", "неохотный"),
	new Word("reluctance", "нежелание"),
	new Word(["to attach", "attach"], "прикреплять"),
	new Word(["to attach sth to sth", "attach sth to sth"], "прикреплять что-то к чему-то", false),
	new Word("attached", "прикрепленный"),
	new Word(["to be attached to sth", "be attached to sth"], "быть прикрепленным к чему-то", false),
	new Word(["to detach", "detach"], "отделять"),
	new Word(["to detach sth from sth", "detach sth from sth"], "отделять что-то от чего-то", false),
	new Word("detachable", "съемный, отделяемый"),
	new Word("detached", "беспристрастный, равнодушный"),
	new Word(["a detached house", "detached house"], "отдельный дом", false),
	new Word(["to tie", "tie"], "привязывать, завязывать"),
	new Word(["to tie sth to sth", "tie sth to sth"], "привязывать что-то к чему-то", false),
	new Word(["to tie sth round sth", "tie sth round sth"], "завязывать что-то вокруг чего-то", false),
	new Word(["to tie a knot", "tie a knot", "to tie knot", "tie knot"], "завязывать узел", false),
	new Word(["to tie a bow", "tie a bow", "to tie bow", "tie bow"], "завязывать бант", false),
	new Word(["to tie shoelaces", "tie shoelaces"], "завязывать шнурки", false),
	new Word(["to tie a hair ribbon", "tie a hair ribbon", "to tie hair ribbon", "tie hair ribbon"], "завязывать ленту", false),
	new Word(["to be tied with string(/rope)", "be tied with string(/rope)",
		"to be tied with string", "be tied with string",
		"to be tied with rope", "be tied with rope"], "быть связанным веревкой", false),
	new Word(["a tie", "tie"], "галстук"),
	new Word(["a bow tie", "bow tie"], "галстук-бабочка", false),
	new Word("starch", "крахмал"),
	new Word(["to starch", "starch"], "крахмалить"),
	new Word("starched", "накрахмаленный"),
	new Word("stiff", "онемевший, оцепеневший, жесткий"),
	new Word(["to chew", "chew"], "жевать"),
	new Word("ridiculous", "смешной, нелепый"),
	new Word(["to flap", "flap"], "1. Хлопать, шлепать; 2. развеваться"),
	new Word("funeral", "похороны"),
	new Word(["to hold a funeral", "hold a funeral", "to hold funeral", "hold funeral"], "проводить похороны", false),
	new Word("dignity", "достоинство"),
	new Word(["beneath one’s dignity", "beneath ones dignity"], "ниже чьего-то достоинства", false),
	new Word(["to keep one’s dignity", "keep one’s dignity", "to keep ones dignity", "keep ones dignity"], "сохранить достоинство", false),
	new Word(["to lose one’s dignity", "lose one’s dignity", "to lose ones dignity", "lose ones dignity"], "потерять достоинство", false),
	new Word(["to stand on one’s dignity", "stand on one’s dignity", "to stand on ones dignity", "stand on ones dignity"], "держаться с большим достоинством", false),
	new Word("dignified", "полный достоинства, величавый"),
];
const words4 = [
	new Word(["an individual", "individual"], "личность, индивидуум"),
	new Word(["a robot", "robot"], "робот"),
	new Word("kleptomania", "клептомания"),
	new Word("intellect", "ум, разум, интеллект"),
	new Word("in combination", "в сочетании, в комбинации"),
	new Word("combined", "совместный, объединенный", false),
	new Word(["a hybrid", "hybrid"], "гибрид"),
	new Word("sterilized", "простерилизованный"),
	new Word(["to imitate", "imitate"], "имитировать"),
	new Word("potential", "потенциальный"),
	new Word("emotional", "эмоциональный"),
	new Word(["to express", "express"], "выражать"),
	new Word(["to express thanks", "express thanks"], "выразить благодарность", false),
	new Word("nerve", "1. Нерв; 2. Смелость"),
	new Word(["to suffer from nerves", "suffer from nerves"], "страдать от нервов", false),
	new Word(["to get on one’s nerves", "get on one’s nerves",
		"to get on ones nerves", "get on ones nerves"], "действовать кому-то на нервы", false),
	new Word(["to have the nerve to do sth", "have the nerve to do sth",
		"to have nerve to do sth", "have nerve to do sth"], "иметь смелость (решительность) что-то сделать", false),
	new Word("nervous", "нервный"),
	new Word(["to bother sb with(/about) sth", "bother sb with(/about) sth",
		"to bother sb with sth", "bother sb with sth",
		"to bother sb about sth", "bother sb about sth"], "беспокоить кого-то чем-то", false),
	new Word("indifferent", "равнодушный"),
	new Word("indifferently", "равнодушно", false),
	new Word("beside", "рядом"),
	new Word("besides", "кроме того"),
	new Word(["to require sth", "require sth"], "требовать что-то"),
	new Word("equipment", "снаряжение, экипировка, оборудование"),
	new Word(["to supply", "supply"], "снабжать"),
	new Word(["to supply sb with sth", "supply sb with sth"], "снабжать кого-то чем-то"),
	new Word(["to supply sth to sb/sth", "supply sth to sb/sth"], "поставлять что-тому кому-то/чему-то"),
	new Word(["a supply", "supply"], "запас", false),
	new Word("irritable", "раздражительный"),
	new Word("irritably", "раздраженно", false),
	new Word(["a case", "case"], "случай"),
	new Word(["to work on the case", "work on the case",
		"to work on case", "work on case"], "работать над каким-то случаем", false),
	new Word("in case", "в случае", false),
	new Word("in any case", "в любом случае", false),
	new Word("just in case", "на всякий случай", false),
	new Word("in that case", "в этом случае", false),
	new Word("worn out", "поношенный"),
	new Word(["a record", "record"], "рекорд, запись"),
	new Word(["to set a record", "set a record",
		"to set record", "set record"], "установить рекорд", false),
	new Word(["to break the record", "break the record", "to break record", "break record"], "побить рекорд", false),
	new Word(["to hold the record", "hold the record", "to hold record", "hold record"], "удержать рекорд", false),
	new Word(["to predict", "predict"], "предсказывать"),
	new Word(["to insist on sth", "insist on sth"], "настаивать на чем-то"),
	new Word(["a desire", "desire"], "желание"),
	new Word(["a variety", "variety"], "разнообразие"),
	new Word(["a variety of goods", "variety of goods"], "разнообразие товаров", false),
	new Word("various", "разнообразный", false),
	new Word(["an advantage", "advantage"], "преимущество"),
	new Word(["an advantage over sb", "advantage over sb"], "преимущество над кем-то", false),
	new Word(["to have the advantage of doing sth", "have the advantage of doing sth",
		"to have advantage of doing sth", "have advantage of doing sth"], "иметь преимущество", false),
	new Word(["to do sth to advantage", "do sth to advantage"], "делать что-то с пользой", false),
	new Word(["to take advantage of sth", "take advantage of sth"], "воспользоваться чем-либо", false),
	new Word(["a disadvantage", "disadvantage"], "недостаток", false),
]
const words5 = [
	new Word("absolute", "абсолютный"),
	new Word("altogether", "в общей сложности, совершенно"),
	new Word(["a cavalcade", "cavalcade"], "кавалькада, вереница"),
	new Word("commercial", "коммерческий, финансовый"),
	new Word("countless", "бесчисленный, несчетный"),
	new Word(["a fjord", "fjord"], "фиорд"),
	new Word(["a half-sister", "half-sister"], "сводная сестра"),
	new Word("idyllic", "идиллический"),
	new Word(["a steward", "steward"], "управляющий, эконом"),
	new Word("totally", "целиком, полностью"),
	new Word(["a welcome", "welcome"], "приём"),
	new Word(["to thrill", "thrill"], "вызывать трепет, волновать"),
	new Word(["to be thrilled by sth", "be thrilled by sth"], "испытывать трепет от чего-то", false),
	new Word(["a thrill", "thrill"], "восторг, восхищение"),
	new Word("thrilling", "волнующий", false),
	new Word("nightmare", "кошмар"),
	new Word(["to clatter", "clatter"], "звякать"),
	new Word(["a clatter", "clatter"], "звяканье"),
	new Word(["to confuse", "confuse"], "путать, запутывать"),
	new Word("confusing", "запутанный", false),
	new Word("rought", "грубый"),
	new Word(["a rought idea", "rought idea"], "до конца не обдуманная идея", false),
	new Word(["a rought paper", "rought paper"], "черновик", false),
	new Word(["a rought drawing", "rought drawing"], "эскиз, набросок", false),
	new Word(["to sink(-sank-sunk)", "sink(-sank-sunk)", "to sink", "sink"], "тонуть, погружаться"),
	new Word(["to groan", "groan"], "стонать"),
	new Word(["to groan with sth", "groan with sth"], "стонать от чего-то", false),
	new Word(["a groan", "groan"], "стон"),
	new Word(["a groan of sth", "groan of sth"], "стон чего-то", false),
	new Word(["to tremble", "tremble"], "дрожать"),
	new Word(["to tremble with sth", "tremble with sth"], "дрожать от чего-то", false),
	new Word("annual", "ежегодный"),
	new Word(["a reunion", "reunion"], "воссоединение, встреча"),
	new Word(["to embrace", "embrace"], "обнимать"),
	new Word(["a tear", "tear"], "слеза"),
	new Word(["to flow", "flow"], "течь (куда-то)"),
	new Word(["a flow", "flow"], "течение, поток"),
	new Word("wrinkled", "морщинистый"),
	new Word(["a distination", "distination"], "место назначения"),
	new Word(["a vessel", "vessel"], "судно (оф.)"),
	new Word("bare", "голый, обнаженный, оголенный"),
	new Word(["a bare wall", "bare wall"], "голая стена", false),
	new Word("barefooted", "босоногий", false),
]

const words6 = [
	new Word("fierce", "яростный"),
	new Word(["a memory (memories)", "a memory, memories", "memory, memories",
		"a memory memories", "memory memories", "a memory", "memory", "memories"], "память (воспоминания)"),
	new Word(["an ability", "ability"], "способность"),
	new Word("idle", "праздный, ленивый"),
	new Word("illiterate", "неграмотный"),
	new Word(["a point", "point"], "точка"),
	new Word(["to point", "point"], "указывать"),
	new Word(["to waste", "waste"], "тратить"),
	new Word("wasteful", "расточительный"),
	new Word("passionate", "страстный"),
	new Word(["marvellous", "marvelous"], "чудесный"),
	new Word("obvious", "очевидный"),
	new Word("obviously", "очевидно"),
	new Word("glorious", "славный"),
	new Word("flame", "пламя"),
	new Word(["to absorb", "absorb"], "впитывать, поглощать"),
	new Word(["to float", "float"], "плавать"),
	new Word(["to enclose", "enclose"], "заключать, окружать"),
	new Word(["a gift", "gift"], "подарок, дар, талант"),
	new Word("gifted", "одаренный"),
]

const words_hand = [
	new Word(["to hand down", "hand down"], "передать (опыт, знания, что-то по наследству)"),
	new Word(["to hand in", "hand in"], "сдать (работу, документ для чтения или проверки)"),
	new Word(["to hand out", "hand out"], "раздать"),
	new Word(["to hand over", "hand over"], "передать"),
]
const words_break = [
	new Word(["to break away", "break away"], "убежать, освободиться"),
	new Word(["to break down", "break down"], "ломать, рушить"),
	new Word(["to break down", "break down"], "потерять контроль над собой, раскиснуть"),
	new Word(["to break into", "break into"], "врываться, вламываться"),
	new Word(["to break into", "break into"], "неожиданно начать делать что-то"),
	new Word(["to break out", "break out"], "разразиться, начаться"),
]
const words_come = [
	new Word(["to come across", "come across"], "наталкиваться, натыкаться"),
	new Word(["to come down with", "come down with"], "подхватить болезнь, слечь"),
	new Word(["to come off", "come off"], "сойти, упасть, оторваться"),
	new Word(["to come over", "come over"], "найти (на человека), произойти"),
	new Word(["to come round", "come round"], "заглянуть ненадолго"),
]
const words_see = [
	new Word(["to see sb around", "see sb around"], "(часто) встречаться с кем-то"),
	new Word(["to see through sth or sb", "see through sth or sb",
			  "to see through sth", "see through sth",
			  "to see through sb", "see through sb"], "видеть что-то (кого-то) насквозь"),
	new Word(["to see to sth or sb", "see to sth or sb",
			  "to see to sth", "see to sth",
			  "to see to sb", "see to sb"], "позаботиться о чём-то (о ком-то)"),
	new Word(["to see sb off", "see sb off"], "проводить кого-то"),
]
const words_drop = [
	new Word(["to drop in (on sb/at some place)", "drop in (on sb/at some place)",
			  "to drop in", "drop in"], "навестить, зайти, заглянуть (к кому-то/куда-то)"),
	new Word(["to drop off", "drop off"], "выходить, высадить (из машины)"),
	new Word(["to drop off", "drop off"], 'оставить, "забросить" (вещи) куда-то'),
	new Word(["to drop on sb", "drop on sb"], "набрасываться, нападать на кого-либо"),
	new Word(["to drop on sb", "drop on sb"], "наткнуться, натолкнуться на кого-либо, случайно встретить"),
	new Word(["to drop out", "drop out"], "выбывать, выходить из чего-то, бросать (школу)"),
]
const words_hold = [
	new Word(["to hold (onesef) in", "hold hold (onesef) in",
			  "to hold in", "hold hold in"], "сдерживать(ся)"),
	new Word(["to hold off", "hold off"], "оставаться, находиться на расстоянии"),
	new Word(["to hold off", "hold off"], "придерживать, задерживать, сдерживать"),
	new Word(["to hold on", "hold on"], "прикреплять(ся)"),
	new Word(["to hold on", "hold on"], "держаться за что-то"),
	new Word(["to hold on", "hold on"], "держаться, продолжать делать что-то (часто не смотря на сложности)"),
	new Word(["to hold on", "hold on"], "ждать (особенно при разговоре по телефону)"),
	new Word(["to hold out", "hold out"], "протянуть, выставить"),
]
const words_phrasalVerbs = [
	new Word(["to hand down", "hand down"], "передать (опыт, знания, что-то по наследству)"),
	new Word(["to hand in", "hand in"], "сдать (работу, документ для чтения или проверки)"),
	new Word(["to hand out", "hand out"], "раздать"),
	new Word(["to hand over", "hand over"], "передать"),
	new Word(["to break away", "break away"], "убежать, освободиться"),
	new Word(["to break down", "break down"], "ломать, рушить"),
	new Word(["to break down", "break down"], "потерять контроль над собой, раскиснуть"),
	new Word(["to break into", "break into"], "врываться, вламываться"),
	new Word(["to break into", "break into"], "неожиданно начать делать что-то"),
	new Word(["to break out", "break out"], "разразиться, начаться"),
	new Word(["to come across", "come across"], "наталкиваться, натыкаться"),
	new Word(["to come down with", "come down with"], "подхватить болезнь, слечь"),
	new Word(["to come off", "come off"], "сойти, упасть, оторваться"),
	new Word(["to come over", "come over"], "найти (на человека), произойти"),
	new Word(["to come round", "come round"], "заглянуть ненадолго"),
	new Word(["to see sb around", "see sb around"], "(часто) встречаться с кем-то"),
	new Word(["to see through sth or sb", "see through sth or sb",
			  "to see through sth", "see through sth",
			  "to see through sb", "see through sb"], "видеть что-то (кого-то) насквозь"),
	new Word(["to see to sth or sb", "see to sth or sb",
			  "to see to sth", "see to sth",
			  "to see to sb", "see to sb"], "позаботиться о чём-то (о ком-то)"),
	new Word(["to see sb off", "see sb off"], "проводить кого-то"),
	new Word(["to drop in (on sb/at some place)", "drop in (on sb/at some place)",
			  "to drop in", "drop in"], "навестить, зайти, заглянуть (к кому-то/куда-то)"),
	new Word(["to drop off", "drop off"], "выходить, высадить (из машины)"),
	new Word(["to drop off", "drop off"], 'оставить, "забросить" (вещи) куда-то'),
	new Word(["to drop on sb", "drop on sb"], "набрасываться, нападать на кого-либо"),
	new Word(["to drop on sb", "drop on sb"], "наткнуться, натолкнуться на кого-либо, случайно встретить"),
	new Word(["to drop out", "drop out"], "выбывать, выходить из чего-то, бросать (школу)"),
	new Word(["to hold (onesef) in", "hold hold (onesef) in",
			  "to hold in", "hold hold in"], "сдерживать(ся)"),
	new Word(["to hold off", "hold off"], "оставаться, находиться на расстоянии"),
	new Word(["to hold off", "hold off"], "придерживать, задерживать, сдерживать"),
	new Word(["to hold on", "hold on"], "прикреплять(ся)"),
	new Word(["to hold on", "hold on"], "держаться за что-то"),
	new Word(["to hold on", "hold on"], "держаться, продолжать делать что-то (часто не смотря на сложности)"),
	new Word(["to hold on", "hold on"], "ждать (особенно при разговоре по телефону)"),
	new Word(["to hold out", "hold out"], "протянуть, выставить"),
]
const words_adverbs = [
	new Word("hard", "упорно, сердито"),
	new Word("hardly", "едва, с трудом"),
	new Word("late", "позно"),
	new Word("lately", "недавно, за последнее время"),
	new Word("high", "высоко, ввысь"),
	new Word("highly", "высоко, с высокой оценкой"),
	new Word("near", "близко"),
	new Word("nearly", "почти"),
	new Word("most", "очень, больше всего"),
	new Word("mostly", "главным образом, преимущественно"),
	new Word("right", "правильно"),
	new Word("rightly", "справедливо, верно, правильно (с причастиями)"),
	new Word("wrong", "неверно, неправильно (с глаголами)"),
	new Word("wrongly", "несправедливо, неверно, неправильно (с причастиями)"),
	new Word("wide", "широко (характеристика физического действия)"),
	new Word("widely", "широко (в переносном смысле)"),
]

const words9_1 = [
	new Word(["to wear indigo veils", "wear indigo veils"], "носить накидку цвета индиго"),
	new Word(["to keep farm animals", "keep farm animals"], "держать домашний скот"),
	new Word(["to live on hand-built wooden boats", "live on hand-built wooden boats"], "жить в самодельных деревянных лодках"),
	new Word(["to have deep knowledge of the sea", "have deep knowledge of the sea",
			  "to have deep knowledge of sea", "have deep knowledge of sea"], "иметь глубокие знания о море"),
	new Word(["to like drinking mint tea", "like drinking mint tea"], "любить пить мятный чай"),
	new Word(["to catch and sell fish", "catch and sell fish"], "ловить и продовать рыбу"),
	new Word(["to live in tents", "live in tents"], "жить в палатках"),
	new Word("harsh sand", "жесткий песок"),
	new Word("livestock herders", "скотоводы"),
	new Word(["an idyllic way of life", "idyllic way of life"], "идеальный образ жизни"),
	new Word(["to migrate to city", "migrate to city"], "переехать в город"),
	new Word(["to settle in temporary stilt huts", "settle in temporary stilt huts"], "селиться во временных хижинах на сваях"),
	new Word(["to treat sb as family", "treat sb as family"], "относится как к семье"),
	new Word(["to flee(-fled-fled)", "flee(-fled-fled)",
			  "to flee-fled-fled", "flee-fled-fled",
			  "to flee", "flee"], "убегать"),
	new Word(["to rear animals for meat", "rear animals for meat"], "выращивать животных для мяса"),
	new Word(["to take sth for granted", "take sth for granted"], "воспринимать что-то как само собой разумеющееся"),
	new Word("nomads are always on move", "кочевники всегда в движении"),
	new Word(["to witness first-hand", "witness first-hand"], "узнать что-то из первоисточника"),
	new Word(["to be struck by sth", "be struck by sth"], "быть пораженным чем-то"),
	new Word(["a tribe", "tribe"], "племя"),
	new Word("tribal", "племенной"),
	new Word(["to protect the camel trading caravans", "protect the camel trading caravans",
			  "to protect camel trading caravans", "protect camel trading caravans"], "защищать караваны торгующие верблюдами"),
	new Word(["a drought", "drought"], "засуха"),
	new Word(["a monsoon season", "monsoon season"], "сезон дождей"),
	new Word(["a spear", "spear"], "копьё"),
	new Word(["to have few possessions", "have few possessions"], "иметь мало вещей"),
	new Word("sparsely-populated country", "малонаселённая страна"),
	new Word(["to shear", "shear"], "стричь"),
	new Word("satellite dish", "спутниковая тарелка"),
	new Word(["Help yourself to a cup of tea, Jim", "Help yourself to cup of tea, Jim"], "Угощайся чашечкой чая, Джим"),
]

const words9_2 = [
	new Word(["to live in a busy town", "live in a busy town",
			  "to live in busy town", "live in busy town"], "жить в оживлённом городе"),
	new Word(["to live in a secluded village", "live in a secluded village",
			  "to live in secluded village", "live in secluded village"], "жить в уединённой деревушке"),
	new Word(["to live in a modern flat", "live in a modern flat",
			  "to live in modern flat", "live in modern flat"], "жить в современной квартире"),
	new Word(["to live in a wooden shelter", "live in a wooden shelter",
			  "to live in wooden shelter", "live in wooden shelter"], "жить в деревянном убежище"),
	new Word(["to work in a office", "work in a office",
			  "to work in office", "work in office"], "работать в офисе"),
	new Word(["to hunt crocodiles", "hunt crocodiles"], "охотиться на крокодилов"),
	new Word(["to use public transport", "use public transport"], "пользоваться общественным транстпортом"),
	new Word(["to walk to work", "walk to work"], "идти на работу пешком"),
	new Word(["to ride a bicycle", "ride a bicycle",
			  "to ride bicycle", "ride bicycle"], "ездить на велосипеде"),
	new Word(["to cook your own food", "cook your own food"], "готовить еду"),
	new Word(["to order takeaway", "order takeaway"], "заказать еду на вынос"),
	new Word(["to surf the Net", "surf the Net",
			  "to surf Net", "surf Net"], "лазить по интернету"),
	new Word(["to go to the gym", "go to the gym",
			  "to go to gym", "go to gym"], "ходить в зал"),
	new Word(["to eat out", "eat out"], "есть в ресторанах, кафе и т. д. (не дома)"),
	new Word("Stone Age", "Каменный век"),
	new Word(["to adapt to the modern world", "adapt to the modern world",
			  "to adapt to modern world", "adapt to modern world"], "привыкнуть к современному миру"),
	new Word(["to be a rare exception", "be a rare exception",
			  "to be rare exception", "be rare exception"], "быть редким исключением"),
	new Word("with terror", "с ужасом"),
	new Word("with suspicion", "с подозрением"),
	new Word(["to go through the revolving door", "go through the revolving door",
			  "to go through revolving door", "go through revolving door"], "пройти через вращающеюся дверь"),
	new Word("gasps of wonder", "вздохи удивления"),
	new Word(["an invisible hand", "invisible hand"], "невидимая рука"),
	new Word(["the elderly", "elderly"], "пожилые"),
	new Word(["to be convinced", "be convinced"], "быть убеждённым"),
	new Word(["to look after", "look after"], "присматриваться, присматривать"),
	new Word("emotional", "эмоциональный"),
	new Word(["to treasure", "treasure"], "ценить"),
	new Word(["without a second thought", "without second thought"], "не раздумывая"),
	new Word(["to stand still", "stand still"], "стоять спокойно, не двигаясь"),
	new Word("overwhelming hospitaity", "потрясающее гостеприимство"),
]

const words9_pg15 = [
	new Word("scavenge", "убирать (мусор), копаться в отбросах"),
	new Word("discarded", "выброшенный, выкинутый"),
	new Word("consumer waste", "бытовые отходы"),
	new Word("lid", "крышка"),
	new Word("rummage", "рыться, копаться (тщательно)"),
	new Word("vegan", "строгий вегетарианец"),
	new Word("devotee", "приверженец, преданный"),
	new Word("landfill site", "свалка"),
	new Word("edible", "съедобный"),
	new Word("urban foraging", "поиск пропитания (городские сборы пищи)"),
	new Word(["to tuck into", "tuck into"], "уплетать"),
	new Word(["to rope in", "rope in"], "увлекать (кого-то)"),
	new Word("sealed", "запечатанный"),
	new Word("steamed", "приготовленный на пару"),
	new Word("roasted", "жареный"),
	new Word(["to condemn", "condemn"], "осуждать, порицать"),
	new Word(["to be tempted to", "be tempted to"], "испытывать искушение"),
	new Word("intact", "нетронутый, целый"),
	new Word("sell-by date", "срок годности"),
	new Word("pitying", "жалость, испытывающий жалость"),
]
// new Word(["", ""], ""),
// new Word("", ""),

const AllParts: Words[] = [
	{ words: [], name: "8 Класс", blank: true },
	{ words: words1, name: "Часть 1" },
	{ words: words2, name: "Часть 2" },
	{ words: words3, name: "Часть 3" },
	{ words: words4, name: "Часть 4" },
	{ words: words5, name: "Часть 5" },
	{ words: words6, name: "Часть 6" },
	{ words: words_hand, name: "Глагол to hand" },
	{ words: words_break, name: "Глагол to break" },
	{ words: words_come, name: "Глагол to come" },
	{ words: words_see, name: "Глагол to see" },
	{ words: words_drop, name: "Глагол to drop" },
	{ words: words_hold, name: "Глагол to hold" },
	{ words: words_phrasalVerbs, name: "фразовые глаголы" },
	{ words: words_adverbs, name: "Наречия" },
	{ words: [], name: "9 Класс", blank: true },
	{ words: words9_1, name: "Часть 1" },
	{ words: words9_2, name: "Часть 2" },
	{ words: words9_pg15, name: "Стр. 15" },
]

interface Words
{
	words: Word[],
	name: string,
	blank?: boolean,
}