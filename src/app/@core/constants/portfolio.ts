import { IInfoCard } from '@core/interfaces/info-card.interface';
import { TAGS_ITEMS } from './tags';

export const PORTFOLIO_ITEMS: Array<IInfoCard> = [
  {
    id: 1,
    title:
      'Breaking Bad - Sistemas de votaciones en Tiempo Real - MERN + GraphQL',
    description:
      'Proyecto web que consume de una API GraphQL donde podemos realizar votaciones y consultar los resultados de manera individual y ver el global en una gráfica.',
    image: 'assets/img/portfolio/breaking-bad-react.webp',
    externalRouter: 'https://react-projects-2022.github.io/breaking-bad-app/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/React-Projects-2022/breaking-bad-app',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.REACT,
      TAGS_ITEMS.DEPLOY,
      // TAGS_ITEMS.REST,
      TAGS_ITEMS.MERN,
      TAGS_ITEMS.I18N,
      TAGS_ITEMS.CI,
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.TESTING,
    ],
    finish: true,
    year: '2022',
  },
  {
    id: 2,
    title: 'Tienda Online - Gamezonia - MEAN + GraphQL',
    description:
      'Tienda Online con carrito de compra y pagos con Stripe con el stack MEAN + GraphQL.',
    image: 'assets/img/portfolio/gamezonia-meang-front.webp',
    externalRouter: 'https://gamezonia.netlify.app/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/mugan86/frontend-meang-online-shop',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      // TAGS_ITEMS.REST,
      TAGS_ITEMS.STRIPE,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: true,
    year: '2019',
  },
  {
    id: 3,
    title: 'Anartz Mugika - Web personal',
    description:
      'Web personal para mostrar mi perfil profesional con mi CV y trabajos.',
    image: 'assets/img/portfolio/anartz.webp',
    externalRouter: 'https://anartz-mugika.com',
    internalRouter: '',
    price: '',
    git: 'https://github.com/mugan86/personal-blog-web',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      // TAGS_ITEMS.REST,
      TAGS_ITEMS.BOOTSTRAP,
      TAGS_ITEMS.MEAN,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: false,
    year: '2021-?',
  },
  {
    id: 4,
    title: 'Freelancer - Start Bootstrap - React',
    description:
      'Adaptación de la plantilla original en HTML a un proyecto React para usarlo y crear nuestra web de Freelancer con React.',
    image: 'assets/img/portfolio/freelancer-react.webp',
    externalRouter:
      'https://templates-desarrollo-web-mobile.github.io/freelancer-reactjs/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/templates-desarrollo-web-mobile/freelancer-reactjs',
    tags: [
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.REACT,
      // TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.BOOTSTRAP,
    ],
    finish: true,
    year: '2021',
  },
  {
    id: 5,
    title: 'React-Shop-UI - Librería React para proyectos Ecommerce - NPM',
    description:
      'Librería basada en la librería Angular "ng-shop-ui" para poder utilizarla en proyectos de React de tipo Ecommerce.',
    image: 'assets/img/portfolio/react-shop-ui.webp',
    externalRouter: 'https://anartz-mugika.gitbook.io/react-shop-ui-library/',
    internalRouter: '',
    price: '',
    git: 'https://github.com/React-Projects-2022/react-shop-ui',
    tags: [
      TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.REACT,
      // TAGS_ITEMS.GITHUB_ACTIONS,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.BOOTSTRAP,
      TAGS_ITEMS.NPM,
    ],
    finish: false,
    year: '2021-?',
  },
  {
      id: 6,
    title: 'Bootcamp Python 3: Aprende desde cero paso a paso al detalle',
    description:
      '¡Aprende  Python paso a paso con temas como Clases, Objetos, Ficheros, Bases de datos, Paquetes en PyPi y mucho más!',
    image: 'https://img-b.udemycdn.com/course/750x422/3665210_43aa_4.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/bootcamp-python-3',
    price: 0,
    tags: [TAGS_ITEMS.PYTHON_3, TAGS_ITEMS.PYPI, TAGS_ITEMS.ALL_LEVELS],
    year: "2021-?",
    git: 'https://github.com/mugan86/bootcamp-basic-to-expert-from-scratch',
  },
  {
      id: 7,
    title: 'Introducción a GraphQL desde las bases hasta crear APIs',
    description:
      'Primeros pasos con GraphQL: Lenguaje de manipulación y consulta de datos Open Source para API. Desarrollado por Facebook',
    image: 'https://img-c.udemycdn.com/course/750x422/2719748_924d.jpg',
    externalRouter:
      'https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/',
    plusInfo: '10h35min',
    price: 0,
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.DEPLOY, TAGS_ITEMS.POSTMAN],
    finish: true,
    year: 2020,
    git: '',
  },
  {
      id: 8,
    title: 'Curso Completo de Leaflet - De 0 a Experto',
    description:
      'Aprende a trabajar con mapas interactivos desde 0 hasta un nivel experto. Uso de diferentes capas, marcadores por defecto y personalizados, capas vectoriales y mucho más!',
    image: '/assets/img/courses/leaflet.webp',
    externalRouter: 'https://cursos.anartz-mugika.com/leaflet-from-scratch',
    price: 0,
    tags: [TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.ALL_LEVELS],
    year: "2021",
    git: 'https://github.com/leaflet-maps-course/course-projects-from-scratch',
  },
  {
      id: 9,
    title: 'NPM Desarrollar y publicar librerias JS,TS, Angular, ReactJS',
    description:
      '¡Aprende desde 0 las nociones de NPM y a crear librerías Node en JS, Typescript ReactJS Angular con ejemplos prácticos!',
    image: 'https://img-c.udemycdn.com/course/750x422/1992318_a8ef_3.jpg',
    externalRouter:
      'https://cursos.anartz-mugika.com/librerias-js-ts-angular-npm',
    price: '9.99-19.99 $',
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.JS_TS,
      TAGS_ITEMS.TESTING,
      TAGS_ITEMS.NPM,
      TAGS_ITEMS.DEPLOY,
    ],
    year: "2019",
    git: 'https://github.com/npm-js-ts-angular-modules-course',
  },
  {
      id: 10,
    title: 'Tienda Online: NodeJS + MongoDB + Stripe + GraphQL - MEAN+G',
    description:
      'Desarrollo de un ecommerce con el stack MEAN+G - MongoDB, NodeMailer, GraphQL, Carrito de Compra, Stripe, Deploy',
    image: 'https://img-c.udemycdn.com/course/750x422/2767652_1962_3.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/meang-gamezonia-full',
    price: '9.99-199.99 $',
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.MEAN,
    ],
    year: "2020",
    git: '',
  },
  {
    id: 11,
    title: 'Guía completa de GraphQL con Angular de 0 a Experto',
    description:
      'GraphQL con Angular desde 0 a Experto paso a paso. Testing,Apollo Client, JWT,Apps en tiempo real,MongoDB,Hasura,Heroku',
    image: 'https://img-c.udemycdn.com/course/750x422/2338870_2107_3.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/graphql-de-0-a-deploy',
    price: '9.99-19.99 $',
    tags: [
      TAGS_ITEMS.GRAPHQL,
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.DEPLOY,
      TAGS_ITEMS.TESTING
    ],
    year: "2019-2022",
    git: '',
  },
  {
      id: 12,
    title: 'Compodoc: Crea documentación en proyectos Angular/Ionic/TS',
    description:
      'Crear documentación de calidad y MUY fácil de mantener con Compodoc para proyectos de Angular 2+ / Ionic 2+ / Typescript',
    image: 'https://img-c.udemycdn.com/course/750x422/1777518_b681_6.jpg',
    externalRouter:
      'https://www.udemy.com/course/compodoc-crea-documentacion-en-angular-ionic/',
    price: 0,
    tags: [
      TAGS_ITEMS.ANGULAR,
      TAGS_ITEMS.IONIC,
      TAGS_ITEMS.TYPESCRIPT,
      TAGS_ITEMS.GITHUB_PAGES,
    ],
    git: '',
    year: 2018
  },
  {
      id: 13,
    title: 'Masterclass #3 Unity 2021: Programación de un Videojuego PONG',
    description:
      'Aprende DESDE CERO a programar TODAS LAS MECÁNICAS de un videojuego PONG para 2 jugadores con Unity y Visual Code C#',
    image:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/6LJ8DuGfSqC29VxfGWoS',
    externalRouter: 'https://cursos.anartz-mugika.com/pong-2d-unity',
    price: '7.99-11.99 $',
    tags: [
      {
        label: 'Básico',
        color: '#55d442',
      },
      {
        label: '2D',
        color: '#4B8BBE',
      },
      {
        label: 'Unity',
        color: '#b89e0f',
      },
    ],
    year: "2021",
    git: '',
  },
  {
      id: 14,
    title: 'Programación C# con Visual Studio Code 2021 de 0 a EXPERTO',
    description:
      'Aprende DESDE CERO programación C# hasta convertirte en EXPERTO DESARROLLADOR PROFESIONAL en el entorno .NET visual code',
    image: 'https://img-c.udemycdn.com/course/750x422/3472134_648a.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/master-c-sharp-vsc',
    price: '9.99-99.99 $',
    tags: [
      {
        label: 'Todos los niveles',
        color: '#55d442',
      },
      {
        label: 'C#',
        color: '#4B8BBE',
      },
      {
        label: 'POO',
        color: '#b89e0f',
      },
      {
        label: 'Proyecto final',
        color: '#b89e0f',
      },
    ],
    year: "2020-2021",
    git: '',
  },
  {
      id: 15,
    title: 'Introducción a Tecnologías del Desarrollo con los Mejores',
    description:
      'Conoce las tecnologías usadas por los 12 Masters. Python php C# mysql Unity Angular Golang COBOL ReactJS Spring Firebase',
    image: 'https://img-c.udemycdn.com/course/750x422/2684672_677b.jpg',
    externalRouter: 'https://www.udemy.com/course/masters-desarrollo/',
    price: 0,
    tags: [
      {
        label: 'GraphQL',
        color: '#bd199c',
      },
      {
        label: 'Angular',
        color: '#d6153c',
      },
      {
        label: 'Deploy',
        color: '#5d9b9c',
      },
    ],
    year: "2019",
    git: '',
  },
  {
    id: 16,
    externalRouter: "https://youtu.be/PoKDbcLSrr4",
    git: "https://github.com/mugan86/pro-cycling-stats-scrapping-node-js",
    title: 'Extraer datos de una página web SUPER FÁCIL - Web Scraping desde 0 con NodeJS',
    description:
      'En este taller os muestro como crear extraer datos de una web, con los trucos necesarios para terminar almacenándolos en un fichero CSV que usaremos para introducirlos en una Base de datos MongoDB.',
    image: 'assets/img/portfolio/scrapping-node-cycling.webp',
    price: 0,
    tags: [
      {
        label: 'GraphQL',
        color: '#bd199c',
      },
      {
        label: 'Angular',
        color: '#d6153c',
      },
      {
        label: 'Deploy',
        color: '#5d9b9c',
      },
    ],
    year: "2021",
  },
  {
    id: 17,
    externalRouter: "https://youtu.be/8AdaeduTwUo",
    git: "https://github.com/mugan86/web-scrapping-world-flags",
    title: 'Extracción de datos de los países con Web Scraping usando Typescript para juego de tipo QUIZ',
    description:
      'En este taller, en el que vamos a dar varias clases, vamos a conseguir descargar la información de todos los países con los datos más relevantes que nos va a ser útil a la hora de crear las preguntas del juego.',
    image: 'assets/img/portfolio/scrapping-quiz-flags.webp',
    price: 0,
    tags: [
      {
        label: 'GraphQL',
        color: '#bd199c',
      },
      {
        label: 'Angular',
        color: '#d6153c',
      },
      {
        label: 'Deploy',
        color: '#5d9b9c',
      },
    ],
    year: "2021",
  },
];
