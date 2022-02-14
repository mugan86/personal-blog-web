import { ITag } from './tag.interface';
export interface IInfoCard {
  id?: number,
  buttonLabel?: string;
  git?: string;
  title: string;
  description: string;
  image?: string;
  externalRouter?: string;
  internalRouter?: string;
  plusInfo?: string;
  price: number | string;
  tags?: Array<ITag>;
  finish?: boolean;
  year?: number | string
  top?: boolean;
}
