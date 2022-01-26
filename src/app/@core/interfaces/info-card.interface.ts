import { ITag } from './tag.interface';
export interface IInfoCard {
  buttonLabel?: string;
  title: string;
  description: string;
  image?: string;
  externalRouter?: string;
  internalRouter?: string;
  plusInfo?: string;
  price: number | string;
  tags?: Array<ITag>;
}
