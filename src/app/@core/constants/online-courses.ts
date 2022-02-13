import { IInfoCard } from '@core/interfaces/info-card.interface';
import { TAGS_ITEMS } from './tags';

export const COURSES_OFFERS: Array<IInfoCard> = [
  {
    title: 'Bootcamp Python 3: Aprende desde cero paso a paso al detalle',
    description:
      '¡Aprende  Python paso a paso con temas como Clases, Objetos, Ficheros, Bases de datos, Paquetes en PyPi y mucho más!',
    image: 'https://img-b.udemycdn.com/course/750x422/3665210_43aa_4.jpg',
    externalRouter: 'https://cursos.anartz-mugika.com/bootcamp-python-3',
    price: 0,
    tags: [TAGS_ITEMS.PYTHON_3, TAGS_ITEMS.PYPI, TAGS_ITEMS.ALL_LEVELS],
  },
  {
    title: 'Introducción a GraphQL desde las bases hasta crear APIs',
    description:
      'Primeros pasos con GraphQL: Lenguaje de manipulación y consulta de datos Open Source para API. Desarrollado por Facebook',
    image: 'https://img-c.udemycdn.com/course/750x422/2719748_924d.jpg',
    externalRouter:
      'https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/',
    plusInfo: '10h35min',
    price: 0,
    tags: [TAGS_ITEMS.GRAPHQL, TAGS_ITEMS.DEPLOY, TAGS_ITEMS.POSTMAN],
  },
  {
    title: 'Curso Completo de Leaflet - De 0 a Experto',
    description:
      'Aprende a trabajar con mapas interactivos desde 0 hasta un nivel experto. Uso de diferentes capas, marcadores por defecto y personalizados, capas vectoriales y mucho más!',
    image: '/assets/img/courses/leaflet.webp',
    externalRouter: 'https://cursos.anartz-mugika.com/leaflet-from-scratch',
    price: 0,
    tags: [TAGS_ITEMS.TYPESCRIPT, TAGS_ITEMS.ALL_LEVELS],
  },
  {
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
  },
  {
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
  },
  {
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
      TAGS_ITEMS.TESTING,
    ],
  },
  {
    title: 'Compodoc: Crea documentación en proyectos Angular/Ionic/TS',
    description:
      'Crear documentación de calidad y MUY fácil de mantener con Compodoc para proyectos de Angular 2+ / Ionic 2+ / Typescript',
    image: 'https://img-c.udemycdn.com/course/750x422/1777518_b681_6.jpg',
    externalRouter:
      'https://www.udemy.com/course/compodoc-crea-documentacion-en-angular-ionic/',
    price: 0,
    tags: [
      {
        label: 'Angular',
        color: '#d6153c',
      },
      {
        label: 'Ionic',
        color: '#6642c9',
      },
      {
        label: 'Typescript',
        color: '#0850d4',
      },
      {
        label: 'Github Pages',
        color: '#212529',
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
