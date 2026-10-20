# Portafolio de Carlos Raúl Domínguez Aragón

Base para GitHub Pages con el tema Minimal. El contenido se adaptó de Portfolio.docx; conserva los cinco proyectos en inglés, las 18 capturas adjuntas y la nueva fotografía de perfil con recorte circular de mayor resolución. La portada resume cada caso y enlaza al desarrollo completo.

## Publicación desde el navegador

1. Revisa las capturas antes de subirlas a un repositorio público. Los tableros RMA todavía muestran montos; PPAP contiene números de parte y descripciones. Sustituye esos datos si no puedes divulgarlos. Los archivos de este paquete conservan las imágenes que proporcionaste.
2. Crea un repositorio público llamado exactamente TU_USUARIO.github.io, usando tu nombre de usuario de GitHub. Inicialízalo con un README. Si ya existe, úsalo sin borrar su contenido; integra o respalda los archivos que tengan el mismo nombre.
3. Descomprime el paquete. Abre la carpeta portfolio-github y sube su CONTENIDO a la raíz del repositorio, no el ZIP ni la carpeta contenedora. Usa Add file → Upload files, arrastra archivos y carpetas y confirma el commit en main.
4. Debes ver _config.yml, index.md, assets y projects directamente en la raíz. README.md y MAPA_IMAGENES.md son instrucciones; se excluyen del sitio.
5. En Settings → Pages, elige Deploy from a branch, main y /(root); guarda.
6. Espera la publicación. Revisa el proceso de Pages en Actions y abre https://TU_USUARIO.github.io/.
7. Verifica las cinco páginas, imágenes ampliadas, LinkedIn y correo. Puedes editar cualquier .md con el lápiz de GitHub y guardar con Commit changes.

La guía Word explica los pasos, el mapa de archivos y las mejoras sugeridas con más detalle. No está incluido un CV PDF ni un notebook: agrega enlaces solamente cuando esos archivos o repositorios existan.

## Qué editar

- _config.yml: nombre, descripción y foto lateral. La configuración usa theme: jekyll-theme-minimal.
- index.md: presentación, habilidades, contacto y resúmenes.
- projects/*.md: contenido completo de cada proyecto.
- assets/img/: capturas originales renombradas y foto.
- assets/css/style.scss: ajustes mínimos de legibilidad; conserva las dos líneas --- iniciales y el @import.

No agregues .nojekyll: esta base utiliza Jekyll. Evita un index.html paralelo; index.md es la portada. No subas el Word esperando que se convierta automáticamente en una web.

## Alcance de la verificación

Se revisaron la configuración YAML, rutas locales, referencias de imágenes, contenido de los cinco proyectos y coincidencia de las imágenes con sus originales. Esta base no se ha publicado en tu cuenta ni se ha compilado en GitHub Pages; la compilación y revisión en móvil se completan después de subirla.

## Evidencia adicional recomendable

- Power BI: captura del modelo, preparación en Power Query o medida representativa, con datos aptos para difusión.
- Power Automate: captura del flujo y sus condiciones. Los correos muestran el resultado, no toda la implementación.
- Python: notebook con salidas, dispersión con unidades claras y README de ejecución. Conserva la identificación de proyecto académico; jams_delay es una medida agregada, no el retraso de una persona.
- No cuentes diez capturas de correo como diez flujos: el Word describe seis flujos documentales y dos de seguimiento con rutas condicionales.

## Referencias

- https://malegoma.github.io/
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://github.com/pages-themes/minimal
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web
