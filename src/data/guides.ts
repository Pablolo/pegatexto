export interface FaqItem {
	question: string;
	answer: string;
}

export interface Guide {
	slug: string;
	/** Texto corto para enlaces de navegación. */
	navLabel: string;
	/** Frase breve para la tarjeta de la portada. */
	summary: string;
	title: string;
	description: string;
	h1: string;
	/** Subtítulo bajo el H1; admite HTML (p. ej. <kbd>). */
	lead: string;
	/** Secciones de la guía; `html` admite HTML. */
	sections: { heading: string; html: string }[];
	faq: FaqItem[];
}

/** Fecha de la última revisión de las guías (AAAA-MM-DD). */
export const guidesUpdated = '2026-10-09';

export const publisher = {
	'@type': 'Organization',
	name: '7Bits',
	url: 'https://sietebits.com',
};

/** Devuelve un atajo de teclado maquetado: k('Ctrl', 'V') → <kbd>Ctrl</kbd>+<kbd>V</kbd> */
export const k = (...keys: string[]) =>
	`<span class="whitespace-nowrap">${keys.map((key) => `<kbd>${key}</kbd>`).join('+')}</span>`;

const toolTip = `<p>Si el atajo no funciona en tu programa, pega el texto en el cuadro de arriba, pulsa <strong>Copiar texto plano</strong> y pégalo donde quieras: llegará sin ningún formato.</p>`;

