import { IInfoCard } from './../interfaces/info-card.interface';
export const shuffled = (unshuffled: Array<IInfoCard>) =>
  unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
