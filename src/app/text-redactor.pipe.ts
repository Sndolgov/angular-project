import {Pipe, PipeTransform} from '@angular/core';

function redactWords(words: string[]) {
  const pretext: Array<string> = ['and', 'of', 'the', 'a', 'this', 'to'];
  words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1).toLowerCase();
  for (let i = 1; i < words.length; i++) {
    words[i] = words [i].toLowerCase();
    if (pretext.indexOf(words[i]) === -1) {
      words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }
}

function concatStrings(words: string[], sign: string[]): string {
  let res = '';
  for (let i = 0; i < sign.length; i++) {
    res += words[i] + sign[i];
  }
//  res += words[words.length - 1];
  return res;
}

@Pipe({
  name: 'textRedactor'
})
export class TextRedactorPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    value = value.trim();
    const words = value.split(/[^A-Za-z]+/);
    const sign = value.split(/[A-Za-z]+/);
    sign.splice(0, 1)
   // sign.splice(sign.length - 1, 1);
    redactWords(words);
    return concatStrings(words, sign);
  }

}
