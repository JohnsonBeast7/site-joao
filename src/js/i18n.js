import translations from './translations.js';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'pt';

const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };

let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

function applyTranslations(lang) {
  const t = translations[lang];
  const year = new Date().getFullYear();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    const value = t[key].replace('{year}', year);

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.innerHTML = value;
    }
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
  updateFlagButton(lang);
}

function updateFlagButton(lang) {
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = flags[lang];
}

function buildLangMenu() {
  const wrapper = document.getElementById('lang-switcher');
  if (!wrapper) return;

  const btn = document.createElement('button');
  btn.id = 'lang-btn';
  btn.textContent = flags[currentLang];
  btn.className = 'text-2xl leading-none cursor-pointer select-none';
  btn.setAttribute('aria-label', 'Selecionar idioma');

  const menu = document.createElement('div');
  menu.id = 'lang-menu';
  menu.className = 'absolute right-0 top-full mt-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hidden z-50';

  const options = [
    { lang: 'pt', label: 'Português' },
    { lang: 'en', label: 'English' },
    { lang: 'es', label: 'Español' },
  ];

  options.forEach(({ lang, label }) => {
    const item = document.createElement('button');
    item.className = 'flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition duration-150 whitespace-nowrap cursor-pointer';
    item.innerHTML = `<span class="text-lg">${flags[lang]}</span><span>${label}</span>`;
    item.addEventListener('click', () => {
      setLang(lang);
      menu.classList.add('hidden');
    });
    menu.appendChild(item);
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  wrapper.appendChild(btn);
  wrapper.appendChild(menu);
}

export function initI18n() {
  buildLangMenu();
  applyTranslations(currentLang);
}
