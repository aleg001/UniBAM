# UniBAM Landing Page

## Descripción del Proyecto

UniBAM es una aplicación web optimizada para dispositivos móviles desarrollada para el banco BAM, cuyo objetivo es captar la atención de los clientes jóvenes y estudiantes universitarios. El principal objetivo del proyecto es aumentar la fidelización de los clientes ofreciendo productos y beneficios personalizados, alineados con las necesidades e intereses de los jóvenes. Esta landing page actúa como un prototipo que presenta las características principales de la aplicación.

El proyecto está construido utilizando tecnologías frontend modernas, como Vue 3, Nuxt 3, Tailwind CSS y TypeScript, lo que garantiza un código mantenible, escalable y optimizado para el rendimiento y la accesibilidad. Está diseñado con una estrategia mobile-first, priorizando la experiencia en dispositivos móviles.

## Tecnologías Utilizadas

- **[Vue 3](https://vuejs.org/)**: Vue 3 es un framework progresivo de JavaScript para construir interfaces de usuario. En este proyecto se utiliza como el framework principal para la construcción de componentes y la gestión del estado de la aplicación.
  
- **[Nuxt 3](https://nuxt.com/)**: Nuxt es un framework intuitivo y de alto rendimiento basado en Vue.js. Proporciona características potentes como el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG), con una estructura modular que facilita el escalado y mantenimiento de aplicaciones grandes.

- **[Radix UI](https://www.radix-ui.com/)**: Radix UI es una librería de componentes accesibles y sin estilos predefinidos que te permite crear diseños flexibles y personalizados. Se eligió por su simplicidad y enfoque en la accesibilidad desde el primer momento.

- **[Tailwind CSS](https://tailwindcss.com/)**: Tailwind CSS es un framework de utilidades CSS que permite desarrollar interfaces modernas rápidamente sin necesidad de abandonar el archivo HTML. Facilita la personalización de los diseños con facilidad y mantiene el tamaño del archivo CSS reducido.

- **[TypeScript](https://www.typescriptlang.org/)**: TypeScript agrega seguridad de tipos a JavaScript, lo que hace que el código sea más robusto, mantenible y fácil de refactorizar. Ayuda a prevenir errores comunes de codificación y proporciona un mejor soporte en los entornos de desarrollo (IDE).

- **[Pinia](https://pinia.vuejs.org/)**: Pinia es la librería para la gestión de estado en este proyecto. Es una versión mejorada de Vuex, ofreciendo una API más sencilla y poderosa.

- **[Vue I18n](https://vue-i18n.intlify.dev/)**: Este plugin de internacionalización permite soportar múltiples idiomas en la aplicación. Es una característica crítica para UniBAM, ya que busca servir a una audiencia diversa.

- **[Dayjs](https://day.js.org/)**: Dayjs es una alternativa ligera a Moment.js para la manipulación de fechas. Se utiliza para manejar funcionalidades relacionadas con fechas dentro de la aplicación.

- **[ESLint](https://eslint.org/)**: ESLint ayuda a hacer cumplir la calidad del código detectando y corrigiendo problemas en el código JavaScript. Asegura que la base del código se mantenga limpia y consistente.

- **[Stylelint](https://stylelint.io/)**: Este linter ayuda a evitar errores en el CSS y a hacer cumplir las mejores prácticas, garantizando que el código CSS siga convenciones adecuadas.

- **[Prettier](https://prettier.io/)**: Prettier es un formateador de código que asegura un estilo consistente en todo el proyecto, mejorando la legibilidad y el mantenimiento.

## Estructura del Proyecto

```bash
UniBAM/
├── assets/             # Archivos estáticos como imágenes y fuentes
├── components/         # Componentes de Vue para la aplicación
├── layouts/            # Layouts de la aplicación (cabeceras, pies de página, etc.)
├── pages/              # Páginas de la aplicación
├── plugins/            # Plugins de Vue (e.g., Pinia, I18n)
├── public/             # Archivos estáticos públicos
├── store/              # Gestión de estado con Pinia
├── styles/             # Estilos globales y configuración de Tailwind
├── types/              # Tipos para TypeScript
├── utils/              # Funciones utilitarias y helpers
├── .eslintrc.js        # Configuración de ESLint
├── .stylelintrc.json   # Configuración de Stylelint
├── nuxt.config.ts      # Configuración de Nuxt 3
└── package.json        # Dependencias del proyecto y scripts

```

## Configuración del Proyecto

1. **Entrar al Directorio del Proyecto**  
   Primero, abre una nueva ventana de terminal y navega al directorio del proyecto:

$ cd <project-folder>


2. **Instalar Dependencias del Proyecto**  
Una vez dentro del directorio del proyecto, instala los paquetes necesarios utilizando npm:

$ npm install


3. **Iniciar el Servidor de Desarrollo**  
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando. La aplicación estará disponible en `http://localhost:3000` por defecto:

$ npm run dev


4. **Lint y Arreglo Automático de Estilo de Código (JavaScript y HTML)**  
Ejecuta el siguiente script para arreglar automáticamente los problemas de estilo de código en los archivos JavaScript y HTML:

$ npm run lint-fix


5. **Verificación del Estilo de Código CSS**  
Para verificar el estilo de código CSS y detectar posibles errores, utiliza el siguiente comando:

$ npm run css-check


6. **Arreglar Automáticamente el Estilo de Código CSS**  
Si hay problemas con los estilos CSS, puedes arreglarlos automáticamente ejecutando:

$ npm run css-fix


7. **Previsualizar la Construcción de Producción Localmente**  
Para previsualizar localmente la construcción de producción, ejecuta el siguiente comando:

$ npm run preview