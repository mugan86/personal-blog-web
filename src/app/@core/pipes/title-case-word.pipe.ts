import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseWord'
})
export class TitleCaseWordPipe implements PipeTransform {

  transform(value: string): string {
    return this.titleCaseWord(value);
  }

  titleCaseWord(word: string): string {
    if (!word) return 'No word';
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
