class Word
{
	private words: string[];
	private translate: string;
	private main: boolean;
	public isMain = () => this.main;
	public question = () => this.translate;
	public answer = () => this.words[0];

	constructor(word: string | string[], translate: string, main = true)
	{
		if (typeof word == "string") this.words = [word];
		else this.words = word;
		for (let i = 0; i < this.words.length; i++) {
			const w = this.words[i];
			this.words[i] = normalizeString(w);
		}
		this.translate = translate;
		this.main = main;
	}

	public checkAnswer(answer: string)
	{
		let correct = false;
		for (let i = 0; i < this.words.length; i++) {
			if (answer == this.words[i])
			{
				correct = true;
				break;
			}
		}
		return correct;
	}
}
