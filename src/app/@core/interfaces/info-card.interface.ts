import { ITag } from './tag.interface';
import { ProfileTypes } from "./../constants/profileTypes"
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
  profileType?: ProfileTypes;
}
