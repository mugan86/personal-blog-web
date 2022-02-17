import { TAGS_ITEMS } from "@core/constants/tags";

export const arrayNumberFromRange = (start: number, finish: number) =>
  Array.from({ length: finish - start + 1 }, (_, k) => k + start);

export const technologiesList = () => Object.values(TAGS_ITEMS).slice(1).map((value) => value.label);
