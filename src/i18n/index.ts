import { guides as guidesEs, guidesUpdated as guidesUpdatedEs, type Guide } from '../data/guides';
import { guides as guidesEn, guidesUpdated as guidesUpdatedEn } from '../data/guides-en';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Idioma de una página a partir de `Astro.currentLocale`. */
export const getLang = (locale: string | undefined): Lang =>
	locale && locale in languages ? (locale as Lang) : defaultLang;

export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);
export const guidePath = (lang: Lang, slug: string) => `${homePath(lang)}${slug}/`;

export const guidesByLang: Record<Lang, { guides: Guide[]; updated: string }> = {
	es: { guides: guidesEs, updated: guidesUpdatedEs },
	en: { guides: guidesEn, updated: guidesUpdatedEn },
};

/** Ruta de una guía en un idioma, o `undefined` si aún no está traducida. */
export function findGuidePath(lang: Lang, key: string) {
	const guide = guidesByLang[lang].guides.find((item) => item.key === key);
	return guide && guidePath(lang, guide.slug);
}

/** Rutas de las versiones de una guía en cada idioma en que existe. */
export function guideAlternates(key: string) {
	const alternates: Partial<Record<Lang, string>> = {};
	for (const lang of Object.keys(languages) as Lang[]) {
		const path = findGuidePath(lang, key);
		if (path) alternates[lang] = path;
	}
	return alternates;
}

export const homeAlternates = Object.fromEntries(
	(Object.keys(languages) as Lang[]).map((lang) => [lang, homePath(lang)]),
) as Record<Lang, string>;

const es = {
	ogLocale: 'es_ES',
	homeNav: 'Inicio',
	guidesNav: 'Guías',
	languageNav: 'Idioma',
	madeBy: 'Hecho por',
	faqTitle: 'Preguntas frecuentes',
	otherGuides: 'Otras guías',
	tool: {
		actions: {
			markdown: { label: 'Quitar Markdown', title: 'Quita los símbolos de formato (**, ##, -, `…) del texto copiado de ChatGPT, Claude u otras IA' },
			'line-breaks': { label: 'Quitar saltos de línea', title: 'Une las líneas de cada párrafo y mantiene la separación entre párrafos' },
			spaces: { label: 'Quitar espacios extra', title: 'Elimina espacios dobles, espacios y caracteres invisibles, y líneas vacías sobrantes' },
			upper: { label: 'MAYÚSCULAS', title: 'Convierte todo a mayúsculas' },
			lower: { label: 'minúsculas', title: 'Convierte todo a minúsculas' },
			sentence: { label: 'Tipo oración', title: 'Mayúscula solo al principio de cada frase' },
		},
		editorLabel: 'Área de texto',
		placeholder: 'Pega aquí tu texto (Ctrl+V o Cmd+V)…',
		toolbarLabel: 'Transformar texto',
		copy: 'Copiar texto plano al portapapeles',
		copied: '¡Copiado!',
		words: ['palabra', 'palabras'],
		characters: ['carácter', 'caracteres'],
		privacy: 'Todo ocurre en tu navegador: el texto no se guarda ni se envía a ningún servidor.',
	},
};

/** Textos de la interfaz. El tipo obliga a que todos los idiomas tengan las mismas claves. */
export const ui: Record<Lang, typeof es> = {
	es,
	en: {
		ogLocale: 'en_US',
		homeNav: 'Home',
		guidesNav: 'Guides',
		languageNav: 'Language',
		madeBy: 'Made by',
		faqTitle: 'Frequently asked questions',
		otherGuides: 'More guides',
		tool: {
			actions: {
				markdown: { label: 'Remove Markdown', title: 'Removes formatting symbols (**, ##, -, `…) from text copied from ChatGPT, Claude or other AI tools' },
				'line-breaks': { label: 'Remove line breaks', title: 'Joins the lines of each paragraph and keeps the space between paragraphs' },
				spaces: { label: 'Remove extra spaces', title: 'Removes double spaces, invisible characters and extra blank lines' },
				upper: { label: 'UPPERCASE', title: 'Converts everything to uppercase' },
				lower: { label: 'lowercase', title: 'Converts everything to lowercase' },
				sentence: { label: 'Sentence case', title: 'Capitalizes only the first letter of each sentence' },
			},
			editorLabel: 'Text area',
			placeholder: 'Paste your text here (Ctrl+V or Cmd+V)…',
			toolbarLabel: 'Transform text',
			copy: 'Copy plain text to clipboard',
			copied: 'Copied!',
			words: ['word', 'words'],
			characters: ['character', 'characters'],
			privacy: 'Everything happens in your browser: your text is never stored or sent to any server.',
		},
	},
};
