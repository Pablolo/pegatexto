# Pegatexto

Web de una sola función: pega texto con formato (de Word, Gmail, Google Docs, una web...) y conviértelo al instante en texto plano, listo para volver a copiar. Todo ocurre en el navegador, sin backend ni base de datos.

## Stack

- [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com)
- Sin backend, sin base de datos, sin analítica
- Despliegue como sitio estático en Cloudflare Pages

## Comandos

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala las dependencias                      |
| `npm run dev`       | Arranca el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Genera el sitio estático en `./dist/`         |
| `npm run preview`   | Previsualiza el build localmente              |

## Despliegue en Cloudflare Pages

El proyecto es 100% estático (sin adapter de servidor). En Cloudflare Pages:

- **Comando de build**: `npm run build`
- **Directorio de salida**: `dist`
- **Versión de Node**: 22 (ver `engines` en `package.json`)

No requiere variables de entorno ni configuración adicional.
