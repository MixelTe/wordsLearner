"use strict";
const prefix = "wordsLearner_";
const settings = restoreSettings();
const allEls = init();
setSelect();
toPage(getPage());
window.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && e.target != allEls.page1.button)
        onOKButton();
});
window.addEventListener("popstate", (e) => {
    const state = e.state;
    if (typeof state == "number")
        toPage(state, false);
    if (state == null)
        toPage(0, false);
});
function init() {
    const els = [];
    document.body.innerHTML = "";
    Body([
        Div(["page", "page-1"], [
            Div("header", [
                Svg("btn-toPage", SVGs.settings.viewBox, SVGs.settings.paths, () => toPage(1)),
                Div("header-title-part", [], "## Часть", els, 1)
            ]),
            Div("footer", [], 'Артикли, слова в скобках и частицу "to" писать не обязательно'),
            Div("testBlock", [
                Div("testBlock-title1-block", [
                    Div("testBlock-title1", [], "Some text", els, 2),
                ]),
                Div("testBlock-title2-block", [
                    Div("testBlock-title2", [], "Some text", els, 3),
                ]),
                Div("testBlock-controls", [
                    Input("testBlock-input", "text", "", els, 4),
                    Button("testBlock-OKbutton", "OK", onOKButton, els, 5),
                ]),
                Div(["testBlock-lbl", "testBlock-lbl-correct"], [], "Correct: ## / ##", els, 6),
                Div(["testBlock-lbl", "testBlock-lbl-all"], [], "## / ##", els, 7),
            ]),
        ], undefined, els, 0),
        Div(["page", "page-2"], [
            Div("header", [
                Svg("btn-toPage", SVGs.backArrow.viewBox, SVGs.backArrow.paths, () => toPage(0)),
                // Svg("btn-toPage", SVGs.backArrow.viewBox, SVGs.backArrow.paths, () => history.back()),
                Div("header-title-part", [], "Настройки")
            ]),
            Div("page-body", [
                Div("settings-block", [
                    Div("settings-text", [], "Слова:"),
                    Select("select", [], els, 9)
                ]),
                Div("settings-block", [
                    Button([], "Посмотреть список слов", () => toPage(2))
                ]),
                Div("settings-block", [
                    CheckBox("checkbox", settings.shuffle, undefined, undefined, "checkbox1", (inp) => setSetting("shuffle", inp.checked)),
                    Label("settings-text", [], "Перемешивать слова", undefined, undefined, "checkbox1"),
                ]),
                // Div("settings-block", [
                // 	CheckBox("checkbox", settings.onlyMain, undefined, undefined, "checkbox2", (inp) => setSetting("onlyMain", inp.checked)),
                // 	Label("settings-text", [], "Только главные слова", undefined, undefined, "checkbox2"),
                // ]),
                Div("settings-block", [
                    CheckBox("checkbox", settings.repeatMode, undefined, undefined, "checkbox3", (inp) => setSetting("repeatMode", inp.checked)),
                    Label("settings-text", [], "Режим заучивания", undefined, undefined, "checkbox3"),
                ]),
            ]),
        ], undefined, els, 8),
        Div(["page", "page-3"], [
            Div("header", [
                Svg("btn-toPage", SVGs.backArrow.viewBox, SVGs.backArrow.paths, () => toPage(1)),
                // Svg("btn-toPage", SVGs.backArrow.viewBox, SVGs.backArrow.paths, () => history.back()),
                Div("header-title-part", [], "Список слов", els, 11)
            ]),
            Div("page-body", [
                Table("word-list", [], els, 12),
            ]),
        ], undefined, els, 10),
    ]);
    els[4].spellcheck = false;
    return {
        page1: {
            page: els[0],
            title: els[1],
            question: els[2],
            answer: els[3],
            input: els[4],
            button: els[5],
            correct: els[6],
            all: els[7],
        },
        page2: {
            page: els[8],
            select: els[9],
        },
        page3: {
            page: els[10],
            title: els[11],
            wordsTable: els[12],
        }
    };
}
function toPage(page, pushState = true) {
    document.title = "Words Learner | " + AllParts[settings.words].name;
    if (page == 1) {
        allEls.page1.page.classList.remove("page-active");
        allEls.page2.page.classList.add("page-active");
        allEls.page3.page.classList.remove("page-active");
    }
    else if (page == 2) {
        allEls.page1.page.classList.remove("page-active");
        allEls.page2.page.classList.remove("page-active");
        allEls.page3.page.classList.add("page-active");
        showAllWords();
    }
    else {
        allEls.page1.page.classList.add("page-active");
        allEls.page2.page.classList.remove("page-active");
        allEls.page3.page.classList.remove("page-active");
        reStart();
    }
    if (pushState)
        history.pushState(page, "");
}
function showAllWords() {
    if (settings.words == -1)
        settings.words = AllParts.length - 1;
    const words = AllParts[settings.words].words;
    const title = AllParts[settings.words].name;
    allEls.page3.title.innerText = title;
    allEls.page3.wordsTable.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const tr = initEl("tr", [], [
            initEl("td", [], [], word.answer(), undefined, undefined),
            initEl("td", [], [], word.question(), undefined, undefined),
        ], undefined, undefined, undefined);
        allEls.page3.wordsTable.appendChild(tr);
    }
}
function getPage() {
    const currentState = history.state;
    if (currentState == 1)
        return 1;
    if (currentState == 2)
        return 2;
    return 0;
}
function restoreSettings() {
    const settings = {
        shuffle: getBoolFromLS("shuffle", true),
        onlyMain: getBoolFromLS("onlyMain", false),
        repeatMode: getBoolFromLS("repeatMode", false),
        words: getWordsFromParams(),
        maxWords: getIntFromLS("maxWords", -1),
    };
    return settings;
}
function getWordsFromParams() {
    const url = new URL(window.location.href);
    const w = url.searchParams.get("w");
    return AllParts.findIndex(v => v.id == w);
}
function getBoolFromLS(key, def) {
    const v = localStorage.getItem(prefix + key);
    if (v == null)
        return def;
    return v == "1";
}
function getIntFromLS(key, def) {
    const v = localStorage.getItem(prefix + key);
    if (v == null)
        return def;
    const num = parseInt(v);
    return isNaN(num) ? def : num;
}
function setSetting(setting, v) {
    settings[setting] = v;
    if (typeof v == "boolean")
        localStorage.setItem(prefix + setting, `${v ? 1 : 0}`);
    else
        localStorage.setItem(prefix + setting, `${v}`);
}
function setSelect() {
    const select = allEls.page2.select;
    let group = null;
    for (let i = 0; i < AllParts.length; i++) {
        const part = AllParts[i];
        if (part.blank) {
            group = document.createElement("optgroup");
            group.label = part.name;
            select.appendChild(group);
        }
        else {
            const option = Select_Option("option", part.name, i);
            if (group)
                group.appendChild(option);
            else
                select.appendChild(option);
        }
    }
    const maxWords = AllParts.length - 1;
    const curPart = settings.words;
    if (curPart == -1 || settings.maxWords < maxWords)
        settings.words = maxWords;
    localStorage.setItem(prefix + "maxWords", `${maxWords}`);
    if (curPart != -1)
        localStorage.setItem(prefix + "words", `${settings.words}`);
    select.value = `${settings.words}`;
    select.addEventListener("change", () => {
        // localStorage.setItem(prefix + "words", `${select.value}`);
        settings.words = parseInt(select.value);
        document.title = "Words Learner | " + AllParts[settings.words].name;
        const url = new URL(window.location.href);
        url.searchParams.set("w", `${AllParts[settings.words].id}`);
        history.replaceState(1, "", url.toString());
    });
}
