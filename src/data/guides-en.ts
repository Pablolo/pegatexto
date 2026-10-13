import { k, type Guide } from './guides';

/** Fecha de la última revisión de las guías en inglés (AAAA-MM-DD). */
export const guidesUpdated = '2026-10-13';

const toolTip = `<p>If the shortcut doesn't work in your app, paste the text in the box above, click <strong>Copy plain text</strong> and paste it wherever you want: it will arrive without any formatting.</p>`;

/**
 * Guías en inglés. Cada una debe usar el mismo `key` que su versión en castellano
 * (en `guides.ts`) para que se enlacen entre sí con hreflang y el selector de idioma.
 */
export const guides: Guide[] = [
	{
		key: 'word',
		slug: 'paste-without-formatting-word',
		navLabel: 'Word',
		summary: 'The shortcut, Paste Options and how to make Word always paste without formatting.',
		title: 'How to Paste Without Formatting in Word (Windows & Mac) | Pegatexto',
		description:
			'Learn how to paste without formatting in Word with a keyboard shortcut, the Paste Options menu, or by setting Word to always keep text only.',
		h1: 'How to paste without formatting in Word',
		lead: `In Word for Windows (Microsoft 365) the shortcut is ${k('Ctrl', 'Shift', 'V')}. You can also clean the text here and paste it into Word already unformatted.`,
		sections: [
			{
				heading: 'With the keyboard shortcut',
				html: `<p>In current versions of Word for Windows included with Microsoft 365, ${k('Ctrl', 'Shift', 'V')} pastes text only, without fonts, colors or links.</p>
<p>In older versions of Word the same shortcut does something else (it pastes the <em>formatting</em> copied with the Format Painter), so if you don't get the expected result, use any of the methods below.</p>`,
			},
			{
				heading: 'With Paste Options',
				html: `<ol>
<li>Paste as usual with ${k('Ctrl', 'V')}.</li>
<li>Press ${k('Ctrl')} (just that key) to open the <strong>Paste Options</strong> menu.</li>
<li>Press ${k('T')} or choose the <strong>Keep Text Only</strong> icon.</li>
</ol>
<p>You'll also find it on the <strong>Home</strong> tab: click the arrow under <strong>Paste</strong> and choose <strong>Keep Text Only</strong>.</p>`,
			},
			{
				heading: 'Make Word always paste without formatting',
				html: `<ol>
<li>Go to <strong>File › Options › Advanced</strong>.</li>
<li>In the <strong>Cut, copy, and paste</strong> section, find <strong>Pasting from other programs</strong>.</li>
<li>Choose <strong>Keep Text Only</strong> and click OK.</li>
</ol>
<p>From then on, everything you paste from your browser, email or other programs will arrive as plain text.</p>`,
			},
			{
				heading: 'In Word for Mac',
				html: `<p>Use <strong>Edit › Paste Special…</strong> and choose <strong>Unformatted Text</strong>. If you'd rather have the text take on the style of your document, use <strong>Edit › Paste and Match Formatting</strong>.</p>`,
			},
			{
				heading: 'If you already pasted formatted text',
				html: `<p>Select the text and click the <strong>Clear All Formatting</strong> button (the “A” with an eraser) on the <strong>Home</strong> tab. The text will go back to the document's normal style.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: "Why doesn't Ctrl+Shift+V paste without formatting in my Word?",
				answer:
					'The shortcut to paste text only came to Word for Windows with Microsoft 365. In earlier versions, Ctrl+Shift+V pastes the formatting copied with the Format Painter. In that case, use Paste Options (Ctrl, then T) or set Word to always keep text only.',
			},
			{
				question: 'Does pasting without formatting also remove images and tables?',
				answer:
					'Yes. With “Keep Text Only”, images are removed and tables are turned into tab-separated text. If you need to keep the table, paste with formatting and then use “Clear All Formatting”.',
			},
		],
	},
	{
		key: 'mac',
		slug: 'paste-without-formatting-mac',
		navLabel: 'Mac',
		summary: 'The universal macOS shortcut and what to do in TextEdit, Google Docs or Word.',
		title: 'How to Paste Without Formatting on Mac: Keyboard Shortcut | Pegatexto',
		description:
			'The shortcut to paste without formatting on Mac is Cmd+Option+Shift+V. Learn how to use it in Safari, Chrome, Pages, Notes, Mail, TextEdit and Google Docs.',
		h1: 'How to paste without formatting on Mac',
		lead: `In most Mac apps the shortcut is ${k('⌘ Cmd', '⌥ Option', '⇧ Shift', 'V')}: it pastes the text and matches the style of your document.`,
		sections: [
			{
				heading: 'The general macOS shortcut',
				html: `<p>${k('⌘ Cmd', '⌥ Option', '⇧ Shift', 'V')} is the shortcut for <strong>Edit › Paste and Match Style</strong>, which pastes the text using the style of the destination. It works in Safari, Chrome, Pages, Keynote, Notes, Mail and most native apps.</p>
<p>If it does nothing in an app, open the <strong>Edit</strong> menu: if the option exists, you'll see it there along with its shortcut.</p>`,
			},
			{
				heading: 'In Google Docs',
				html: `<p>In Google Docs the shortcut is shorter: ${k('⌘ Cmd', '⇧ Shift', 'V')}, or <strong>Edit › Paste without formatting</strong>.</p>`,
			},
			{
				heading: 'In TextEdit',
				html: `<p>TextEdit uses rich text by default. To remove all formatting from a document, use <strong>Format › Make Plain Text</strong> (${k('⌘ Cmd', '⇧ Shift', 'T')}).</p>`,
			},
			{
				heading: 'In Word for Mac',
				html: `<p>Use <strong>Edit › Paste Special…</strong> and choose <strong>Unformatted Text</strong>. There are more options in the <a href="/en/paste-without-formatting-word/">guide to pasting without formatting in Word</a>.</p>`,
			},
			{
				heading: 'Make Cmd+V always paste without formatting',
				html: `<p>In <strong>System Settings › Keyboard › Keyboard Shortcuts › App Shortcuts</strong> you can create a new shortcut: type the exact name of the option as it appears in the app's <strong>Edit</strong> menu (for example, <em>Paste and Match Style</em>) and assign it ${k('⌘ Cmd', 'V')}.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: 'How do I paste without formatting on iPhone or iPad?',
				answer:
					"iOS and iPadOS don't have a universal shortcut to paste without formatting. The easiest way is to open Pegatexto in Safari, paste the text in the box, tap “Copy plain text” and paste it into the destination app.",
			},
			{
				question: 'Does Cmd+Option+Shift+V remove links?',
				answer:
					"Yes. The text is pasted with the destination document's style, so the original links, bold text, colors and fonts are lost.",
			},
		],
	},
	{
		key: 'windows',
		slug: 'paste-without-formatting-windows',
		navLabel: 'Windows',
		summary: 'Ctrl+Shift+V, PowerToys and how to paste without formatting in any program.',
		title: 'How to Paste Without Formatting on Windows: Ctrl+Shift+V | Pegatexto',
		description:
			"On Windows, Ctrl+Shift+V pastes without formatting in browsers and many apps. Learn what to do when it doesn't work and how to paste plain text in any program.",
		h1: 'How to paste without formatting on Windows',
		lead: `On Windows the shortcut is ${k('Ctrl', 'Shift', 'V')}. It works in Chrome, Edge, Firefox, Google Docs, Gmail and in Word with Microsoft 365.`,
		sections: [
			{
				heading: 'With Ctrl+Shift+V',
				html: `<p>${k('Ctrl', 'Shift', 'V')} pastes text only in browsers (Chrome, Edge, Firefox) and in everything you use inside them: Gmail, Outlook on the web, Google Docs, WordPress, Notion and most online editors.</p>
<p>In desktop programs it depends on each one. Word supports it in Microsoft 365; for other versions, see the <a href="/en/paste-without-formatting-word/">Word guide</a>.</p>`,
			},
			{
				heading: 'In any program with PowerToys',
				html: `<p><a href="https://learn.microsoft.com/en-us/windows/powertoys/" rel="noopener">PowerToys</a> is a free Microsoft utility. Its <strong>Advanced Paste</strong> feature lets you paste as plain text in any app with ${k('Win', 'Ctrl', 'Alt', 'V')}.</p>`,
			},
			{
				heading: 'The Notepad trick',
				html: `<p>The classic method is to paste the text into Notepad, copy it again and paste it where you need it. Pegatexto does exactly the same, but without opening another app and with extra tools to remove line breaks or extra spaces.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: "Why doesn't Ctrl+Shift+V work in some programs?",
				answer:
					"Each program decides what that shortcut does. Browsers use it to paste without formatting, but some desktop apps reserve it for other features or don't support it. In those cases you can use PowerToys or run the text through Pegatexto.",
			},
			{
				question: 'Is there a way to make Ctrl+V always paste without formatting?',
				answer:
					"Windows doesn't have a global setting. Some programs do, like Word and Outlook (“Pasting from other programs: Keep Text Only” in the advanced options).",
			},
		],
	},
	{
		key: 'google-docs',
		slug: 'paste-without-formatting-google-docs',
		navLabel: 'Google Docs',
		summary: 'The shortcut to paste without formatting and how to clear formatting from text you already pasted.',
		title: 'How to Paste Without Formatting in Google Docs | Pegatexto',
		description:
			'Paste without formatting in Google Docs with Ctrl+Shift+V (Cmd+Shift+V on Mac) or from the Edit menu. Plus, how to clear formatting from text you already pasted.',
		h1: 'How to paste without formatting in Google Docs',
		lead: `In Google Docs the shortcut is ${k('Ctrl', 'Shift', 'V')} on Windows and ${k('⌘ Cmd', '⇧ Shift', 'V')} on Mac.`,
		sections: [
			{
				heading: 'With the shortcut or the menu',
				html: `<p>Press ${k('Ctrl', 'Shift', 'V')} (or ${k('⌘ Cmd', '⇧ Shift', 'V')} on Mac) to paste the text with your document's style. If you prefer the mouse, go to <strong>Edit › Paste without formatting</strong>.</p>`,
			},
			{
				heading: 'If you already pasted formatted text',
				html: `<p>Select the text and press ${k('Ctrl', '\\')} (${k('⌘ Cmd', '\\')} on Mac), or go to <strong>Format › Clear formatting</strong>.</p>`,
			},
			{
				heading: 'When copying from Google Docs to somewhere else',
				html: `<p>When you copy text from a document and paste it into a form, a CMS or an email, the Google Docs formatting comes along with it. Use ${k('Ctrl', 'Shift', 'V')} at the destination if it's a website.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: 'How do I paste without formatting in Google Sheets?',
				answer:
					"In Google Sheets, Ctrl+Shift+V (Cmd+Shift+V on Mac) pastes values only, without formatting. It's also under Edit › Paste special › Values only.",
			},
			{
				question: 'Does it work in the Google Docs mobile app?',
				answer:
					"The mobile app doesn't have an equivalent shortcut. You can paste the text into Pegatexto from your phone's browser, copy it clean and paste it into the document.",
			},
		],
	},
	{
		key: 'gmail',
		slug: 'remove-formatting-gmail',
		navLabel: 'Gmail',
		summary: 'How to paste without formatting while composing and how to send an email in plain text.',
		title: 'How to Remove Formatting in Gmail When Pasting Text | Pegatexto',
		description:
			'Paste without formatting in Gmail with Ctrl+Shift+V, remove formatting from text you already pasted with Ctrl+\\ or turn on plain text mode.',
		h1: 'How to remove formatting in Gmail',
		lead: `When composing an email in Gmail, paste with ${k('Ctrl', 'Shift', 'V')} (${k('⌘ Cmd', '⇧ Shift', 'V')} on Mac) so the text arrives without formatting.`,
		sections: [
			{
				heading: 'Paste without formatting while composing',
				html: `<p>${k('Ctrl', 'Shift', 'V')} pastes the text with Gmail's default font and size, without the bold, colors or backgrounds carried over from the original website or document.</p>`,
			},
			{
				heading: 'Remove formatting from text you already pasted',
				html: `<p>Select the text and press ${k('Ctrl', '\\')} (${k('⌘ Cmd', '\\')} on Mac). You can also open the <strong>formatting options</strong> (the “A” icon in the bottom toolbar) and click <strong>Remove formatting</strong>.</p>`,
			},
			{
				heading: 'Send the email in plain text',
				html: `<p>In the compose window, open the <strong>⋮ More options</strong> menu and turn on <strong>Plain text mode</strong>. The email will be sent without any formatting, not even bold text or links with anchor text.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: 'Why does text pasted into Gmail come out in a different size or color?',
				answer:
					"Because when you copy from a website or a document, its formatting (font, size, color and background) is copied too. If you paste with Ctrl+Shift+V or run the text through Pegatexto, the email keeps Gmail's default style.",
			},
			{
				question: 'Does plain text mode affect the emails I receive?',
				answer:
					'No. It only affects the email you are writing. You can turn it on and off for each message.',
			},
		],
	},
	{
		key: 'outlook',
		slug: 'paste-without-formatting-outlook',
		navLabel: 'Outlook',
		summary: 'Shortcuts and settings to paste without formatting in classic Outlook, new Outlook and Outlook on the web.',
		title: 'How to Paste Without Formatting in Outlook | Pegatexto',
		description:
			'Paste without formatting in Outlook with Paste Options or Ctrl+Shift+V, and set classic Outlook to always keep text only.',
		h1: 'How to paste without formatting in Outlook',
		lead: `In new Outlook and Outlook on the web, paste with ${k('Ctrl', 'Shift', 'V')}. In classic Outlook, use the <strong>Keep Text Only</strong> option.`,
		sections: [
			{
				heading: 'In classic Outlook for Windows',
				html: `<ol>
<li>Paste as usual with ${k('Ctrl', 'V')}.</li>
<li>Press ${k('Ctrl')} to open <strong>Paste Options</strong>.</li>
<li>Press ${k('T')} or choose <strong>Keep Text Only</strong>.</li>
</ol>
<p>It's also on the <strong>Message</strong> tab, under the <strong>Paste</strong> dropdown.</p>`,
			},
			{
				heading: 'Make classic Outlook always paste without formatting',
				html: `<ol>
<li>Go to <strong>File › Options › Mail</strong> and click <strong>Editor Options</strong>.</li>
<li>Under <strong>Advanced</strong>, find the <strong>Cut, copy, and paste</strong> section.</li>
<li>In <strong>Pasting from other programs</strong>, choose <strong>Keep Text Only</strong>.</li>
</ol>`,
			},
			{
				heading: 'In new Outlook and Outlook on the web',
				html: `<p>Paste with ${k('Ctrl', 'Shift', 'V')}. If you want the whole message sent as plain text, switch the message format to <strong>plain text</strong> on the message's <strong>Options</strong> tab.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: 'Why does Outlook change the font when I paste text?',
				answer:
					"By default, Outlook keeps the formatting of the source text. If you paste with “Keep Text Only” or set “Keep Text Only” in the editor options, the text will take on your message's font.",
			},
			{
				question: 'Is pasting without formatting the same as sending the email in plain text?',
				answer:
					'No. Pasting without formatting only affects the text you paste; the rest of the email can still have bold text or links. Sending in plain text removes the formatting from the whole message.',
			},
		],
	},
	{
		key: 'chatgpt',
		slug: 'remove-chatgpt-formatting',
		navLabel: 'ChatGPT & AI',
		summary: 'Remove the asterisks, hash signs and invisible characters from ChatGPT, Claude or Gemini text.',
		title: 'Remove ChatGPT Formatting: Asterisks, ## and More | Pegatexto',
		description:
			'Copy text from ChatGPT, Claude or Gemini without asterisks, hash signs or invisible characters. Paste it, click “Remove Markdown” and copy it clean.',
		h1: 'Remove formatting from ChatGPT text',
		lead: 'Paste text from ChatGPT, Claude or Gemini and click <strong>Remove Markdown</strong>: the asterisks, hash signs and other formatting symbols disappear.',
		sections: [
			{
				heading: 'Why does ChatGPT text come with asterisks and hash signs?',
				html: `<p>ChatGPT, Claude, Gemini and most AI assistants write their answers in <strong>Markdown</strong>, a format that uses symbols to mark up style: <code>**bold**</code>, <code>## heading</code>, <code>- bullet</code>.</p>
<p>When you copy an answer, depending on the button you use and where you paste it, the text arrives either formatted (fonts, sizes, headings) or with the Markdown symbols showing. The second one happens mostly when pasting into forms, CMSs or code editors, or when pasting without formatting with ${k('Ctrl', 'Shift', 'V')}.</p>`,
			},
			{
				heading: 'How to remove formatting from ChatGPT, Claude or Gemini',
				html: `<ol>
<li>Copy the AI's answer (with its copy button or by selecting it).</li>
<li>Paste it in the box above: the visual formatting disappears when you paste.</li>
<li>Click <strong>Remove Markdown</strong> to get rid of asterisks, hash signs and other symbols.</li>
<li>Click <strong>Remove extra spaces</strong> to clean up double spaces and invisible characters.</li>
<li>Copy the result with <strong>Copy plain text</strong> and paste it wherever you want.</li>
</ol>
<p>If something doesn't turn out as expected, ${k('Ctrl', 'Z')} (${k('⌘ Cmd', 'Z')} on Mac) undoes the last change.</p>`,
			},
			{
				heading: 'What the “Remove Markdown” button does',
				html: `<ul>
<li><strong>Bold, italics and strikethrough</strong>: removes the asterisks, underscores and tildes, and keeps the word.</li>
<li><strong>Headings</strong>: removes the hash signs (<code>#</code>, <code>##</code>…) at the start of the line.</li>
<li><strong>Lists</strong>: turns bullet dashes and asterisks into bullet points (•). Numbered lists stay as they are.</li>
<li><strong>Links and images</strong>: keeps only the link text, without the URL in parentheses.</li>
<li><strong>Code</strong>: removes the backticks and leaves the contents of code blocks untouched.</li>
<li><strong>Tables</strong>: removes the pipes and separates columns with tabs, so you can paste them straight into Excel or Google Sheets.</li>
<li><strong>Quotes and dividers</strong>: removes the <code>&gt;</code> at the start of lines and the <code>---</code> lines.</li>
</ul>`,
			},
			{
				heading: 'Invisible characters in AI text',
				html: `<p>Sometimes AI-generated text includes characters you can't see: special spaces (such as the narrow or non-breaking space) or zero-width characters. They can cause odd line breaks, make word searches fail or cause problems when pasting into forms.</p>
<p>The <strong>Remove extra spaces</strong> button deletes them or turns them into regular spaces.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: 'Are invisible characters an AI watermark?',
				answer:
					"It's best not to treat them that way. They are typographic characters that also show up in text written by people, and they are not a reliable way to tell whether a text was written by AI. Removing them makes the text cleaner, but it doesn't change where it came from.",
			},
			{
				question: 'Does it work with Claude, Gemini, Copilot and other AI tools?',
				answer:
					'Yes. Almost every AI assistant uses Markdown to format its answers, so the “Remove Markdown” button works the same with ChatGPT, Claude, Gemini, Copilot, Perplexity or DeepSeek.',
			},
			{
				question: 'How do I paste a ChatGPT answer into Word and keep the headings and bold text?',
				answer:
					"Copy the answer with ChatGPT's copy button and paste it into Word with a regular Ctrl+V: the formatting is usually converted into Word headings and bold text. Pegatexto is for the opposite case, when you want the text without any formatting.",
			},
		],
	},
	{
		key: 'line-breaks',
		slug: 'remove-line-breaks',
		navLabel: 'Remove line breaks',
		summary: 'Join the broken lines from a PDF or an email without losing your paragraphs.',
		title: 'Remove Line Breaks from Text Online | Pegatexto',
		description:
			'Remove line breaks from text copied from a PDF or an email in one click. Joins the lines of each paragraph and keeps the space between paragraphs.',
		h1: 'Remove line breaks from text',
		lead: 'Paste your text and click <strong>Remove line breaks</strong>: it joins the lines of each paragraph and keeps the space between paragraphs.',
		sections: [
			{
				heading: 'Why do extra line breaks appear?',
				html: `<p>When you copy text from a PDF, a plain text email or a scanned document, each visual line usually comes through as a separate line. When you paste it somewhere else, sentences end up broken halfway.</p>`,
			},
			{
				heading: 'How to use it',
				html: `<ol>
<li>Paste the text in the box above.</li>
<li>Click <strong>Remove line breaks</strong>. If you only want to fix part of it, select that part first.</li>
<li>If double spaces are left, click <strong>Remove extra spaces</strong>.</li>
<li>Copy the result with <strong>Copy plain text</strong>.</li>
</ol>
<p>Made a mistake? ${k('Ctrl', 'Z')} (${k('⌘ Cmd', 'Z')} on Mac) undoes the change.</p>`,
			},
			{
				heading: 'Other tools included',
				html: `<ul>
<li><strong>Remove Markdown</strong>: removes asterisks, hash signs and other symbols from text copied from ChatGPT or other AI tools.</li>
<li><strong>Remove extra spaces</strong>: removes double spaces, spaces at the start and end of lines, invisible characters and extra blank lines.</li>
<li><strong>UPPERCASE</strong>, <strong>lowercase</strong> and <strong>Sentence case</strong>: change the capitalization of the text.</li>
<li><strong>Counter</strong>: always shows how many words and characters the text has.</li>
</ul>`,
			},
		],
		faq: [
			{
				question: 'Will I lose my paragraphs when removing line breaks?',
				answer:
					'No. The blank lines that separate paragraphs are kept: only the lines that belong to the same paragraph are joined.',
			},
			{
				question: 'What about words hyphenated at the end of a line?',
				answer:
					"The hyphen is kept, because it isn't always possible to tell whether it's part of the word. Check the result if the original text had words split across lines.",
			},
		],
	},
];
