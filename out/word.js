"use strict";
class Word {
    words;
    translate;
    main;
    isMain = () => this.main;
    question = () => this.translate;
    answer = () => this.words[0];
    constructor(word, translate, main = true) {
        if (typeof word == "string")
            this.words = [word];
        else
            this.words = word;
        for (let i = 0; i < this.words.length; i++) {
            const w = this.words[i];
            this.words[i] = normalizeString(w);
        }
        this.translate = titleCase(translate);
        this.main = main;
    }
    checkAnswer(answer) {
        let correct = false;
        for (let i = 0; i < this.words.length; i++) {
            if (answer == this.words[i]) {
                correct = true;
                break;
            }
        }
        return correct;
    }
}
