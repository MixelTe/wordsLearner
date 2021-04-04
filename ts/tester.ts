let curTester: Tester | null = null;

function reStart()
{
	if (settings.words == -1) settings.words = AllParts.length - 1;
	allEls.page1.title.innerText = AllParts[settings.words].name;
	curTester = new Tester(AllParts[settings.words].words);
}
function onOKButton()
{
	if (curTester != null) curTester.onOKButton();
}

class Tester
{
	private words: Word[];
	private curWord = 0;
	private correct = 0;
	private state: "question" | "answer" | "result" | "none" = "none";
	private firstTry = true;
	constructor(words: Word[])
	{
		this.words = words;
		this.init(words);
		this.showQuestion();
	}
	private init(words: Word[])
	{
		this.curWord = 0;
		this.correct = 0;
		this.firstTry = true;
		this.state = "none";
		this.words = words;
		if (settings.onlyMain)
		{
			this.words = [];
			words.forEach(w =>
			{
				if (w.isMain()) this.words.push(w);
			});
		}
		if (settings.shuffle)
		{
			this.words = words.slice();
			shuffle(this.words);
		}
	}
	private setLabels()
	{
		allEls.page1.all.innerText = `${this.curWord} / ${this.words.length}`
		if (settings.repeatMode) allEls.page1.correct.innerText = `On first try: ${this.correct} / ${this.words.length}`
		else allEls.page1.correct.innerText = `Correct: ${this.correct} / ${this.words.length}`
	}
	private showQuestion()
	{
		if (this.curWord >= this.words.length)
		{
			this.showResult();
			return;
		}
		allEls.page1.question.innerText = this.words[this.curWord].question();
		allEls.page1.answer.innerText = "";
		allEls.page1.input.classList.remove("input-correct");
		allEls.page1.input.classList.remove("input-uncorrect");
		allEls.page1.input.disabled = false;
		allEls.page1.input.value = "";
		this.setLabels();
		this.state = "question";
		allEls.page1.button.innerText = "OK";
	}
	private checkAnswer()
	{
		const curWord = this.words[this.curWord];
		const answer = normalizeString(allEls.page1.input.value);
		allEls.page1.input.value = answer;
		const result = curWord.checkAnswer(answer);
		if (settings.repeatMode)
		{
			if (result)
			{
				if (this.firstTry) this.correct += 1;
				this.firstTry = true;
				this.curWord += 1;
			}
			else
			{
				this.firstTry = false;
			}
		}
		else
		{
			if (result) this.correct += 1;
			this.curWord += 1;
		}
		allEls.page1.answer.innerText = curWord.answer();
		allEls.page1.input.disabled = true;
		if (result) allEls.page1.input.classList.add("input-correct");
		else allEls.page1.input.classList.add("input-uncorrect");
		this.setLabels();
		this.state = "answer";
		allEls.page1.button.innerText = "Next";
	}
	private showResult()
	{
		allEls.page1.input.classList.remove("input-correct");
		allEls.page1.input.classList.remove("input-uncorrect");
		allEls.page1.input.disabled = true;
		allEls.page1.input.value = "";
		allEls.page1.question.innerText = "Результат";
		if (settings.repeatMode) allEls.page1.answer.innerText = `С первой попытки: ${Math.round(this.correct / this.words.length)}%`;
		else allEls.page1.answer.innerText = `Правильно: ${Math.round(this.correct / this.words.length)}%`;
		allEls.page1.button.innerText = "Again";
		this.state = "result";
	}
	private restart()
	{
		this.init(this.words);
		this.showQuestion();
	}
	public onOKButton()
	{
		switch (this.state) {
			case "question": this.checkAnswer(); break;
			case "answer": this.showQuestion(); break;
			case "result": this.restart(); break;
			default: console.error("switch default"); break;
		}
	}
}