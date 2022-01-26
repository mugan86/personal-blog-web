import { IInfoCard } from "@core/interfaces/info-card.interface";

export const COURSES_OFFERS: Array<IInfoCard> = [
    {
        title: 'Bootcamp Python 3: Aprende desde cero paso a paso al detalle',
        description: '¡Aprende  Python paso a paso con temas como Clases, Objetos, Ficheros, Bases de datos, Paquetes en PyPi y mucho más!',
        image: 'https://img-b.udemycdn.com/course/750x422/3665210_43aa_4.jpg',
        externalRouter: 'https://cursos.anartz-mugika.com/bootcamp-python-3',
        price: 0,
        tags: [
            {
                label: 'Python 3',
                color: '#4B8BBE'
            },
            {
                label: 'PyPi',
                color: '#e3cc20'
            },
            {
                label: 'Todos los niveles',
                color: '#55d442'
            }
        ]
    }
];