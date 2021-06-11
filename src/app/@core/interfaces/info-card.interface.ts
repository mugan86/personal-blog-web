export interface IInfoCard {
    title: string;
    description: string;
    image?: string;
    externalRouter?: string;
    internalRouter?: string;
    plusInfo?: string;
    price: number | string;
}