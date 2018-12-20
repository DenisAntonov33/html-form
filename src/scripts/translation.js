const enData = require('./langs/en.json');
const ruData = require('./langs/ru.json');
const arData = require('./langs/ar.json');

const locales = {
	en: enData,
	ru: ruData,
	ar: arData,
}

const messages = document.querySelectorAll('[elem-lang-id]');
const body = document.querySelector('body');

function updateLocales (locale) {
	messages.forEach(e => {
		const messageId = e.getAttribute('elem-lang-id');
		e.innerText = locales[locale][messageId];
	})
}

const localeSelectors = document.querySelectorAll('[toggle-id]')

localeSelectors.forEach(item => item.addEventListener('change', e => {
	body.className = '';
	const currentDirection = locales[e.target.value];
	if (currentDirection['direction'] === 'rtl') body.className = 'arabic';
	locales[e.target.value] && updateLocales(e.target.value);
}))

module.exports.updateLocales = updateLocales;
module.exports.localeSelectors = localeSelectors;