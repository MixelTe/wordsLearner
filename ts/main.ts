const prefix = "wordsLearner_";
const settings = restoreSettings();
const allEls = init();

setSelect();
toPage(getPage());
window.addEventListener("keypress", (e) =>
{
	if (e.key == "Enter" && e.target != allEls.page1.button) onOKButton();
});
window.addEventListener("popstate", (e) =>
{
	const state = e.state;
	if (typeof state == "number") toPage(state);
	if (state == null) toPage(0);
});

function init()
{
	const els = <HTMLElement[]>[];
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
			Div("settings-body", [
				Div("settings-block", [
					Div("settings-text", [], "Слова:"),
					Select("select", [], els, 9)
				]),
				Div("settings-block", [
					CheckBox("checkBox", settings.shuffle, undefined, undefined, "checkbox1", (inp) => setSetting("shuffle", inp.checked)),
					Label("settings-text", [], "Перемешивать слова", undefined, undefined, "checkbox1"),
				]),
				Div("settings-block", [
					CheckBox("checkBox", settings.onlyMain, undefined, undefined, "checkbox2", (inp) => setSetting("onlyMain", inp.checked)),
					Label("settings-text", [], "Только главные слова", undefined, undefined, "checkbox2"),
				]),
				Div("settings-block", [
					CheckBox("checkBox", settings.repeatMode, undefined, undefined, "checkbox3", (inp) => setSetting("repeatMode", inp.checked)),
					Label("settings-text", [], "Режим заучивания", undefined, undefined, "checkbox3"),
				]),
			]),
		], undefined, els, 8),
	]);

	els[4].spellcheck = false;

	return {
		page1: {
			page: <HTMLDivElement>els[0],
			title: <HTMLDivElement>els[1],
			question: <HTMLDivElement>els[2],
			answer: <HTMLDivElement>els[3],
			input: <HTMLInputElement>els[4],
			button: <HTMLDivElement>els[5],
			correct: <HTMLDivElement>els[6],
			all: <HTMLDivElement>els[7],
		},
		page2: {
			page: <HTMLDivElement>els[8],
			select: <HTMLSelectElement>els[9],
		}
	}
}
function toPage(page: number)
{
	if (page == 0)
	{
		allEls.page1.page.classList.add("page-active");
		allEls.page2.page.classList.remove("page-active");
		reStart();
	}
	else
	{
		allEls.page2.page.classList.add("page-active");
		allEls.page1.page.classList.remove("page-active");
	}
	history.pushState(page, "");
}

function getPage()
{
	const currentState = history.state;
	if (currentState == 1) return 1;
	return 0;
}

function restoreSettings()
{
	const settings = <Settings>{
		shuffle: getBoolFromLS("shuffle", false),
		onlyMain: getBoolFromLS("onlyMain", false),
		repeatMode: getBoolFromLS("repeatMode", false),
		words: getIntFromLS("words", -1),
		maxWords: getIntFromLS("maxWords", -1),
	}
	return settings;
}
function getBoolFromLS(key: string, def: boolean)
{
	const v = localStorage.getItem(prefix + key);
	if (v == null) return def;
	return v == "1";
}
function getIntFromLS(key: string, def: number)
{
	const v = localStorage.getItem(prefix + key);
	if (v == null) return def;
	const num = parseInt(v);
	return isNaN(num) ? def : num;
}
function setSetting(setting: keyof Settings, v: any)
{
	settings[setting] = <never>v;
	if (typeof v == "boolean") localStorage.setItem(prefix + setting, `${v ? 1 : 0}`);
	else localStorage.setItem(prefix + setting, `${v}`);
}
function setSelect()
{
	const select = allEls.page2.select;
	let group: HTMLOptGroupElement | null = null;
	for (let i = 0; i < AllParts.length; i++) {
		const part = AllParts[i];
		if (part.blank)
		{
			group = document.createElement("optgroup");
			group.label = part.name;
			select.appendChild(group);
		}
		else
		{
			const option = Select_Option("option", part.name, i);
			if (group) group.appendChild(option);
			else select.appendChild(option);
		}
	}
	const maxWords = AllParts.length - 1;
	const curPart = settings.words;
	if (curPart == -1 || settings.maxWords < maxWords) settings.words = maxWords;
	localStorage.setItem(prefix + "maxWords", `${maxWords}`);
	if (curPart != -1) localStorage.setItem(prefix + "words", `${settings.words}`);
	select.value = `${settings.words}`;
	select.addEventListener("change", () =>
	{
		localStorage.setItem(prefix + "words", `${select.value}`);
		settings.words = parseInt(select.value);
	});
}

interface Settings
{
	shuffle: boolean,
	onlyMain: boolean,
	repeatMode: boolean,
	words: number,
	maxWords: number,
}