export const guides: Guide[] = [
	{
		slug: 'pegar-sin-formato-word',
		navLabel: 'Word',
		summary: 'Atajo, opciones de pegado y cómo hacer que Word pegue siempre sin formato.',
		title: 'Cómo pegar sin formato en Word (Windows y Mac) | Pegatexto',
		description:
			'Aprende a pegar sin formato en Word con el atajo de teclado, las opciones de pegado o configurando Word para que pegue siempre solo texto.',
		h1: 'Cómo pegar sin formato en Word',
		lead: `En Word para Windows (Microsoft 365) el atajo es ${k('Ctrl', 'Mayús', 'V')}. También puedes limpiar el texto aquí y pegarlo en Word ya sin formato.`,
		sections: [
			{
				heading: 'Con el atajo de teclado',
				html: `<p>En las versiones actuales de Word para Windows incluidas en Microsoft 365, ${k('Ctrl', 'Mayús', 'V')} pega solo el texto, sin fuentes, colores ni enlaces.</p>
<p>En versiones antiguas de Word ese mismo atajo hace otra cosa (pega el <em>formato</em> copiado con la brocha), así que si no ves el resultado esperado usa cualquiera de los métodos siguientes.</p>`,
			},
			{
				heading: 'Con las opciones de pegado',
				html: `<ol>
<li>Pega normalmente con ${k('Ctrl', 'V')}.</li>
<li>Pulsa ${k('Ctrl')} (solo esa tecla) para abrir el menú <strong>Opciones de pegado</strong>.</li>
<li>Pulsa ${k('T')} o elige el icono <strong>Conservar solo texto</strong>.</li>
</ol>
<p>También lo tienes en la pestaña <strong>Inicio</strong>: despliega la flecha bajo <strong>Pegar</strong> y elige <strong>Conservar solo texto</strong>.</p>`,
			},
			{
				heading: 'Hacer que Word pegue siempre sin formato',
				html: `<ol>
<li>Ve a <strong>Archivo › Opciones › Avanzadas</strong>.</li>
<li>En la sección <strong>Cortar, copiar y pegar</strong>, busca <strong>Pegar desde otros programas</strong>.</li>
<li>Elige <strong>Mantener solo texto</strong> y acepta.</li>
</ol>
<p>Desde ese momento, todo lo que pegues desde el navegador, el correo u otros programas llegará como texto plano.</p>`,
			},
			{
				heading: 'En Word para Mac',
				html: `<p>Usa <strong>Edición › Pegado especial…</strong> y elige <strong>Texto sin formato</strong>. Si prefieres que el texto adopte el estilo del documento, usa <strong>Edición › Pegar y combinar formato</strong>.</p>`,
			},
			{
				heading: 'Si ya has pegado el texto con formato',
				html: `<p>Selecciona el texto y pulsa el botón <strong>Borrar todo el formato</strong> (la «A» con una goma) en la pestaña <strong>Inicio</strong>. El texto volverá al estilo normal del documento.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Por qué Ctrl+Mayús+V no pega sin formato en mi Word?',
				answer:
					'El atajo para pegar solo texto llegó a Word para Windows con Microsoft 365. En versiones anteriores, Ctrl+Mayús+V pega el formato copiado con la brocha. En ese caso usa las opciones de pegado (Ctrl y después T) o configura Word para pegar siempre solo texto.',
			},
			{
				question: '¿Pegar sin formato quita también las imágenes y tablas?',
				answer:
					'Sí. Con «Conservar solo texto» las imágenes desaparecen y las tablas se convierten en texto separado por tabulaciones. Si necesitas mantener la tabla, pega con formato y usa después «Borrar todo el formato».',
			},
		],
	},
	{
		slug: 'pegar-sin-formato-mac',
		navLabel: 'Mac',
		summary: 'El atajo universal de macOS y qué hacer en TextEdit, Google Docs o Word.',
		title: 'Cómo pegar sin formato en Mac: atajo de teclado | Pegatexto',
		description:
			'El atajo para pegar sin formato en Mac es Cmd+Opción+Mayús+V. Descubre cómo usarlo en Safari, Chrome, Pages, Notas, Mail, TextEdit y Google Docs.',
		h1: 'Cómo pegar sin formato en Mac',
		lead: `En la mayoría de apps de Mac el atajo es ${k('⌘ Cmd', '⌥ Opción', '⇧ Mayús', 'V')}: pega el texto adaptándolo al estilo del documento.`,
		sections: [
			{
				heading: 'El atajo general de macOS',
				html: `<p>${k('⌘ Cmd', '⌥ Opción', '⇧ Mayús', 'V')} corresponde a la opción del menú <strong>Edición</strong> que pega el texto con el estilo del destino. Funciona en Safari, Chrome, Pages, Keynote, Notas, Mail y en la mayoría de apps nativas.</p>
<p>Si en alguna app no hace nada, abre el menú <strong>Edición</strong>: si la opción existe, aparecerá ahí con su atajo.</p>`,
			},
			{
				heading: 'En Google Docs',
				html: `<p>En Google Docs el atajo es más corto: ${k('⌘ Cmd', '⇧ Mayús', 'V')}, o <strong>Editar › Pegar sin formato</strong>.</p>`,
			},
			{
				heading: 'En TextEdit',
				html: `<p>TextEdit trabaja por defecto con texto enriquecido. Para quitar todo el formato de un documento, usa <strong>Formato › Convertir a texto normal</strong> (${k('⌘ Cmd', '⇧ Mayús', 'T')}).</p>`,
			},
			{
				heading: 'En Word para Mac',
				html: `<p>Usa <strong>Edición › Pegado especial…</strong> y elige <strong>Texto sin formato</strong>. Tienes más opciones en la <a href="/pegar-sin-formato-word/">guía para pegar sin formato en Word</a>.</p>`,
			},
			{
				heading: 'Hacer que Cmd+V pegue siempre sin formato',
				html: `<p>En <strong>Ajustes del Sistema › Teclado › Funciones rápidas de teclado › Funciones rápidas de apps</strong> puedes crear un atajo nuevo: escribe el nombre exacto de la opción tal y como aparece en el menú <strong>Edición</strong> de la app y asígnale ${k('⌘ Cmd', 'V')}.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Cómo se pega sin formato en iPhone o iPad?',
				answer:
					'iOS y iPadOS no tienen un atajo universal para pegar sin formato. La forma más sencilla es abrir Pegatexto en Safari, pegar el texto en el cuadro, pulsar «Copiar texto plano» y pegarlo en la app de destino.',
			},
			{
				question: '¿Cmd+Opción+Mayús+V quita los enlaces?',
				answer:
					'Sí. El texto se pega con el estilo del documento de destino, por lo que se pierden los enlaces, las negritas, los colores y las fuentes del original.',
			},
		],
	},
	{
		slug: 'pegar-sin-formato-windows',
		navLabel: 'Windows',
		summary: 'Ctrl+Mayús+V, PowerToys y cómo pegar sin formato en cualquier programa.',
		title: 'Cómo pegar sin formato en Windows: Ctrl+Mayús+V | Pegatexto',
		description:
			'En Windows, Ctrl+Mayús+V pega sin formato en navegadores y muchas apps. Descubre qué hacer cuando no funciona y cómo pegar texto plano en cualquier programa.',
		h1: 'Cómo pegar sin formato en Windows',
		lead: `En Windows el atajo es ${k('Ctrl', 'Mayús', 'V')}. Funciona en Chrome, Edge, Firefox, Google Docs, Gmail y en Word con Microsoft 365.`,
		sections: [
			{
				heading: 'Con Ctrl+Mayús+V',
				html: `<p>${k('Ctrl', 'Mayús', 'V')} pega solo el texto en los navegadores (Chrome, Edge, Firefox) y en todo lo que uses dentro de ellos: Gmail, Outlook en la web, Google Docs, WordPress, Notion y la mayoría de editores online.</p>
<p>En programas de escritorio depende de cada uno. Word lo admite en Microsoft 365; para otras versiones, mira la <a href="/pegar-sin-formato-word/">guía de Word</a>.</p>`,
			},
			{
				heading: 'En cualquier programa con PowerToys',
				html: `<p><a href="https://learn.microsoft.com/es-es/windows/powertoys/" rel="noopener">PowerToys</a> es una utilidad gratuita de Microsoft. Su función <strong>Pegado avanzado</strong> permite pegar como texto sin formato en cualquier aplicación con ${k('Win', 'Ctrl', 'Alt', 'V')}.</p>`,
			},
			{
				heading: 'El truco del Bloc de notas',
				html: `<p>El método clásico es pegar el texto en el Bloc de notas, volver a copiarlo y pegarlo en su destino. Pegatexto hace exactamente lo mismo, pero sin abrir otra aplicación y con herramientas extra para quitar saltos de línea o espacios sobrantes.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Por qué Ctrl+Mayús+V no funciona en algunos programas?',
				answer:
					'Cada programa decide qué hace con ese atajo. Los navegadores lo usan para pegar sin formato, pero algunas aplicaciones de escritorio lo reservan para otras funciones o no lo admiten. En esos casos puedes usar PowerToys o pasar el texto por Pegatexto.',
			},
			{
				question: '¿Hay alguna forma de que Ctrl+V pegue siempre sin formato?',
				answer:
					'Windows no tiene una opción global. Algunos programas sí la tienen, como Word y Outlook («Pegar desde otros programas: Mantener solo texto» en las opciones avanzadas).',
			},
		],
	},
	{
		slug: 'pegar-sin-formato-google-docs',
		navLabel: 'Google Docs',
		summary: 'El atajo para pegar sin formato y cómo borrar el formato de un texto ya pegado.',
		title: 'Cómo pegar sin formato en Google Docs | Pegatexto',
		description:
			'Pega sin formato en Google Docs con Ctrl+Mayús+V (Cmd+Mayús+V en Mac) o desde el menú Editar. Además, cómo borrar el formato de un texto ya pegado.',
		h1: 'Cómo pegar sin formato en Google Docs',
		lead: `En Google Docs el atajo es ${k('Ctrl', 'Mayús', 'V')} en Windows y ${k('⌘ Cmd', '⇧ Mayús', 'V')} en Mac.`,
		sections: [
			{
				heading: 'Con el atajo o el menú',
				html: `<p>Pulsa ${k('Ctrl', 'Mayús', 'V')} (o ${k('⌘ Cmd', '⇧ Mayús', 'V')} en Mac) para pegar el texto con el estilo de tu documento. Si prefieres el ratón, ve a <strong>Editar › Pegar sin formato</strong>.</p>`,
			},
			{
				heading: 'Si ya has pegado el texto con formato',
				html: `<p>Selecciona el texto y pulsa ${k('Ctrl', '\\')} (${k('⌘ Cmd', '\\')} en Mac), o ve a <strong>Formato › Borrar formato</strong>.</p>`,
			},
			{
				heading: 'Al copiar desde Google Docs a otro sitio',
				html: `<p>Cuando copias texto de un documento y lo pegas en un formulario, un CMS o un correo, el formato de Google Docs viaja con él. Usa ${k('Ctrl', 'Mayús', 'V')} en el destino si es una web.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Cómo se pega sin formato en Google Sheets?',
				answer:
					'En Google Sheets, Ctrl+Mayús+V (Cmd+Mayús+V en Mac) pega solo los valores, sin formato. También está en Editar › Pegado especial › Solo valores.',
			},
			{
				question: '¿Funciona en la app de Google Docs del móvil?',
				answer:
					'La app móvil no tiene un atajo equivalente. Puedes pegar el texto en Pegatexto desde el navegador del móvil, copiarlo limpio y pegarlo en el documento.',
			},
		],
	},
	{
		slug: 'quitar-formato-gmail',
		navLabel: 'Gmail',
		summary: 'Cómo pegar sin formato al redactar y cómo enviar un correo en texto plano.',
		title: 'Cómo quitar el formato en Gmail al pegar texto | Pegatexto',
		description:
			'Pega sin formato en Gmail con Ctrl+Mayús+V, quita el formato de un texto ya pegado con Ctrl+\\ o activa el modo de texto sin formato.',
		h1: 'Cómo quitar el formato en Gmail',
		lead: `Al redactar un correo en Gmail, pega con ${k('Ctrl', 'Mayús', 'V')} (${k('⌘ Cmd', '⇧ Mayús', 'V')} en Mac) para que el texto llegue sin formato.`,
		sections: [
			{
				heading: 'Pegar sin formato al redactar',
				html: `<p>${k('Ctrl', 'Mayús', 'V')} pega el texto con la fuente y el tamaño por defecto de Gmail, sin negritas, colores ni fondos heredados de la web o el documento de origen.</p>`,
			},
			{
				heading: 'Quitar el formato de un texto ya pegado',
				html: `<p>Selecciona el texto y pulsa ${k('Ctrl', '\\')} (${k('⌘ Cmd', '\\')} en Mac). También puedes abrir las <strong>opciones de formato</strong> (el icono de la «A» en la barra inferior) y pulsar <strong>Quitar formato</strong>.</p>`,
			},
			{
				heading: 'Enviar el correo en texto plano',
				html: `<p>En la ventana de redacción, abre el menú <strong>⋮ Más opciones</strong> y activa <strong>Modo de texto sin formato</strong>. El correo se enviará sin ningún formato, ni siquiera negritas o enlaces con texto.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Por qué al pegar en Gmail el texto sale con otro tamaño o color?',
				answer:
					'Porque al copiar desde una web o un documento se copia también su formato (fuente, tamaño, color y fondo). Pegando con Ctrl+Mayús+V o pasando el texto por Pegatexto, el correo mantiene el estilo por defecto de Gmail.',
			},
			{
				question: '¿El modo de texto sin formato afecta a los correos que recibo?',
				answer:
					'No. Solo afecta al correo que estás redactando. Puedes activarlo y desactivarlo en cada mensaje.',
			},
		],
	},
	{
		slug: 'pegar-sin-formato-outlook',
		navLabel: 'Outlook',
		summary: 'Atajos y ajustes para pegar sin formato en Outlook clásico, nuevo y web.',
		title: 'Cómo pegar sin formato en Outlook | Pegatexto',
		description:
			'Pega sin formato en Outlook con las opciones de pegado o Ctrl+Mayús+V, y configura Outlook clásico para que pegue siempre solo texto.',
		h1: 'Cómo pegar sin formato en Outlook',
		lead: `En el nuevo Outlook y en Outlook en la web, pega con ${k('Ctrl', 'Mayús', 'V')}. En Outlook clásico, usa la opción <strong>Conservar solo texto</strong>.`,
		sections: [
			{
				heading: 'En Outlook clásico para Windows',
				html: `<ol>
<li>Pega normalmente con ${k('Ctrl', 'V')}.</li>
<li>Pulsa ${k('Ctrl')} para abrir las <strong>Opciones de pegado</strong>.</li>
<li>Pulsa ${k('T')} o elige <strong>Conservar solo texto</strong>.</li>
</ol>
<p>También está en la pestaña <strong>Mensaje</strong>, desplegando <strong>Pegar</strong>.</p>`,
			},
			{
				heading: 'Hacer que Outlook clásico pegue siempre sin formato',
				html: `<ol>
<li>Ve a <strong>Archivo › Opciones › Correo</strong> y pulsa <strong>Opciones del editor</strong>.</li>
<li>En <strong>Avanzadas</strong>, busca la sección <strong>Cortar, copiar y pegar</strong>.</li>
<li>En <strong>Pegar desde otros programas</strong>, elige <strong>Mantener solo texto</strong>.</li>
</ol>`,
			},
			{
				heading: 'En el nuevo Outlook y Outlook en la web',
				html: `<p>Pega con ${k('Ctrl', 'Mayús', 'V')}. Si quieres que todo el mensaje se envíe en texto plano, en la pestaña <strong>Opciones</strong> del mensaje cambia el formato a <strong>texto sin formato</strong>.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Por qué Outlook cambia la fuente al pegar texto?',
				answer:
					'Outlook mantiene por defecto el formato del texto de origen. Si pegas con «Conservar solo texto» o configuras «Mantener solo texto» en las opciones del editor, el texto adoptará la fuente de tu mensaje.',
			},
			{
				question: '¿Es lo mismo pegar sin formato que enviar el correo en texto plano?',
				answer:
					'No. Pegar sin formato solo afecta al texto que pegas; el resto del correo puede seguir teniendo negritas o enlaces. Enviar en texto plano elimina el formato de todo el mensaje.',
			},
		],
	},
	{
		slug: 'quitar-formato-chatgpt',
		navLabel: 'ChatGPT e IA',
		summary: 'Quita los asteriscos, almohadillas y caracteres invisibles del texto de ChatGPT, Claude o Gemini.',
		title: 'Quitar formato de ChatGPT: asteriscos, ## y más | Pegatexto',
		description:
			'Copia texto de ChatGPT, Claude o Gemini sin asteriscos, almohadillas ni caracteres invisibles. Pégalo, pulsa «Quitar Markdown» y cópialo limpio.',
		h1: 'Quitar el formato del texto de ChatGPT',
		lead: 'Pega el texto de ChatGPT, Claude o Gemini y pulsa <strong>Quitar Markdown</strong>: desaparecen los asteriscos, las almohadillas y el resto de símbolos de formato.',
		sections: [
			{
				heading: '¿Por qué el texto de ChatGPT sale con asteriscos y almohadillas?',
				html: `<p>ChatGPT, Claude, Gemini y la mayoría de asistentes de IA escriben sus respuestas en <strong>Markdown</strong>, un formato que usa símbolos para marcar el estilo: <code>**negrita**</code>, <code>## título</code>, <code>- viñeta</code>.</p>
<p>Al copiar la respuesta, según el botón que uses y dónde la pegues, el texto llega con formato (fuentes, tamaños, títulos) o con los símbolos de Markdown a la vista. Lo segundo pasa sobre todo al pegar en formularios, CMS, editores de código o al pegar sin formato con ${k('Ctrl', 'Mayús', 'V')}.</p>`,
			},
			{
				heading: 'Cómo quitar el formato de ChatGPT, Claude o Gemini',
				html: `<ol>
<li>Copia la respuesta de la IA (con su botón de copiar o seleccionándola).</li>
<li>Pégala en el cuadro de arriba: el formato visual desaparece al pegar.</li>
<li>Pulsa <strong>Quitar Markdown</strong> para eliminar asteriscos, almohadillas y demás símbolos.</li>
<li>Pulsa <strong>Quitar espacios extra</strong> para limpiar espacios dobles y caracteres invisibles.</li>
<li>Copia el resultado con <strong>Copiar texto plano</strong> y pégalo donde quieras.</li>
</ol>
<p>Si algo no queda como esperabas, ${k('Ctrl', 'Z')} (${k('⌘ Cmd', 'Z')} en Mac) deshace el último cambio.</p>`,
			},
			{
				heading: 'Qué hace el botón «Quitar Markdown»',
				html: `<ul>
<li><strong>Negritas, cursivas y tachados</strong>: quita los asteriscos, guiones bajos y virgulillas, y deja la palabra.</li>
<li><strong>Títulos</strong>: quita las almohadillas (<code>#</code>, <code>##</code>…) del principio de la línea.</li>
<li><strong>Listas</strong>: cambia los guiones y asteriscos de las viñetas por puntos (•). Las listas numeradas se quedan igual.</li>
<li><strong>Enlaces e imágenes</strong>: deja solo el texto del enlace, sin la dirección entre paréntesis.</li>
<li><strong>Código</strong>: quita las comillas invertidas y respeta el contenido de los bloques de código.</li>
<li><strong>Tablas</strong>: quita las barras y separa las columnas con tabulaciones, así que puedes pegarlas directamente en Excel o Google Sheets.</li>
<li><strong>Citas y separadores</strong>: quita los <code>&gt;</code> del principio de línea y las líneas <code>---</code>.</li>
</ul>`,
			},
			{
				heading: 'Caracteres invisibles en el texto de la IA',
				html: `<p>A veces el texto generado por IA incluye caracteres que no se ven: espacios especiales (como el espacio estrecho o el espacio duro) o caracteres de ancho cero. Pueden provocar saltos de línea raros, fallos al buscar palabras o problemas al pegar en formularios.</p>
<p>El botón <strong>Quitar espacios extra</strong> los elimina o los convierte en espacios normales.</p>
${toolTip}`,
			},
		],
		faq: [
			{
				question: '¿Los caracteres invisibles son una marca de agua de la IA?',
				answer:
					'No conviene tomarlos así. Son caracteres tipográficos que también aparecen en textos escritos por personas, y no sirven para saber de forma fiable si un texto lo ha escrito una IA. Quitarlos deja el texto más limpio, pero no cambia su origen.',
			},
			{
				question: '¿Funciona con Claude, Gemini, Copilot y otras IA?',
				answer:
					'Sí. Casi todos los asistentes de IA usan Markdown para dar formato a sus respuestas, así que el botón «Quitar Markdown» funciona igual con ChatGPT, Claude, Gemini, Copilot, Perplexity o DeepSeek.',
			},
			{
				question: '¿Cómo pego una respuesta de ChatGPT en Word manteniendo los títulos y las negritas?',
				answer:
					'Copia la respuesta con el botón de copiar de ChatGPT y pégala en Word con Ctrl+V normal: el formato se suele convertir en títulos y negritas de Word. Pegatexto sirve para lo contrario, cuando quieres el texto sin ningún formato.',
			},
		],
	},
	{
		slug: 'quitar-saltos-de-linea',
		navLabel: 'Quitar saltos de línea',
		summary: 'Une las líneas cortadas de un PDF o un correo sin perder los párrafos.',
		title: 'Quitar saltos de línea de un texto online | Pegatexto',
		description:
			'Elimina los saltos de línea de un texto copiado de un PDF o un correo en un clic. Une las líneas de cada párrafo y respeta la separación entre párrafos.',
		h1: 'Quitar saltos de línea de un texto',
		lead: 'Pega el texto y pulsa <strong>Quitar saltos de línea</strong>: une las líneas de cada párrafo y mantiene la separación entre párrafos.',
		sections: [
			{
				heading: '¿Por qué aparecen saltos de línea de más?',
				html: `<p>Al copiar texto de un PDF, de un correo en texto plano o de un documento escaneado, cada línea visual suele llegar como una línea independiente. Al pegarlo en otro sitio, las frases quedan cortadas a mitad.</p>`,
			},
			{
				heading: 'Cómo usarlo',
				html: `<ol>
<li>Pega el texto en el cuadro de arriba.</li>
<li>Pulsa <strong>Quitar saltos de línea</strong>. Si solo quieres arreglar una parte, selecciónala antes.</li>
<li>Si quedan espacios dobles, pulsa <strong>Quitar espacios extra</strong>.</li>
<li>Copia el resultado con <strong>Copiar texto plano</strong>.</li>
</ol>
<p>¿Te has equivocado? ${k('Ctrl', 'Z')} (${k('⌘ Cmd', 'Z')} en Mac) deshace el cambio.</p>`,
			},
			{
				heading: 'Otras herramientas incluidas',
				html: `<ul>
<li><strong>Quitar Markdown</strong>: quita asteriscos, almohadillas y demás símbolos del texto copiado de ChatGPT u otras IA.</li>
<li><strong>Quitar espacios extra</strong>: elimina espacios dobles, espacios al principio y final de línea, caracteres invisibles y líneas vacías sobrantes.</li>
<li><strong>MAYÚSCULAS</strong>, <strong>minúsculas</strong> y <strong>Tipo oración</strong>: cambian las mayúsculas y minúsculas del texto.</li>
<li><strong>Contador</strong>: muestra en todo momento cuántas palabras y caracteres tiene el texto.</li>
</ul>`,
			},
		],
		faq: [
			{
				question: '¿Se pierden los párrafos al quitar los saltos de línea?',
				answer:
					'No. Las líneas en blanco que separan párrafos se respetan: solo se unen las líneas que pertenecen a un mismo párrafo.',
			},
			{
				question: '¿Qué pasa con las palabras cortadas con guion al final de línea?',
				answer:
					'El guion se mantiene, porque no siempre es posible saber si forma parte de la palabra. Revisa el texto resultante si el original tenía palabras partidas.',
			},
		],
	},
];
