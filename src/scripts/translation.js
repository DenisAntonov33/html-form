const enData = require('./langs/en.json');
const ruData = require('./langs/ru.json');

const locales = {
	en: enData,
	ru: ruData,
}

const messages = document.querySelectorAll('[elem-lang-id]');

function updateLocales (locale) {
	messages.forEach(e => {
		const messageId = e.getAttribute('elem-lang-id');
		e.innerText = locales[locale][messageId];
	})
}

const localeSelectors = document.querySelectorAll('[toggle-id]')
console.log(localeSelectors);
localeSelectors.forEach(item => item.addEventListener('change', e => {
	locales[e.target.value] && updateLocales(e.target.value);
}))

module.exports.locales = locales;
module.exports.updateLocales = updateLocales;
module.exports.localeSelectors = localeSelectors;
module.exports.messages = messages;