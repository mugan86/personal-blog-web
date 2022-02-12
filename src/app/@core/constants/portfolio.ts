import { IInfoCard } from "@core/interfaces/info-card.interface";
import { TAGS_ITEMS } from "./tags";

export const PORTFOLIO_ITEMS: Array<IInfoCard> = [
    {
        id: 1,
        title: 'Breaking Bad - Sistemas de votaciones en Tiempo Real',
        description: 'Proyecto web que consume de una API GraphQL donde podemos realizar votaciones y consultar los resultados de manera individual y ver el global en una gráfica.',
        image: 'assets/img/portfolio/breaking-bad-react.webp',
        externalRouter: 'https://react-projects-2022.github.io/breaking-bad-app/',
        internalRouter: '',
        price: "",
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
            TAGS_ITEMS.TESTING
        ],
        finish: true
    },
    {
        id: 2,
        title: 'Tienda Online - Gamezonia - MEAN + GraphQL',
        description: 'Tienda Online con carrito de compra y pagos con Stripe con el stack MEAN + GraphQL.',
        image: 'assets/img/portfolio/gamezonia-meang-front.webp',
        externalRouter: 'https://react-projects-2022.github.io/breaking-bad-app/',
        internalRouter: '',
        price: "",
        git: 'https://github.com/mugan86/frontend-meang-online-shop',
        tags: [
            TAGS_ITEMS.GRAPHQL,
            TAGS_ITEMS.ANGULAR,
            TAGS_ITEMS.DEPLOY,
            // TAGS_ITEMS.REST,
            TAGS_ITEMS.STRIPE,
            TAGS_ITEMS.NPM,
            TAGS_ITEMS.BOOTSTRAP
        ],
        finish: true
    },
    {
        id: 3,
        title: 'Anartz Mugika - Web personal',
        description: 'Web personal para mostrar mi perfil profesional con mi CV y trabajos.',
        image: 'assets/img/portfolio/anartz.webp',
        externalRouter: 'https://anartz-mugika.com',
        internalRouter: '',
        price: "",
        git: 'https://github.com/mugan86/personal-blog-web',
        tags: [
            TAGS_ITEMS.GRAPHQL,
            TAGS_ITEMS.ANGULAR,
            TAGS_ITEMS.DEPLOY,
            // TAGS_ITEMS.REST,
            TAGS_ITEMS.BOOTSTRAP,
            TAGS_ITEMS.MEAN,
            TAGS_ITEMS.BOOTSTRAP
        ],
        finish: true
    },
    {
        id: 4,
        title: 'Freelancer - Start Bootstrap - React',
        description: 'Adaptación de la plantilla original en HTML a un proyecto React para usarlo y crear nuestra web de Freelancer con React.',
        image: 'assets/img/portfolio/freelancer-react.webp',
        externalRouter: 'https://templates-desarrollo-web-mobile.github.io/freelancer-reactjs/',
        internalRouter: '',
        price: "",
        git: 'https://github.com/templates-desarrollo-web-mobile/freelancer-reactjs',
        tags: [
            TAGS_ITEMS.GITHUB_ACTIONS,
            TAGS_ITEMS.REACT,
            // TAGS_ITEMS.GITHUB_ACTIONS,
            TAGS_ITEMS.DEPLOY,
            TAGS_ITEMS.TESTING,
            TAGS_ITEMS.BOOTSTRAP
        ],
        finish: true
    },
];